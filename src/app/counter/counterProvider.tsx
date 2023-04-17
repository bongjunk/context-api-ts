import { createContext, useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const CounterContext = createContext<number>(0);

const reducer = (state: any, action: any) => {
  console.log('state', state, 'action', action);
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    // return {
    //   ...state,
    //   increase: action.increase,
    // };
    case DECREMENT:
      return state - 1;
    // return {
    //   ...state,
    //   decrease: action.decrease,
    // };
  }
};

const CounterProvider = ({ children }: any) => {
  const [count, dispatch] = useReducer(reducer, 0);
  // const countState = useState(1);

  const value = {
    state: { count },
    actions: { dispatch },
  };

  return (
    <>
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default CounterProvider;
