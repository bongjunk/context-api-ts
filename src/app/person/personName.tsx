import { useContext } from 'react';
import { PersonContext } from '../context/personProvider';

const PersonName = () => {
  const context = useContext(PersonContext);
  console.log('context', context);

  const handleChange = () => {
    console.log('handleChange');
    context?.actions.contextDispatch({
      type: 'SET_NAME',
      name: '테스트김봉준',
    });
  };

  return (
    <>
      <div>
        <p>{context?.state?.data?.name}</p>
        <p>{context?.type?.data}</p>
        <button onClick={() => handleChange()}>change</button>
      </div>
    </>
  );
};

export default PersonName;
