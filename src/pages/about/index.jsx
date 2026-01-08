import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalComponents } from '../../components/GlobalComponents';

const AboutPage = () => {
  const navigate = useNavigate();
  const { Button } = useGlobalComponents();
  return (
    <div style={{ padding: 20 }}>
      <h1>About Page</h1>
      <p>This is a modular React + Electron application built with:</p>
      <ul style={{ marginTop: 10 }}>
        <li>React for UI components</li>
        <li>React Router for navigation</li>
        <li>Redux Toolkit for state management</li>
        <li>Electron for desktop application</li>
        <li>Webpack for bundling</li>
      </ul>
      <p style={{ marginTop: 10 }}>
        The application follows a modular architecture with separate directories for:
      </p>
      <ul>
        <li>Pages - Main application screens</li>
        <li>Components - Reusable UI elements</li>
        <li>Store - Redux state management</li>
        <li>Routes - Navigation configuration</li>
        <li>Utils - Helper functions</li>
        <li>Styles - CSS and styling</li>
      </ul>
      <div style={{ marginTop: 30 }}>
        <Button onClick={() => navigate('/bossHouse')} variant="primary">Back to Home Page</Button>
      </div>
    </div>
  );
};

export default AboutPage;