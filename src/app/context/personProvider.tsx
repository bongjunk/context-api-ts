import React, { createContext, useReducer } from 'react';

const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';

interface initDataProps {
  name: string;
  age: number;
}

const initData = {
  name: '김봉준',
  age: 30,
};

export const PersonContext = createContext();

const reducer = (state: any, action: any) => {
  console.log('state', state, 'action', action);
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };

    case SET_AGE:
      return {
        ...state,
        age: action.age,
      };
  }
};

const PersonProvider = ({ children }: any) => {
  // useReducer를 사용해서 state, dispatch 생성
  const [data, contextDispatch] = useReducer(reducer, initData);

  console.log('datadata', data, 'contextDispatch', contextDispatch);

  const value = {
    state: { data },
    actions: { contextDispatch },
  };

  console.log('value2', value);

  return (
    <>
      <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
    </>
  );
};

export default PersonProvider;
