import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/unifyInjection/Button';

const NotFoundPage = () => {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div style={{ marginTop: 20 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;