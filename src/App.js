import React from 'react';
import './App.css';
import logo from './W3O-Landing.jpg'; // Import the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="Web3 Logo" className="logo" />
          <a href="mailto:web3onboarding@gmail.com" className="email-link">
            web3onboarding@gmail.com
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
