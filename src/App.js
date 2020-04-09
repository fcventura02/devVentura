import React from 'react';
import MainRoute from './router'
import { BrowserRouter as Router, Link } from 'react-router-dom';



import './style.css';
function App() {
  return (
    <Router>
      <header className="cabecalho">
        <h1>Dev Ventura</h1>

        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tcc">TCC</Link></li>
          </ul>
        </div>
      </header>
      <MainRoute />
      <footer>
        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/fcventura02">
          <h2>gitHub</h2>
          <img src="https://img.icons8.com/ios-filled/60/000000/github.png"  alt="github"/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fcventura02/">
          <h2>Linkedin</h2>
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled.png" alt="Linkedin"/>
        </a>
        <a target="_blank" rel="noopener noreferrer"href={`mailto:Filipecvr4@gmail.com`}>
          <h2>Email</h2>
          <img src="https://img.icons8.com/ios-filled/50/000000/gmail.png" alt="e-mail"/>
        </a>
      </footer>
    </Router>
  );
}

export default App;
