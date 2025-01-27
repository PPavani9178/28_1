import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../reducers';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;