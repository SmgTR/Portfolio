import { FC, useEffect } from 'react';

import gsap from 'gsap';

const Cursor: FC = () => {
  useEffect(() => {
    const cursorOuter = document.querySelector('.cursor--large') as HTMLElement;
    const cursorInner = document.querySelector('.cursor--small') as HTMLElement;
    let isStuck = false;
    let mouse = {
      x: -100,
      y: -100
    };

    // Just in case you need to scroll
    let scrollHeight = 0;
    window.addEventListener('scroll', function (e) {
      scrollHeight = window.scrollY;
    });

    let cursorOuterOriginalState = {
      width: cursorOuter.getBoundingClientRect().width,
      height: cursorOuter.getBoundingClientRect().height
    };
    const buttons = document.querySelectorAll('.mouseHover');

    buttons.forEach((button) => {
      button.addEventListener('pointerenter', handleMouseEnter);
      button.addEventListener('pointerleave', handleMouseLeave);
    });

    document.body.addEventListener('pointermove', updateCursorPosition);
    document.body.addEventListener('pointerdown', () => {
      gsap.to(cursorInner, {
        scale: 1.4,
        duration: 0.15
      });
    });
    document.body.addEventListener('pointerup', () => {
      gsap.to(cursorInner, {
        scale: 1,
        duration: 0.15
      });
    });

    function updateCursorPosition(event: MouseEvent) {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    }

    function updateCursor() {
      gsap.set(cursorInner, {
        x: mouse.x,
        y: mouse.y
      });

      if (!isStuck) {
        gsap.to(cursorOuter, {
          duration: 0.15,
          x: mouse.x - cursorOuterOriginalState.width / 2,
          y: mouse.y - cursorOuterOriginalState.height / 2
        });
      }

      requestAnimationFrame(updateCursor);
    }

    updateCursor();

    function handleMouseEnter(event: any) {
      const circle = event.target.classList.contains('circle');
      isStuck = true;
      const targetBox = event.currentTarget.getBoundingClientRect();
      gsap.to(cursorOuter, {
        x: targetBox.left,
        y: targetBox.top + scrollHeight,
        width: targetBox.width,
        height: targetBox.height,
        borderRadius: circle ? '50%' : '5px',
        scale: circle ? 1.5 : 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      });
    }

    function handleMouseLeave() {
      isStuck = false;
      gsap.to(cursorOuter, {
        width: cursorOuterOriginalState.width,
        height: cursorOuterOriginalState.width,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        scale: 1
      });
    }
  }, []);

  return (
    <>
      <div className="cursor cursor--large"></div>
      <div className="cursor cursor--small"></div>
    </>
  );
};

export default Cursor;
