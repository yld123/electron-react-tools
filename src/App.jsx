import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/unifyInjection/NavBar';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default App;