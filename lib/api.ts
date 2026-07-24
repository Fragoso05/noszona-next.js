import type {
  LoginResponse,
} from "@/types/residente";

export async function fazerLogin(
  username: string,
  password: string,
): Promise<LoginResponse> {
  const resposta = await fetch(
    "/api/residentes/login",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        username: username.trim(),
        password,
      }),
      cache: "no-store",
    },
  );

  const dados =
    (await resposta.json()) as LoginResponse;

  if (!resposta.ok) {
    throw new Error(
      dados.mensagem ||
        "Erro durante o login.",
    );
  }

  return dados;
}