'use client';

// import React, { createContext } from 'react';
// import { MyContext } from './_hooks/useMyContext';

// export default function Home() {
//   MyContext.displayName = 'DisplayNameSample';
//   // Provider는 (하위 Component) 구독 하고 있는 자식 Component 에게 정보 전달
//   return (
//     <>
//       <MyContext.Provider value="Context Text">
//         <ContextText />
//       </MyContext.Provider>
//     </>
//   );
// }

import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import ContextText from './hello/page';
import PersonProvider from './context/personProvider';
import PersonName from './person/personName';
import PersonAge from './person/personAge';
import CounterProvider from './counter/counterProvider';
import Count from './counter/count';

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');

  const BodyStyle = styled.body`
    color: ${theme === 'light' ? '#000' : '#fff'};
    background-color: ${theme === 'light' ? '#fff' : '#000'};
  `;

  console.log('theme', theme);
  return (
    <BodyStyle>
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
        <ContextText />
      </ThemeContext.Provider>
      <h3>이름, 나이 변경</h3>
      <PersonProvider>
        <div>
          <PersonName />
          <PersonAge />
        </div>
      </PersonProvider>
      <h3>Count</h3>
      <CounterProvider>
        <Count />
      </CounterProvider>
    </BodyStyle>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <Button>Test Button</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return <button className={className}>{children}</button>;
}
// <Counter />
