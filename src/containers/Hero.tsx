import { FC, useEffect, useRef } from 'react';

import { AboutText, HeroWrapper } from '@/src/styled/containers/Hero';
import Blob from '@/src/components/ui/Blob';

import gsap from 'gsap';
import ScrollInfo from '../components/ui/ScrollInfo';

const Hero: FC = ({}) => {
  const heroUnderlineRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const aboutText = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heroTl = gsap.timeline();
    const heroText = heroTextRef?.current?.querySelectorAll('span');
    heroText?.forEach((hero) => {
      heroTl.fromTo(hero, { opacity: 0 }, { opacity: 1, stagger: 0.8, duration: 0.8 });
    });
    heroTl.fromTo(heroUnderlineRef.current, { width: 0 }, { width: '240px' });
    heroTl.fromTo(aboutText.current, { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <HeroWrapper>
      <Blob />
      <h3 ref={heroTextRef}>
        <span>Hello,</span>
        <span>
          <br></br> my name is
        </span>
        <span className="text">
          Tomasz<span className="underline" ref={heroUnderlineRef}></span>
        </span>
      </h3>
      <AboutText ref={aboutText}>
        I&apos;m self-taught developer, who enjoy working with frontend and backend technologies. I
        like to create unique things using both my creativity and technical skills.
      </AboutText>
      <ScrollInfo />
    </HeroWrapper>
  );
};

export default Hero;
