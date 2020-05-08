import React from 'react';
import './styles.css';

function Home() {
  document.title = 'Dev Ventura | Home'
  return (
    <>
      <header className="banner">
        <div className="container">
          <h1>With each new  <span>code</span> a new <span>adventure</span></h1>
          <ul className="contacts-list">
            <li className="contacts-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/fcventura02">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="contacts-item">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fcventura02/">

                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="contacts-item">
              <a target="_blank" rel="noopener noreferrer" href={`mailto:Filipecvr4@gmail.com`}>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section>
        <header className="apresentacao">
          <h1>Olá Sociedade!</h1>
          <p>
            Me chamo <span>Filipe Ventura</span>, atualmente estou iniciando na arte
            da programação, sou graduando em Sistema da informação na faculdate
            Pitágoras. Já participei da semanaOmnistek da Rocketseat e hoje estou participando da
            aceleração React da Codenation.
          </p>
        </header>
        <article className="container-info">
          <h1>
            Filipe Cristiano Ventura Rodrigues
          </h1>
          <div className="formacao">
            <h3>
              Minha Formação:
           </h3>
            <p> Estudante atualmente na área de tecnologia, cursando:</p>
            <p>Sistema de Informação – Faculdade Pitágoras (em curso, 7° período)</p>
          </div>
          <div className="experiencia">
            <h3>
              Minhas Experiências de trabalho:
          </h3>

            <h5> Programa Jovem Aprendiz </h5>
            <p>Período: 02/03/2015 a 01/07/2016</p>
            <p>Formação prática: Nazinha Alimentos – 1.180h</p>
            <ul>
              <li>
                Setor financeiro: organizando planilhas, arquivando documentos,
                separando documentos.
              </li>
              <li>
                Setor de programação e controle de produção e qualidade: coleta
                de informações, monitorando descarga de materiais, monitorando
                a produção.
              </li>
              <li>
                Setor de recrutamento e seleção: atualizando planilhas,
                organizando documentos, orientando candidatos e agendando
                entrevista.
              </li>
            </ul>
          </div>
          <div className="qualificacoes">
            <h3>
              Qualificações e atividades complementares:
            </h3>
            <p>
              OmniSteck 11: Conceitos básicos de node.js, ReactJs e React Native.(10H)
            </p>
            <p>
              Cursando Web moderno – Udemy online
              Javascript React Vue Js Node HTML CSS jQuery Bootstrap 4 Webpack Glub
              Banco de Dados (75h).
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Home;