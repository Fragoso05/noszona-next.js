"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";

import {
  obterResidenteGuardado,
  terminarSessao,
} from "@/lib/auth";

import type {
  Residente,
} from "@/types/residente";

export default function DashboardPage() {
  const router = useRouter();

  const [residente, setResidente] =
    useState<Residente | null>(null);

  const [carregando, setCarregando] =
    useState(true);

  useEffect(() => {
    const residenteSalvo =
      obterResidenteGuardado();

    if (!residenteSalvo) {
      router.replace("/login");
      return;
    }

    setResidente(residenteSalvo);
    setCarregando(false);
  }, [router]);

  function sair() {
    terminarSessao();
    router.push("/");
    router.refresh();
  }

  if (carregando) {
    return (
      <main className="dashboard-loading">
        A carregar dashboard...
      </main>
    );
  }

  if (!residente) {
    return null;
  }

  return (
    <>
      <Header residente={residente} />

      <main className="dashboard-page">
        <section className="dashboard-boas-vindas">
          <div>
            <span className="dashboard-eyebrow">
              Área do residente
            </span>

            <h1>
              Olá,{" "}
              {residente.nome?.split(" ")[0]}
            </h1>

            <p>
              Consulta a tua conta, saldo, pacote,
              cartão e serviços NOSZONA.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={sair}
          >
            Terminar sessão
          </button>
        </section>

        <section className="dashboard-resumo">
          <DashboardCard
            titulo="Saldo disponível"
            valor={`${Number(
              residente.saldo || 0,
            ).toLocaleString("pt-PT")} CVE`}
            descricao="Carteira virtual"
          />

          <DashboardCard
            titulo="Swipes"
            valor={String(
              residente.swipes || 0,
            )}
            descricao="Utilizações disponíveis"
          />

          <DashboardCard
            titulo="Pacote atual"
            valor={
              residente.pacote ||
              "Sem pacote"
            }
            descricao="Plano do residente"
          />

          <DashboardCard
            titulo="QR Digital"
            valor={
              residente.qrAtivo
                ? "Ativo"
                : "Inativo"
            }
            descricao="Identidade digital"
          />
        </section>

        <section className="dashboard-grid">
          <article className="dashboard-panel">
            <div className="dashboard-panel-header">
              <div>
                <span className="dashboard-eyebrow">
                  Identidade digital
                </span>

                <h2>Cartão do residente</h2>
              </div>

              <span
                className={`estado-badge ${
                  residente.cartaoGerado
                    ? "estado-ativo"
                    : "estado-pendente"
                }`}
              >
                {residente.cartaoGerado
                  ? "Ativo"
                  : "Pendente"}
              </span>
            </div>

            <div className="cartao-residente-digital">
              <div className="cartao-topo">
                <strong>NOSZONA Smart City</strong>
                <span>Resident Card</span>
              </div>

              <div className="cartao-corpo">
                <div>
                  <small>Residente</small>
                  <strong>
                    {residente.nome}
                  </strong>
                </div>

                <div>
                  <small>ID</small>
                  <strong>
                    {residente.id}
                  </strong>
                </div>

                <div>
                  <small>Pacote</small>
                  <strong>
                    {residente.pacote ||
                      "Sem pacote"}
                  </strong>
                </div>
              </div>

              <div className="cartao-footer">
                <span>
                  UID:{" "}
                  {residente.uid ||
                    "Não associado"}
                </span>

                <span>
                  QR{" "}
                  {residente.qrAtivo
                    ? "ativo"
                    : "inativo"}
                </span>
              </div>
            </div>
          </article>

          <article className="dashboard-panel">
            <div className="dashboard-panel-header">
              <div>
                <span className="dashboard-eyebrow">
                  Serviços
                </span>

                <h2>Acessos disponíveis</h2>
              </div>
            </div>

            <div className="servicos-lista">
              <Servico
                nome="Eventos"
                ativo={Boolean(
                  residente.eventos,
                )}
              />

              <Servico
                nome="Estacionamento"
                ativo={Boolean(
                  residente.parking,
                )}
              />

              <Servico
                nome="QR digital"
                ativo={Boolean(
                  residente.qrAtivo,
                )}
              />

              <Servico
                nome="Cartão físico"
                ativo={Boolean(
                  residente.cartaoGerado,
                )}
              />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

function DashboardCard({
  titulo,
  valor,
  descricao,
}: {
  titulo: string;
  valor: string;
  descricao: string;
}) {
  return (
    <article className="dashboard-card">
      <span>{titulo}</span>
      <strong>{valor}</strong>
      <small>{descricao}</small>
    </article>
  );
}

function Servico({
  nome,
  ativo,
}: {
  nome: string;
  ativo: boolean;
}) {
  return (
    <div className="servico-item">
      <span>{nome}</span>

      <strong
        className={
          ativo
            ? "servico-ativo"
            : "servico-inativo"
        }
      >
        {ativo
          ? "Disponível"
          : "Indisponível"}
      </strong>
    </div>
  );
}