import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Portfolio from './components/Portfolio.js';

function App() {
  return (
    <div className="App">

<Router >
    
    <Route exact path="/" component={HomePage} />
    <Route exact path="/portfolio" component={Portfolio} />

</Router>

    </div>
  );
}

export default App;
