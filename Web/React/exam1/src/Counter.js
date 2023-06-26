import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count < 10 ? count + 1 : 10);
  };
  const minus = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const [count2, setCount2] = useState(0);
  const add2 = () => {
    setCount2(count2 < 10 ? count2 + 1 : 10);
  };
  const minus2 = () => {
    setCount2(count2 > 0 ? count2 - 1 : 0);
  };
  return (
    <div>
      <h2>{count}</h2>
      <p>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
      </p>
      <h2>{count2}</h2>
      <p>
        <button onClick={add2}>+</button>
        <button onClick={minus2}>-</button>
      </p>
    </div>
  );
};
