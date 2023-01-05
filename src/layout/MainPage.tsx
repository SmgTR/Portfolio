import { FC } from 'react';

import Cursor from '@/src/components/mouse/Cursor';

import Navigation from '@/src/containers/Navigation';
import Hero from '@/src/containers/Hero';
import Skills from '@/src/containers/Skills';

const MainPage: FC = ({}) => {
  return (
    <>
      <Cursor />
      <Navigation />
      <Hero />
      <Skills />
    </>
  );
};

export default MainPage;
