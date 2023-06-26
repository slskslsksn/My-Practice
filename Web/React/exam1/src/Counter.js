import React, { useState } from 'react';
import {OddEvenResult} from './OddEvenResult';

export const Counter = (props) => {
  const [count, setCount] = useState(props.value);
  const add = () => {
    setCount(count < 10 ? count + 1 : 10);
  };
  const minus = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  return (
    <div>
      <h2>{count}</h2>
      <p>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <OddEvenResult count={count} />
      </p>
    </div>
  );
};

Counter.defaultProps = {
  value: 0,
};
