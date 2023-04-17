import { createContext, useContext } from 'react';

interface CountProps {
  count: number;
  setCount: any;
}

export const CounterContext = createContext<CountProps>({
  count: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCount: () => {},
});
// CounterProvider 의 자식 컴포넌트 어디서든지 useCountState 를 사용하여 값을 조회하거나 변경할 수 있다.
const useCountState = () => {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error('useCountState should be used within CounterProvider');
  }
  return value;
};

export default useCountState;
