import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalComponents } from '../../components/GlobalComponents';

const AboutPage = () => {
  const navigate = useNavigate();
  const { Button } = useGlobalComponents();
  return (
    <div className="p-5 md:p-6">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="text-lg mb-3">This is a modular React + Electron application built with:</p>
      <ul className="mt-2 list-disc list-inside space-y-1 text-lg">
        <li>React for UI components</li>
        <li>React Router for navigation</li>
        <li>Redux Toolkit for state management</li>
        <li>Electron for desktop application</li>
        <li>Webpack for bundling</li>
      </ul>
      <p className="mt-4 text-lg">
        The application follows a modular architecture with separate directories for:
      </p>
      <ul className="mt-2 list-disc list-inside space-y-1 text-lg">
        <li>Pages - Main application screens</li>
        <li>Components - Reusable UI elements</li>
        <li>Store - Redux state management</li>
        <li>Routes - Navigation configuration</li>
        <li>Utils - Helper functions</li>
        <li>Styles - CSS and styling</li>
      </ul>
      <div className="mt-8">
        <Button onClick={() => navigate('/bossHouse')} variant="primary">Back to Home Page</Button>
      </div>
    </div>
  );
};

export default AboutPage;