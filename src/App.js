import React from 'react';
import MainRoute from './router';
import Menu from './pages/Header';
import { BrowserRouter as Router} from 'react-router-dom';



import './style.css';
function App() {
  return (
    <Router>
      <Menu />
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
