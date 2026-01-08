import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './routes';
import store from './store';
import { GlobalComponentsProvider } from './components/GlobalComponents';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalComponentsProvider>
        <RouterProvider router={router} />
      </GlobalComponentsProvider>
    </Provider>
  </React.StrictMode>
);