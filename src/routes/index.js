import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import ToolPage from '../pages/tools';
import NotFoundPage from '../pages/error/404';
import { Layout } from '../components/GlobalComponents';

// 直接配置所有路由为顶级路由，并添加/bossHouse前缀
const router = createBrowserRouter([
  {
    path: '/bossHouse',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: '/bossHouse/home',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: '/bossHouse/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    )
  },
  {
    path: '/bossHouse/tools',
    element: (
      <Layout>
        <ToolPage />
      </Layout>
    )
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

export default router;