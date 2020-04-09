import React from 'react';
import './styles.css';

function Home() {
  return (
    <section>
      <header className="title">
        <h1>
          Filipe Cristiano Ventura Rodrigues
          </h1>
      </header>
      <article className="container-info">
        <div className="formacao">
          <h3>
            Formação
           </h3>
          <p> Estudante atualmente na área de tecnologia, cursando:</p>
          <p>Sistema de Informação – Faculdade Pitágoras (em curso, 7° período)</p>
        </div>
        <div className="experiencia">
          <h3>
            Experiência
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
            Qualificações
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
  );
}

export default Home;