'use client'

import { useState , useEffect} from 'react'



   export default function NoszonaSmart() {
  const [view, setView] = useState<'home' | 'login' | 'registo' | 'dashboard' | 'recuperar'>('home');
  const [user, setUser] = useState<any>(null);
  const [qrTime, setQrTime] = useState(30);

  // QR Countdown
  useEffect(() => {
    if (view !== 'dashboard' || !user) return;

    const interval = setInterval(() => {
      setQrTime((prev) => {
        if (prev <= 1) {
          // Simula renovação do QR
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [view, user]);

     
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
      
            {/* ==================== REGISTO ==================== */}
      {view === 'registo' && (
        <section id="registo" className="form-section">
          <div className="form-panel">
            <div className="form-panel-top">
              <h2>Registo de Residente</h2>
              <p>Preenche os teus dados para criar a conta NOSZONA Smart.</p>
            </div>

            <div className="form-body">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  // Simulação de registo
                  const formData = new FormData(e.currentTarget);
                  const novoUser = {
                    nome: formData.get('nome'),
                    uid: "NZ" + Date.now().toString().slice(-6),
                    pacote: formData.get('pacote')
                  };
                  setUser(novoUser);
                  setView('dashboard');
                  alert('Registo simulado com sucesso! (Em produção vai chamar a API)');
                }}
              >
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nome">Nome completo *</label>
                    <input id="nome" name="nome" required placeholder="Ex: Nome Sobrenome" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dataNascimento">Data de nascimento *</label>
                    <input id="dataNascimento" name="dataNascimento" type="date" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pais">País *</label>
                    <select id="pais" name="pais" required>
                      <option value="">Seleciona o país</option>
                      <option value="Cabo Verde">Cabo Verde</option>
                      <option value="Portugal">Portugal</option>
                      {/* podes adicionar mais depois */}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input id="telefone" name="telefone" type="tel" required placeholder="+238 *** ***" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required placeholder="email@exemplo.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="username">Username *</label>
                    <input id="username" name="username" required placeholder="escolhe um username" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input id="password" name="password" type="password" required minLength={6} />
                  </div>

                  <div className="form-group full">
                    <label htmlFor="pacote">Pacote *</label>
                    <select id="pacote" name="pacote" required>
                      <option value="Pacote 1">Pacote 1 - Entrada</option>
                      <option value="Pacote 2">Pacote 2 - Completo (Recomendado)</option>
                      <option value="Pacote 3">Pacote 3 - Premium</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="form-submit">Criar Conta e Continuar →</button>
              </form>
            </div>
          </div>
        </section>
      )}

            {/* ==================== REGISTO ==================== */}
      {view === 'registo' && (
        <section id="registo" className="form-section pt-20">
          <div className="form-panel">
            <div className="form-panel-top">
              <h2>Registo de Residente</h2>
              <p>Preenche os teus dados para criar a conta NOSZONA Smart.</p>
            </div>

            <div className="form-body">
              <form id="formRegisto" onSubmit={(e) => {
                e.preventDefault();
                // Simulação de registo
                const formData = new FormData(e.currentTarget);
                const novoUser = {
                  nome: formData.get('nome'),
                  email: formData.get('email'),
                  telefone: formData.get('telefone'),
                  documento: formData.get('documento'),
                  pacote: 'Pacote 2' // pode mudar depois
                };
                setUser(novoUser);
                setView('dashboard');
                alert('Registo simulado com sucesso! (Em produção vai conectar ao backend)');
              }}>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nome">Nome completo *</label>
                    <input id="nome" name="nome" required minLength={3} placeholder="Ex: Nome Sobrenome" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dataNascimento">Data de nascimento *</label>
                    <input id="dataNascimento" name="dataNascimento" type="date" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nacionalidade">Nacionalidade *</label>
                    <input id="nacionalidade" name="nacionalidade" required placeholder="Ex: Cabo-verdiana" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="documento">Nº BI / CNI / Passaporte *</label>
                    <input id="documento" name="documento" required placeholder="Documento de identificação" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input id="telefone" name="telefone" type="tel" required placeholder="+238 *** ***" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required placeholder="email@exemplo.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="morada">Morada *</label>
                    <input id="morada" name="morada" required placeholder="Morada atual" />
                  </div>
                </div>

                <button type="submit" className="form-submit">Criar Conta →</button>
              </form>
            </div>
          </div>
        </section>
      )}

            {/* ==================== DASHBOARD ==================== */}
      {view === 'dashboard' && user && (
        <section className="dashboard-section pt-24 pb-20 bg-[#061827]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-4xl font-bold">Bem-vindo de volta, {user.nome?.split(' ')[0]}!</h2>
                <p className="text-gray-400">Gerencie sua identidade digital NOSZONA</p>
              </div>
              <button 
                onClick={() => { setUser(null); setView('home'); }}
                className="btn btn-ghost"
              >
                Sair
              </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Cartão Principal (como no original) */}
              <div className="lg:col-span-7">
                <div className="card-3d bg-gradient-to-br from-zinc-900 to-black border border-white/20 rounded-3xl p-8 relative overflow-hidden">
                  <div className="card-badge absolute top-6 right-6 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">
                    NOSZONA Smart City
                  </div>

                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold" id="dashNome">{user.nome}</h3>
                      <p className="text-sm text-gray-400">Residente • Cabo Verde</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">ID de Residente</div>
                      <div className="font-mono text-lg">NSZ-{Math.floor(100000 + Math.random() * 900000)}</div>
                    </div>
                  </div>

                  {/* QR Code Grande */}
                  <div className="bg-white rounded-2xl p-6 mb-6 flex justify-center">
                    <div id="qrCode" className="p-3 bg-white"></div>
                  </div>

                  <div className="qr-countdown text-center mb-6">
                    Renova em <strong id="qrCountdown" className="text-yellow-400">30</strong>s
                    <div className="qr-progress mt-2">
                      <div className="qr-progress-bar" id="qrProgressBar"></div>
                    </div>
                  </div>

                  <p className="text-center text-xs text-gray-400">
                    Apresente este QR em eventos, cantina ou serviços da Smart City
                  </p>
                </div>
              </div>

              {/* Info Lateral */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                  <h4 className="text-yellow-400 mb-4">Saldo Atual</h4>
                  <div className="text-5xl font-bold mb-1">12.450 CVE</div>
                  <p className="text-green-400">+ 45 swipes restantes</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => alert('Recarga via Vinti4 em desenvolvimento')}
                    className="h-28 bg-white text-black rounded-3xl font-semibold hover:scale-105 transition-transform"
                  >
                    Recarregar
                  </button>
                  <button 
                    onClick={() => alert('Solicitação de cartão físico em breve')}
                    className="h-28 bg-white/10 border border-white/30 rounded-3xl font-semibold hover:bg-white/20 transition-all"
                  >
                    Pedir Cartão Físico
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

            {/* ==================== RECUPERAR SENHA ==================== */}
      {view === 'recuperar' && (
        <section className="form-section pt-20">
          <div className="form-panel form-panel-narrow">
            <div className="form-panel-top">
              <h2>Recuperar Acesso</h2>
              <p>Digite o seu email para receber um link de recuperação.</p>
            </div>

            <div className="form-body">
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Link de recuperação enviado (simulação). Verifique o seu email.");
                setView('login');
              }}>
                <div className="form-group full">
                  <label htmlFor="recuperarEmail">Email</label>
                  <input id="recuperarEmail" type="email" required placeholder="email@exemplo.com" />
                </div>

                <button type="submit" className="form-submit">Enviar Link →</button>
              </form>

              <p className="form-switch mt-6 text-center">
                <a href="#" onClick={() => setView('login')}>Voltar ao Login</a>
              </p>
            </div>
          </div>
        </section>
      )}

    </div>
  )
}