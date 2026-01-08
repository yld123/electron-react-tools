import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increment, decrement } from '../../store/counterSlice';
import { useGlobalComponents } from '../../components/GlobalComponents';

const HomePage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Button } = useGlobalComponents();

  return (
    <div className="p-5 md:p-6">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="text-lg mb-6">Welcome to our React + Electron application!</p>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-3">Counter (Redux Example)</h2>
        <p className="text-lg mb-4">Count: {count}</p>
        <div className="mt-2 flex gap-3">
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())} variant="secondary">Decrement</Button>
        </div>
      </div>
      <div className="mt-8">
        <Button onClick={() => navigate('/about')} variant="primary">Go to About Page</Button>
      </div>
    </div>
  );
};

export default HomePage;