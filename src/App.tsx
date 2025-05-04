
import React from 'react';
import Dashboard from './component/Dashboard';
import { FaShieldAlt } from 'react-icons/fa';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App" style={{ position: 'relative', padding: '20px' }}>
      <header className="header">
        <FaShieldAlt size={36} color="#007bff" />
        <h1>AI Safety Dashboard</h1>
      </header>
      <Dashboard />
    </div>
  );
};

export default App;
