import type {
  LoginResponse,
  RegistoData,
  RegistoResponse,
  Residente,
} from "@/types/residente";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "https://violet-beaver-178312.hostingersite.com"
).replace(/\/+$/, "");

const REGISTO_ENDPOINT =
  process.env.NEXT_PUBLIC_REGISTO_ENDPOINT ||
  "/api/auth/registro";

interface ApiOptions extends RequestInit {
  autenticado?: boolean;
}

function criarUrl(endpoint: string): string {
  const endpointNormalizado = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  return `${API_URL}${endpointNormalizado}`;
}

async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  const {
    autenticado = false,
    headers,
    ...fetchOptions
  } = options;

  const requestHeaders = new Headers(headers);

  if (
    fetchOptions.body &&
    !requestHeaders.has("Content-Type")
  ) {
    requestHeaders.set(
      "Content-Type",
      "application/json",
    );
  }

  if (
    autenticado &&
    typeof window !== "undefined"
  ) {
    const token =
      localStorage.getItem("noszona_token");

    if (token) {
      requestHeaders.set(
        "Authorization",
        `Bearer ${token}`,
      );
    }
  }

  let response: Response;

  try {
    response = await fetch(criarUrl(endpoint), {
      ...fetchOptions,
      headers: requestHeaders,
      cache: "no-store",
    });
  } catch {
    throw new Error(
      "Não foi possível conectar ao servidor.",
    );
  }

  const respostaTexto = await response.text();

  let data: unknown = {};

  if (respostaTexto) {
    try {
      data = JSON.parse(respostaTexto);
    } catch {
      if (!response.ok) {
        throw new Error(
          `O servidor devolveu uma resposta inválida (${response.status}).`,
        );
      }

      data = respostaTexto;
    }
  }

  if (!response.ok) {
    const errorData =
      typeof data === "object" && data !== null
        ? (data as {
            mensagem?: string;
            message?: string;
            erro?: string;
          })
        : {};

    throw new Error(
      errorData.mensagem ||
        errorData.message ||
        errorData.erro ||
        `Erro HTTP ${response.status}.`,
    );
  }

  return data as T;
}

export async function fazerLogin(
  username: string,
  password: string,
): Promise<LoginResponse> {
  return apiRequest<LoginResponse>(
    "/api/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        username: username.trim(),
        password,
      }),
    },
  );
}

export async function criarResidente(
  dados: RegistoData,
): Promise<RegistoResponse> {
  return apiRequest<RegistoResponse>(
    REGISTO_ENDPOINT,
    {
      method: "POST",
      body: JSON.stringify(dados),
    },
  );
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

  const residente =
    resposta.residente ||
    resposta.utilizador;

  if (!residente) {
    throw new Error(
      "O servidor não devolveu os dados do residente.",
    );
  }

  return residente;
}

export async function solicitarRecuperacaoPassword(
  email: string,
): Promise<{
  sucesso: boolean;
  mensagem?: string;
}> {
  return apiRequest(
    "/api/residentes/recuperar-password",
    {
      method: "POST",
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
      }),
    },
  );
}