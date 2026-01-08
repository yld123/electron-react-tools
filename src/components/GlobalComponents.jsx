import React, { createContext, useContext } from 'react';
import Button from './unifyInjection/Button';
import NavBar from './unifyInjection/NavBar';

// 创建全局组件上下文
const GlobalComponentsContext = createContext({
  Button,
  NavBar
});

// 创建全局组件提供者组件
export const GlobalComponentsProvider = ({ children }) => {
  const components = {
    Button,
    NavBar
  };

  return (
    <GlobalComponentsContext.Provider value={components}>
      {children}
    </GlobalComponentsContext.Provider>
  );
};

// 自定义Hook，用于在组件中获取全局组件
export const useGlobalComponents = () => {
  const context = useContext(GlobalComponentsContext);
  if (!context) {
    throw new Error('useGlobalComponents must be used within a GlobalComponentsProvider');
  }
  return context;
};

// 为了方便使用，我们可以将这些组件直接导出
export { Button, NavBar };

// 创建路由用的布局组件，用于包装页面组件并添加NavBar
export const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {children}
      <NavBar />
    </div>
  );
};
