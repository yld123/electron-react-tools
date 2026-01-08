import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increment, decrement } from '../../store/counterSlice';
import Button from '../../components/unifyInjection/Button';

const ToolPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>
      <p>Welcome to our React + Electron application!</p>
      <div style={{ marginTop: 20 }}>
        <h2>Counter (Redux Example)</h2>
        <p>Count: {count}</p>
        <div style={{ marginTop: 10 }}>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())} variant="secondary" style={{ marginLeft: 10 }}>Decrement</Button>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <Button onClick={() => navigate('/about')} variant="primary">Go to About Page</Button>
      </div>
    </div>
  );
};

export default ToolPage;