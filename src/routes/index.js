import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ToolPage from '../pages/tools';
import NotFoundPage from '../pages/error/404';
import NavBar from '../components/unifyInjection/NavBar';

// 直接配置所有路由为顶级路由，并添加/bossHouse前缀
const router = createBrowserRouter([
  {
    path: '/bossHouse',
    element: (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <HomePage />
        <NavBar />
      </div>
    )
  },
  {
    path: '/bossHouse/home',
    element: (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <HomePage />
        <NavBar />
      </div>
    )
  },
  {
    path: '/bossHouse/about',
    element: (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AboutPage />
        <NavBar />
      </div>
    )
  },
  {
    path: '/bossHouse/tools',
    element: (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ToolPage />
        <NavBar />
      </div>
    )
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

export default router;