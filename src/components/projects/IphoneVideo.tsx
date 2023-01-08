import { FC, useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IphoneVideo: FC = () => {
  useEffect(() => {
    const video = document.querySelector('.video_mock') as HTMLVideoElement;
    video.pause();
    const videoTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-project-page',
        start: '-60%',
        end: '80%',
        scrub: true
      }
    });

    videoTl.fromTo(
      '.video_mock',
      { currentTime: 0 },
      {
        currentTime: 3
      }
    );
  }, []);

  return (
    <div className="video_container">
      <video className="video_mock" playsInline muted autoPlay>
        <source src="/assets/iphone.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};

export default IphoneVideo;
