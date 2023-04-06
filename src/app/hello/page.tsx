import React, { useContext } from 'react';
import useMyContext from '../_hooks/useMyContext';

const ContextText = () => {
  const value = useMyContext();

  console.log('valuevalue', value);

  return (
    <>
      <p>{value}</p>
    </>
  );
};

export default ContextText;
