import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import PredictSpot from './PredictSpot';
import PredictTime from './PredictTime';
import PredictLure from './PredictLure';
import PredictTides from './PredictTides';
import About from './About'
import LogoWithTxt from './LogoWithTxt.png'

function App() {
  return (
    <div className="App">
       <div className="note">
          <img src={LogoWithTxt} className='LogoWithTxt'></img>
        </div>
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/predict-spot">Predict Spot</Link></li>
            <li><Link to="/predict-time">Predict Time</Link></li>
            <li><Link to="/predict-lure">Predict Lure</Link></li>
            <li><Link to="/predict-tides">Predict Tides</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict-spot" element={<PredictSpot />} />
          <Route path="/predict-time" element={<PredictTime />} />
          <Route path="/predict-lure" element={<PredictLure />} />
          <Route path="/predict-tides" element={<PredictTides />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

function Home() {
  return (
    <html>
      <h1>Feesh Finder App (testing)</h1>
      <body>
        <p>This application is used to test functionality for a mobile app (coming soon)</p>
      </body>
    </html>  
  );
}

export default App;
