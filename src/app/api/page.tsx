import React, { useContext } from 'react';
import useMyContext from '../_hooks/useMyContext';

const ContextText = () => {
  const value = useMyContext();

  console.log('valuevalue', value);

  return (
    <>
      <p>test</p>
      <p>test</p>
      <p>{value}</p>
    </>
  );
};

export default ContextText;
