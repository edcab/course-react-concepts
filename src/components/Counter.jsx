import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => {
        if (count === 0) {
          return;
        }
        setCount(count + -1)}}>Decrease</button>
    </div>
  );
}

export default Counter;