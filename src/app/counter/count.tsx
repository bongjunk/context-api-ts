import { useContext } from 'react';
import { CounterContext } from './counterProvider';

const Count = () => {
  const count = useContext(CounterContext);

  const handleIncreaseClick = () => {
    count?.actions?.dispatch({
      type: 'INCREMENT',
      // increase: count?.state?.count + 1,
    });
  };

  const handleDecreaseClick = () => {
    count?.actions?.dispatch({
      type: 'DECREMENT',
      // decrease: count?.state?.count - 1,
    });
  };

  return (
    <>
      <p>{count?.state?.count}</p>
      <button onClick={() => handleIncreaseClick()}>+</button>
      <button onClick={() => handleDecreaseClick()}>-</button>
    </>
  );
};

export default Count;
