import { FC } from 'react';

import Cursor from '@/src/components/mouse/Cursor';

import Navigation from '@/src/containers/Navigation';
import Hero from '@/src/containers/Hero';
import Skills from '@/src/containers/Skills';
import Projects from '@/src/containers/Projects';
import Contact from '../containers/Contact';

const MainPage: FC = ({}) => {
  return (
    <>
      <Cursor />
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default MainPage;
