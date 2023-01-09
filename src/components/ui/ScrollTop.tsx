import React, { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ScrollTop: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIconRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const colorTrigger = ScrollTrigger.create({
      trigger: '.projects-page',
      start: 'top top',
      end: 'bottom bottom',
      onEnterBack: () => {
        gsap.to(scrollRef.current, { borderColor: '#d1cfcf' });
        gsap.to(scrollIconRef.current, { color: '#d1cfcf' });
      },
      onLeave: () => {
        gsap.to(scrollRef.current, { borderColor: 'rgb(18, 18, 18)' });
        gsap.to(scrollIconRef.current, { color: 'rgb(18, 18, 18)' });
      }
    });

    const visibilityTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-page',
        start: '0',
        end: '10%',
        scrub: true
      }
    });

    visibilityTl.fromTo(
      scrollRef.current,
      { opacity: 0, visibility: 'hidden' },
      { opacity: 1, visibility: 'visible' }
    );

    return () => colorTrigger.kill();
  }, []);

  function clickHandler() {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  }

  return (
    <div className="scrollTop mouseHover circle" ref={scrollRef} onClick={clickHandler}>
      <i className="fa-solid fa-arrow-up" ref={scrollIconRef}></i>
    </div>
  );
};

export default ScrollTop;
