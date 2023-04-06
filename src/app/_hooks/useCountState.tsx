import { createContext, useContext } from 'react';

export const CounterContext = createContext<number>(0);

// CounterProvider 의 자식 컴포넌트 어디서든지 useCoutnerState 를 사용하여 값을 조회하거나 변경할 수 있다.
const useCountState = () => {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error('useCounterState should be used within CounterProvider');
  }
  return value;
};

export default useCountState;
