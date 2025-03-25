import React, { useState, useEffect } from 'react';

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count Changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CounterWithEffect;