import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return state.count === 0 
        ? state 
        : { count: state.count - 1 };
    default:
      throw new Error()
  }
}

function Counter() {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div>
            <h1>Counter</h1>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                Decrement
            </button>
        </div>
    );

}

export default Counter;