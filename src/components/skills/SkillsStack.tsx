import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

import { SkillStackWrapper } from '@/src/styled/components/skills/SkillStackWrapper';

const SkillsStack: FC = () => {
  useEffect(() => {
    const skillTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-page',
        start: '-50%',
        end: '15%',
        scrub: true
      }
    });
    skillTl.fromTo(
      '.box',
      { scale: 0.1, opacity: 0 },
      {
        scale: 1.2,
        opacity: 1,
        ease: 'power1.inOut',
        stagger: {
          grid: [3, 6],
          from: 'start',
          axis: 'y',
          amount: 0.8
        }
      }
    );
  }, []);

  return (
    <SkillStackWrapper className="skills-element">
      <Image
        src="/assets/tech/typescript.svg"
        alt="Typescript"
        width="120"
        height="120"
        className="box mouseHover"
      />
      <Image src="/assets/tech/js.svg" alt="Javascript" width="120" height="120" className="box" />
      <Image
        src="/assets/tech/reactjs.svg"
        alt="React.js"
        width="120"
        height="120"
        className="box"
      />
      <Image src="/assets/tech/nodejs.svg" alt="Node.js" width="120" height="120" className="box" />
      <Image src="/assets/tech/nextjs.svg" alt="Next.js" width="120" height="120" className="box" />
      <Image src="/assets/tech/redux.svg" alt="Redux" width="120" height="120" className="box" />
      <Image src="/assets/tech/html5.svg" alt="Html" width="120" height="120" className="box" />
      <Image src="/assets/tech/css.svg" alt="Css" width="120" height="120" className="box" />
      <Image src="/assets/tech/sass.svg" alt="Sass" width="120" height="120" className="box" />
      <Image src="/assets/tech/docker.svg" alt="Docker" width="120" height="120" className="box" />
      <Image src="/assets/tech/git.svg" alt="Git" width="120" height="120" className="box" />
      <Image src="/assets/tech/jest.svg" alt="Jest" width="120" height="120" className="box" />
      <Image
        src="/assets/tech/prettier.svg"
        alt="Prettier"
        width="120"
        height="120"
        className="box"
      />
      <Image src="/assets/tech/eslint.svg" alt="Eslint" width="120" height="120" className="box" />
      <Image src="/assets/tech/figma.svg" alt="Figma" width="120" height="120" className="box" />
      <Image
        src="/assets/tech/mongodb.svg"
        alt="Mongodb"
        width="120"
        height="120"
        className="box"
      />
      <Image
        src="/assets/tech/postfresql.svg"
        alt="PostgreSQL"
        width="120"
        height="120"
        className="box"
      />
      <Image src="/assets/tech/mysql.svg" alt="MySQL" width="120" height="120" className="box" />
    </SkillStackWrapper>
  );
};

export default SkillsStack;
