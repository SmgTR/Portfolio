import { FC, useEffect, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { FirstProjectWrapper } from '@/src/styled/components/projects/FirstProjectWrapper';

import IphoneVideo from './IphoneVideo';

import { ProjectTitle } from '@/src/styled/components/projects/ProjectTitle';
import { ProjectTech } from '@/src/styled/components/projects/ProjectTech';
import { ProjectDescription } from '@/src/styled/components/projects/ProjectDescription';

gsap.registerPlugin(ScrollTrigger);

const FirstProject: FC = () => {
  const [mobile, setMobile] = useState(false);

  function handleScreenSize() {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    const descriptionTlAdd = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-project-page',
        start: '-45%',
        end: '5%',
        scrub: true
      }
    });

    const descriptionTlRemove = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-project-page',
        start: '-25%',
        end: '60%',

        scrub: true
      }
    });

    descriptionTlAdd.fromTo(
      '.description_item',
      { opacity: 0.2 },
      { opacity: 1, stagger: 1, ease: 'power2.out' }
    );
    descriptionTlRemove.to('.description_item', { opacity: 0.2, stagger: 1 });

    handleScreenSize();

    window.addEventListener('resize', handleScreenSize);
    return () => window.removeEventListener('resize', handleScreenSize);
  }, []);

  return (
    <FirstProjectWrapper className="first-project-page">
      <div>
        <ProjectTitle>Expense Tracker</ProjectTitle>
        {mobile && (
          <div className="mobile_iphone">
            <IphoneVideo />
          </div>
        )}
        <ProjectTech>
          <span className="bracket">[</span>Typescript, ReactNative, Express, MySQL, Sequelize, Jest
          <span className="bracket">]</span>
        </ProjectTech>
        <ProjectDescription>
          <span className="description_item">React native application,</span>
          <br></br>
          <span className="description_item">
            that allows users track their expenses<br></br>
          </span>
          <span className="description_item">and calculate amount of all expenses.</span>
        </ProjectDescription>
        <a
          href="https://github.com/SmgTR/Expenses_Tracker_RN"
          title="github"
          className="mouseHover projectLink"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button>
            Github<i className="fa-brands fa-github"></i>
          </button>
        </a>
      </div>
      {!mobile && <IphoneVideo />}
    </FirstProjectWrapper>
  );
};

export default FirstProject;
