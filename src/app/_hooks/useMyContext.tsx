import { createContext, useContext } from 'react';

export const MyContext = createContext('Hello World!');

const useMyContext = () => {
  return useContext(MyContext);
};

export default useMyContext;
