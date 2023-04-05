'use client';

import Image from 'next/image';
import React, { createContext } from 'react';
import ContextText from './api/page';
import styles from './page.module.css';
import { MyContext } from './_hooks/useMyContext';

export default function Home() {
  return (
    <>
      <MyContext.Provider value="Context Text">
        <ContextText />
      </MyContext.Provider>
    </>
  );
}
