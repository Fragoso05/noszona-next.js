'use client'

import { useState } from 'react'

export default function NoszonaSmart() {
  const [view, setView] = useState<'home' | 'registo' | 'login' | 'dashboard' | 'recuperar'>('home')
  const [user, setUser] = useState<any>(null)

  return (
    <div>

      {/* ==================== HEADER ==================== */}
      <header>
        <a href="#top" className="logo">
          <img src="/img/noszona-logo.jpg" alt="NOSZONA Smart" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#como-funciona">Como funciona</a></li>
          <li><a href="#pacotes">Pacotes</a></li>
        </ul>

        <div className="nav-ctas">
          {!user ? (
            <>
              <button className="btn btn-ghost" onClick={() => setView('login')}>Login</button>
              <button className="btn btn-primary" onClick={() => setView('registo')}>Criar conta</button>
            </>
          ) : (
            <>
              <span className="user-greeting">Olá, {user.nome?.split(' ')[0]}</span>
              <button className="btn btn-ghost" onClick={() => setView('dashboard')}>Minha conta</button>
              <button className="btn btn-ghost" onClick={() => { setUser(null); setView('home') }}>Sair</button>
            </>
          )}
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      {view === 'home' && (
        <section className="hero" id="top">
          <div className="hero-bg"></div>
          <div className="hero-grid-lines"></div>

          <div className="hero-inner">
            <div>
              <div className="hero-tag">Smart City Cabo Verde</div>
              <h1>
                O teu cartão<br />
                para a <span className="accent">cidade inteligente.</span>
              </h1>
              <p>
                Uma identidade digital completa — QR seguro, carteira virtual,
                swipes na cantina e acesso exclusivo a todos os eventos Smart City.
              </p>

              <div className="hero-actions">
                <button className="btn btn-gold" onClick={() => setView('registo')}>Começar agora →</button>
                <button className="btn btn-outline-white" onClick={() => setView('login')}>Já tenho conta</button>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <strong>QR</strong>
                  <span>Acesso digital seguro</span>
                </div>
                <div className="hero-stat">
                  <strong>Cartão Físico</strong>
                  <span>Cartão físico opcional</span>
                </div>
                <div className="hero-stat">
                  <strong>CVE</strong>
                  <span>Saldo na carteira</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="card-3d">
                <div className="card-badge">✦ NOSZONA Smart City</div>

                <div className="feature-rows">
                  <div className="feature-row">
                    <div className="feature-icon fi-cyan">📱</div>
                    <div className="feature-row-text">
                      <strong>QR Dinâmico Seguro</strong>
                      <span>Renovado a cada 30s contra fraude</span>
                    </div>
                  </div>
                  <div className="feature-row">
                    <div className="feature-icon fi-gold">💳</div>
                    <div className="feature-row-text">
                      <strong>Carteira Virtual</strong>
                      <span>Recarrega saldo e swipes a qualquer momento</span>
                    </div>
                  </div>
                  <div className="feature-row">
                    <div className="feature-icon fi-green">🏙️</div>
                    <div className="feature-row-text">
                      <strong>Smart City Integrado</strong>
                      <span>Acesso a serviços, eventos e infraestrutura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

            {/* ==================== TRUST STRIP ==================== */}
      {view === 'home' && (
        <div className="trust-section">
          <div className="trust-inner">
            <div className="trust-item">
              <div className="trust-value">3<span>+</span></div>
              <div className="trust-label">Pacotes disponíveis</div>
            </div>
            <div className="trust-item">
              <div className="trust-value">100<span>%</span></div>
              <div className="trust-label">Digital e sem papel</div>
            </div>
            <div className="trust-item">
              <div className="trust-value">Cartão Físico</div>
              <div className="trust-label">Integração com leitores físicos</div>
            </div>
            <div className="trust-item">
              <div className="trust-value">30<span>s</span></div>
              <div className="trust-label">QR rotativo contra fraude</div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== COMO FUNCIONA ==================== */}
      {view === 'home' && (
        <section className="section bg-off" id="como-funciona">
          <div className="section-header">
            <span className="eyebrow">Como funciona</span>
            <h2>Três passos para a cidade inteligente</h2>
            <p>Do registo ao acesso, tudo integrado numa experiência simples e moderna.</p>
          </div>

          <div className="steps">
            <div className="step-card">
              <div className="step-visual">
                <div className="step-number">01</div>
                <img src="/img/inscrever.jpg" alt="Regista-te" className="step-illustration" />
              </div>
              <h3>Regista-te</h3>
              <p>Preenche os teus dados, confirma o teu email e escolhe um pacote. Leva menos de 3 minutos.</p>
            </div>

            <div className="step-card">
              <div className="step-visual">
                <div className="step-number">02</div>
                <img src="/img/pagamento.jpg" alt="Paga em segurança" className="step-illustration" />
              </div>
              <h3>Paga em segurança</h3>
              <p>Pagamento via portal seguro Vinti4. Os teus dados de cartão nunca passam pelos nossos servidores.</p>
            </div>

            <div className="step-card">
              <div className="step-visual">
                <div className="step-number">03</div>
                <img src="/img/QRcode.jpg" alt="Usa na cidade" className="step-illustration" />
              </div>
              <h3>Usa na cidade</h3>
              <p>Apresenta o QR em eventos, usa saldo nos serviços e solicita o cartão físico RFID quando quiseres.</p>
            </div>
          </div>
        </section>
      )}

      {/* ==================== PACOTES ==================== */}
      {view === 'home' && (
        <section className="section" id="pacotes">
          <div className="section-header">
            <span className="eyebrow">Pacotes</span>
            <h2>Escolhe o plano certo para ti</h2>
            <p>Planos pensados para diferentes necessidades, todos com QR seguro incluído.</p>
          </div>

          <div className="packages-grid">
            <div className="pkg-card">
              <div className="pkg-label">Entrada</div>
              <div className="pkg-name">Pacote 1</div>
              <div className="pkg-price">
                <div className="amount">0</div>
                <div className="currency">CVE</div>
              </div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                <li><div className="pkg-check"></div> Acesso a eventos Smart City</li>
                <li><div className="pkg-check"></div> QR seguro incluído</li>
                <li><div className="pkg-check"></div> Conta virtual NOSZONA</li>
              </ul>
              <button className="btn-pkg btn-pkg-default" onClick={() => setView('registo')}>Escolher Pacote 1</button>
            </div>

            <div className="pkg-card featured">
              <div className="popular-badge">⚡ Mais popular</div>
              <div className="pkg-label">Completo</div>
              <div className="pkg-name">Pacote 2</div>
              <div className="pkg-price">
                <div className="amount">5.000</div>
                <div className="currency">CVE</div>
              </div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                <li><div className="pkg-check"></div> 5.000 CVE de saldo na carteira</li>
                <li><div className="pkg-check"></div> 50 swipes na cantina</li>
                <li><div className="pkg-check"></div> Entrada em todos os eventos</li>
                <li><div className="pkg-check"></div> QR seguro incluído</li>
              </ul>
              <button className="btn-pkg btn-pkg-featured" onClick={() => setView('registo')}>Escolher Pacote 2</button>
            </div>

            <div className="pkg-card">
              <div className="pkg-label">Premium</div>
              <div className="pkg-name">Pacote 3</div>
              <div className="pkg-price">
                <div className="amount">10.000</div>
                <div className="currency">CVE</div>
              </div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                <li><div className="pkg-check"></div> 10.000 CVE de saldo na carteira</li>
                <li><div className="pkg-check"></div> 80 swipes na cantina</li>
                <li><div className="pkg-check"></div> Entrada em todos os eventos</li>
                <li><div className="pkg-check"></div> Free parking incluído</li>
              </ul>
              <button className="btn-pkg btn-pkg-default" onClick={() => setView('registo')}>Escolher Pacote 3</button>
            </div>
          </div>
        </section>
      )}

      {/* ==================== CTA BANNER ==================== */}
      {view === 'home' && (
        <div className="cta-banner">
          <h2>Junta-te à Smart City<br />de Cabo Verde.</h2>
          <p>O teu cartão digital está a um registo de distância.</p>
          <div className="cta-actions">
            <button className="btn btn-gold" onClick={() => setView('registo')}>Criar conta agora →</button>
            <button className="btn btn-outline-white" onClick={() => setView('login')}>Já tenho conta</button>
          </div>
        </div>
      )}
            {/* ==================== LOGIN ==================== */}
      {view === 'login' && (
        <section id="login" className="form-section">
          <div className="form-panel form-panel-narrow">
            <div className="form-panel-top">
              <h2>Entrar na conta</h2>
              <p>Acede ao teu QR, saldo e serviços NOSZONA Smart.</p>
            </div>

            <div className="form-body">
              <form id="formLogin" onSubmit={(e) => {
                e.preventDefault();
                setUser({ nome: "Utilizador Teste" });
                setView('dashboard');
              }}>

                <div className="form-grid">
                  <div className="form-group full">
                    <label htmlFor="loginUsername">Username</label>
                    <input id="loginUsername" required placeholder="Nome de utilizador" />
                  </div>

                  <div className="form-group full">
                    <label htmlFor="loginPassword">Password</label>
                    <input id="loginPassword" type="password" required placeholder="Palavra-passe" />
                  </div>

                  <div className="form-group full form-checkbox">
                    <label className="checkbox-label">
                      <input type="checkbox" /> Manter sessão iniciada neste dispositivo
                    </label>
                  </div>
                </div>

                <button type="submit" className="form-submit">Entrar →</button>

                <button 
                  type="button" 
                  onClick={() => alert('Login com Google em desenvolvimento')}
                  className="btn-google"
                >
                  Entrar com Google
                </button>

                <p className="form-switch">
                  <a href="#" onClick={() => setView('recuperar')}>Esqueci-me da password</a>
                  &nbsp;·&nbsp;
                  <a href="#" onClick={() => setView('registo')}>Criar conta nova</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      )}

    </div>
  )
}