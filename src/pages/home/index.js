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
            da programação, sou graduando em Sistema da informação na faculdade
            Pitágoras. Já participei da semanaOmnistek da Rocketseat e hoje estou participando da
            aceleração React da Codenation.
          </p>
        </header>
      </section>
    </>
  );
}

export default Home;