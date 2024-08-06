import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import PredictSpot from './PredictSpot';
import PredictTime from './PredictTime';
import PredictLure from './PredictLure';
import PredictTides from './PredictTides';
import About from './About'

function App() {
  return (
    <div className="App">
       <div className="note">
          <p>Youngblood Software, LLC</p>
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
  return <h1>Feesh Finder App (Testing v1)</h1>;
}

export default App;
