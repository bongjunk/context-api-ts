import { useContext } from 'react';
import { PersonContext } from '../context/personProvider';

const PersonAge = () => {
  const context = useContext(PersonContext);
  const { data, contextDispatch } = useContext(PersonContext);

  const handleChange = () => {
    console.log('handleChange');
    context?.actions.contextDispatch({
      type: 'SET_AGE',
      age: 28,
    });
  };

  return (
    <>
      <div>
        <p>{context.state.data.age}</p>
        <p>{context?.type?.data}</p>
        <button onClick={() => handleChange()}>change</button>
      </div>
    </>
  );
};

export default PersonAge;
