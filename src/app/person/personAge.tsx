import { useContext } from 'react';
import { PersonContext } from '../context/personProvider';

const PersonAge = () => {
  const context = useContext(PersonContext);
  const { data, contextDispatch } = useContext(PersonContext);

  console.log('context2', context);
  console.log('data33', data, 'contextDispatch', contextDispatch);

  const change = () => {
    console.log('change');
    // context?.actions.contextDispatch({
    //   type: 'SET_AGE',
    //   data: '만28',
    // });
  };

  return (
    <>
      <div>
        <p>{context.state.data.age}</p>
        <p>{context?.type?.data}</p>
        <button onClick={() => change()}>change</button>
      </div>
    </>
  );
};

export default PersonAge;
