import logo from '../image/logo.png'
import heroImage from '../image/hero-image.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  AOS.init()

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom py-2 fixed-top">

        <div className="container">

          <a
            className="navbar-brand d-flex align-items-center"
            href="#inicio"
          >

            <img
              src={logo}
              alt="Mayrink Tech Solutions"
              width="55"
            />

            <span className="fw-bold text-primary d-none d-md-inline">
              Mayrink Tech
            </span>

          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link text-white" href="#inicio">
                  Início
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#servicos">
                  Serviços
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#faq">
                  FAQ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#contato">
                  Contato
                </a>
              </li>

            </ul>

          </div>

        </div>

      </nav>

      <div id="inicio" className="container py-5 mt-5">

        <div className="row align-items-center min-vh-100">

          <div className="col-md-6" data-aos="fade-up">

            <h1 className="display-3 fw-bold text-primary">
              Mayrink Tech Solutions
            </h1>

            <p className="lead mt-4 mb-4">
              Suporte técnico profissional para computadores e notebooks.
              Formatação, limpeza, upgrades e manutenção especializada.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">

              <span className="hero-badge">
                <i className="bi bi-patch-check-fill"></i>

                {' '} Suporte Especializado
              </span>

              <span className="hero-badge">
                <i className="bi bi-laptop"></i>

                {' '} Atendimento Presencial & Remoto
              </span>

              <span className="hero-badge">
                <i className="bi bi-lightning-charge-fill"></i>

                {' '} 7+ Anos de Experiência
              </span>

            </div>

            <a
              href="https://wa.me/5531992110595?text=Olá%20Rafael!%20Vim%20pelo%20site%20da%20Mayrink%20Tech%20Solutions%20e%20gostaria%20de%20um%20orçamento."
              target="_blank"
              className="btn btn-success btn-lg mt-3 px-4 py-3 whatsapp-btn"
            >
              <i className="bi bi-whatsapp"></i>

              {' '} Chamar no WhatsApp
            </a>

          </div>

          <div className="col-md-6 text-center" data-aos="fade-up">

            <img
              src={heroImage}
              className="img-fluid rounded shadow-lg hero-image"
              alt="Mayrink Tech Solutions"
            />

          </div>

        </div>

      </div>

      <div className="section-divider"></div>

      {/* Serviços */}

      <div id="servicos" className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold text-primary">
            Nossos Serviços
          </h2>

          <p className="text-light">
            Soluções completas para computadores e notebooks
          </p>

        </div>

        <div className="row g-4" data-aos="fade-up"> 

          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="100">

            <div className="card bg-dark text-white h-100 border-primary">

              <div className="card-body text-center">

                <h3>
                  <i className="bi bi-laptop text-primary"></i>
                </h3>

                <h5 className="card-title mt-3">
                  Formatação
                </h5>

                <p className="card-text">
                  Instalação do Windows, drivers e otimização completa.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="200">

            <div className="card bg-dark text-white h-100 border-primary">

              <div className="card-body text-center">

                <h3>
                  <i className="bi bi-tools text-primary"></i>
                </h3>

                <h5 className="card-title mt-3">
                  Limpeza
                </h5>

                <p className="card-text">
                  Limpeza interna e troca de pasta térmica.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="300">

            <div className="card bg-dark text-white h-100 border-primary">

              <div className="card-body text-center">

                <h3>
                  <i className="bi bi-memory text-primary"></i>
                </h3>

                <h5 className="card-title mt-3">
                  Upgrade
                </h5>

                <p className="card-text">
                  Upgrade SSD e memória RAM para máximo desempenho.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-3" data-aos="zoom-in" data-aos-delay="400">  

            <div className="card bg-dark text-white h-100 border-primary">

              <div className="card-body text-center">

                <h3>
                  <i className="bi bi-cpu text-primary"></i>
                </h3>

                <h5 className="card-title mt-3">
                  Manutenção
                </h5>

                <p className="card-text">
                  Diagnóstico e reparo especializado.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="section-divider"></div>

      {/* Sobre */}

      <div
        id="sobre"
        className="container py-5"
        data-aos="fade-up"
      >

        <div className="row align-items-center">

          <div className="col-md-6">

            <h2 className="fw-bold text-primary mb-4">
              Sobre a Mayrink Tech Solutions
            </h2>

            <p className="text-light lead">
              Apaixonado por tecnologia desde a adolescência, Rafael Mayrink
              iniciou sua trajetória na manutenção de computadores ainda muito jovem,
              realizando cursos técnicos e desenvolvendo experiência prática ao longo dos anos.
            </p>

            <p className="text-light">
              Formado em Técnico de Informática pelo SENAI em 2019, atuou com suporte técnico
              em ambientes hospitalares como UPA Norte Betim e Centro Materno Infantil,
              adquirindo ampla experiência em manutenção de computadores, impressoras,
              suporte a sistemas e atendimento técnico especializado.
            </p>

            <p className="text-light">
              Hoje, a Mayrink Tech Solutions oferece suporte técnico profissional,
              manutenção, upgrades e soluções personalizadas para computadores e notebooks,
              sempre focando em desempenho, qualidade e confiança.
            </p>

          </div>

          <div
            className="col-md-6 text-center"
            data-aos="fade-up"
          >

            <div className="card bg-dark border-primary p-4">

              <div className="card-body">

                <h3 className="text-primary mb-4">
                  Experiência & Especialidades
                </h3>

                <p className="text-light">
                  ✔ 7+ anos de experiência
                </p>

                <p className="text-light">
                  ✔ Suporte técnico corporativo
                </p>

                <p className="text-light">
                  ✔ Manutenção de notebooks e PCs
                </p>

                <p className="text-light">
                  ✔ Upgrade SSD e memória RAM
                </p>

                <p className="text-light">
                  ✔ Atendimento remoto e presencial
                </p>

                <p className="text-light">
                  ✔ Suporte para empresas e usuários finais
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="section-divider"></div>

      {/* FAQ */}

      <div
        className="container py-5"
        data-aos="fade-up"
      >

        <div id="faq" className="text-center mb-5">

          <h2 className="fw-bold text-primary">
            Perguntas Frequentes
          </h2>

          <p className="text-light">
            Tire suas dúvidas sobre nossos serviços
          </p>

        </div>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item bg-dark border-primary mb-3">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                Faz atendimento em domicílio?
              </button>

            </h2>

            <div
              id="faq1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >

              <div className="accordion-body text-light">
                Sim! Realizamos atendimento presencial, remoto e também em domicílio.
              </div>

            </div>

          </div>

          <div className="accordion-item bg-dark border-primary mb-3">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Trabalha com notebooks gamers?
              </button>

            </h2>

            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >

              <div className="accordion-body text-light">
                Sim! Trabalhamos com manutenção, limpeza e upgrades para notebooks e PCs gamers.
              </div>

            </div>

          </div>

          <div className="accordion-item bg-dark border-primary mb-3">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                Faz upgrade SSD e memória RAM?
              </button>

            </h2>

            <div
              id="faq3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >

              <div className="accordion-body text-light">
                Sim! Realizamos upgrades para melhorar desempenho e velocidade do computador.
              </div>

            </div>

          </div>

          <div className="accordion-item bg-dark border-primary mb-3">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq4"
              >
                Atende empresas?
              </button>

            </h2>

            <div
              id="faq4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >

              <div className="accordion-body text-light">
                Sim! Também oferecemos suporte técnico para empresas e ambientes corporativos.
              </div>

            </div>

          </div>

        </div>

      </div>

      <footer id="contato" className="mt-5 py-5 border-top border-primary" data-aos="fade-up">

        <div className="container">

          <div className="row">

            <div className="col-md-4 mb-4">

              <h3 className="text-primary fw-bold">
                Mayrink Tech Solutions
              </h3>

              <p className="text-light mt-3">
                Suporte técnico profissional para computadores e notebooks.
                Soluções rápidas, modernas e confiáveis.
              </p>

            </div>

            <div className="col-md-4 mb-4">

              <h5 className="text-primary">
                Contato
              </h5>

              <p className="text-light mb-2">
                <i className="bi bi-telephone-fill text-primary"></i>

                {' '} / {' '}

                <i className="bi bi-whatsapp text-success"></i>

                {' '} (31) 99211-0595
              </p>

              <p className="text-light">
                <i className="bi bi-instagram text-danger"></i> @rafael_mayrink
              </p>

            </div>

            <div className="col-md-4 mb-4">

              <h5 className="text-primary">
                Atendimento
              </h5>

              <p className="text-light mt-3">
                ✔ Formatação
              </p>

              <p className="text-light">
                ✔ Limpeza Interna
              </p>

              <p className="text-light">
                ✔ Upgrade SSD/RAM
              </p>

              <p className="text-light">
                ✔ Manutenção Especializada
              </p>

            </div>

          </div>

          <hr className="border-primary" />

          <div className="text-center mt-4">

            <p className="text-light">
              © 2026 Mayrink Tech Solutions — Todos os direitos reservados.
            </p>

          </div>

        </div>

      </footer>

    </>
  )
}

export default App