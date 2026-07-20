import type { LoginResponse, Residente } from "@/types/residente";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://violet-beaver-178312.hostingersite.com";

interface ApiOptions extends RequestInit {
  autenticado?: boolean;
}

async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  const { autenticado = false, headers, ...fetchOptions } = options;

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("noszona_token")
      : null;

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...(autenticado && token
        ? { Authorization: `Bearer ${token}` }
        : {}),
      ...headers,
    },
  });

  let data: unknown;

  try {
    data = await response.json();
  } catch {
    throw new Error(
      `O servidor devolveu uma resposta inválida (${response.status}).`,
    );
  }

  if (!response.ok) {
    const errorData = data as {
      mensagem?: string;
      message?: string;
      erro?: string;
    };

    throw new Error(
      errorData.mensagem ||
        errorData.message ||
        errorData.erro ||
        `Erro HTTP ${response.status}`,
    );
  }

  return data as T;
}

export async function fazerLogin(
  username: string,
  password: string,
): Promise<LoginResponse> {
  return apiRequest<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: username.trim(),
      password,
    }),
  });
}

export async function obterPerfil(): Promise<Residente> {
  const resposta = await apiRequest<{
    sucesso?: boolean;
    residente?: Residente;
    utilizador?: Residente;
  }>("/api/auth/perfil", {
    method: "GET",
    autenticado: true,
  });

  const residente = resposta.residente || resposta.utilizador;

  if (!residente) {
    throw new Error("O servidor não devolveu os dados do residente.");
  }

  return residente;
}

export async function criarResidente(
  dados: Record<string, unknown>,
): Promise<{
  sucesso: boolean;
  mensagem: string;
  residente?: Residente;
}> {
  return apiRequest("/api/auth/registro", {
    method: "POST",
    body: JSON.stringify(dados),
  });
}

export async function solicitarRecuperacaoPassword(
  email: string,
): Promise<{
  sucesso: boolean;
  mensagem: string;
}> {
  return apiRequest("/api/residentes/recuperar-password", {
    method: "POST",
    body: JSON.stringify({
      email: email.trim(),
    }),
  });
}