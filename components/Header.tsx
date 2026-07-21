"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Residente } from "@/types/residente";
import { terminarSessao } from "@/lib/auth";

interface HeaderProps {
  residente?: Residente | null;
}

export default function Header({ residente }: HeaderProps) {
  const router = useRouter();

  function sair() {
    terminarSessao();
    router.push("/");
    router.refresh();
  }

  const fotoPerfil =
    residente?.fotoPerfilBase64 ||
    residente?.fotoPerfil ||
    "/img/usercard.jpg";

  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo" aria-label="Página inicial">
          <Image
            src="/img/noszona-logo.jpg"
            alt="NOSZONA Smart"
            width={170}
            height={58}
            priority
            className="logo-img"
          />
        </Link>

        <nav className="nav-links" aria-label="Navegação principal">
          <Link href="/#como-funciona">Como funciona</Link>
          <Link href="/#pacotes">Pacotes</Link>
        </nav>

        <div className="nav-ctas">
          {!residente ? (
            <>
              <Link href="/login" className="btn btn-ghost">
                Login
              </Link>

              <Link href="/registo" className="btn btn-primary">
                Criar conta
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                className="conta-residente"
                onClick={() => router.push("/dashboard")}
              >
                <img
                  src={fotoPerfil}
                  alt={`Foto de ${residente.nome}`}
                  className="header-foto-perfil"
                />

                <span>
                  <small>Minha conta</small>
                  <strong>
                    {residente.nome?.split(" ")[0] || residente.username}
                  </strong>
                </span>
              </button>

              <button type="button" className="btn btn-ghost" onClick={sair}>
                Sair
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}