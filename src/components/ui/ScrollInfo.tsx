import { FC, useRef, useEffect } from 'react';
import gsap from 'gsap';

import { ScrollWrapper } from '@/src/styled/components/ui/ScrollWrapper';

const ScrollInfo: FC = () => {
  const scrollRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.fromTo(
      scrollRef.current,
      { top: '-8px' },
      { top: '100%', duration: 2, repeat: -1, ease: 'power2.out' }
    );
  }, []);

  return (
    <ScrollWrapper>
      <span ref={scrollRef}></span>
    </ScrollWrapper>
  );
};

export default ScrollInfo;
