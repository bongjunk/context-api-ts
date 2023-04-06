import { createContext, useState } from 'react';
import useCountState from '../_hooks/useCountState';

const Value = () => {
  const [counter] = useCountState();
  return <h1>{counter}</h1>;
};

const Buttons = () => {
  // const [, setCounter] = useCountState();
  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);
  return (
    <>
      <button onClick={() => decrease()}>-</button>
      <button onClick={() => increase()}>+</button>
    </>
  );
};

// const CounterContext = useCountState();
const CounterContext = createContext(0);

const CounterProvider = ({ children }) => {
  const counterState = useState(1);
  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  );
};

const Counter = () => {
  return (
    <>
      <CounterProvider>
        <div>
          <Value />
          <Buttons />
        </div>
      </CounterProvider>
    </>
  );
};

export default Counter;
