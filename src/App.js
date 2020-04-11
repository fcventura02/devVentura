import React from 'react';
import MainRoute from './router'
import { BrowserRouter as Router, Link } from 'react-router-dom';



import './style.css';
function App() {
  return (
    <Router>
      <header className="cabecalho">
        <div className="cabecalho-menu">
          <h1>Dev Ventura</h1>

          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tcc">TCC</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <MainRoute />
      <footer>
        <div className="container">
          <ul className="rodape-contacts-list">
            <li className="rodape-contacts-item">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/fcventura02">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="rodape-contacts-item">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fcventura02/">

                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>

          </ul>
          <div className="rodape-contacts">
            <a target="_blank" rel="noopener noreferrer" href={`mailto:Filipecvr4@gmail.com`}>
              <h2>filipecvr4@gmail.com</h2>
            </a>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
