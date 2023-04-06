import { createContext, useContext } from 'react';

export const MyContext = createContext<string>('Hello World!');
export const Theme = createContext<string>('light');
export const TestContext = createContext(null);

export const useThemeContext = () => {
  return useContext(Theme);
};

const useMyContext = () => {
  const value = useContext(MyContext);

  if (value === undefined) {
    throw new Error('useMyContext should be used within MyContext.Provider');
  }

  return value;
};

export default useMyContext;
