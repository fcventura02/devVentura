import React from 'react';
import MainRoute from './router'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainRoute/>
    </Router>
  );
}

export default App;
