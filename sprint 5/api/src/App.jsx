import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TopBar from './TopBar';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import About from './About';

const App = () => {
  return (
    <Router>
      <main style={
        {
          marginLeft:'500px'
        }
      }>
        <div style={{
          width: '375px',
          height: '667px',
          border: '1px solid #000',
          margin: '20px auto',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0px 0px 15px rgba(0,0,0,0.3)'
        }}>
          <TopBar />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <nav style={{ marginBottom: '20px' }}>
              <Link to="/" style={{ marginRight: '10px' }}>Jogos</Link>
              <Link to="/profile" style={{ marginRight: '10px' }}>Conta</Link>
              <Link to="/settings" style={{ marginRight: '10px' }}>Configurações</Link>
              <Link to="/about">Ajuda</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;
