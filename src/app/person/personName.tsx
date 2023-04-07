import { useContext } from 'react';
import { PersonContext } from '../context/personProvider';

const PersonName = () => {
  const context = useContext(PersonContext);
  console.log('context', context);

  const change = () => {
    context?.actions.contextDispatch({
      type: 'SET_NAME',
      data: '테스트김봉준',
    });
  };

  return (
    <>
      <div>
        <p>{context.state.data.name}</p>
        <button onClick={() => change()}>change</button>
      </div>
    </>
  );
};

export default PersonName;
