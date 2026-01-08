import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increment, decrement } from '../../store/counterSlice';
import { useGlobalComponents } from '../../components/GlobalComponents';

const ToolPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Button } = useGlobalComponents();

  return (
    <div className="p-5 md:p-6">
      <h1 className="text-3xl font-bold mb-4">Tools Page</h1>
      <p className="text-lg mb-6">Welcome to the Tools section of our application!</p>
      <div className="mt-5 bg-gray-50 p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Counter Tool</h2>
        <p className="text-lg mb-4">Current Count: {count}</p>
        <div className="mt-2 flex gap-3">
          <Button onClick={() => dispatch(increment())} variant="success">Increment</Button>
          <Button onClick={() => dispatch(decrement())} variant="danger">Decrement</Button>
        </div>
      </div>
      <div className="mt-8">
        <Button onClick={() => navigate('/bossHouse')} variant="primary">Back to Home Page</Button>
      </div>
    </div>
  );
};

export default ToolPage;