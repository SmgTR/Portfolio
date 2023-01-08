import { FC, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { ProjectTitle } from '@/src/styled/components/projects/ProjectTitle';
import { ProjectTech } from '@/src/styled/components/projects/ProjectTech';
import { ProjectDescription } from '@/src/styled/components/projects/ProjectDescription';
import { SecondProjectWrapper } from '@/src/styled/components/projects/SecondProjectWrapper';
import Image from 'next/image';

const SecondProject: FC = () => {
  useEffect(() => {
    const descriptionTlAdd = gsap.timeline({
      scrollTrigger: {
        trigger: '.taskzilla-page',
        start: '20%',
        end: '60%',
        scrub: true
      }
    });

    const descriptionTlRemove = gsap.timeline({
      scrollTrigger: {
        trigger: '.taskzilla-page',
        start: '35%',
        end: '90%',
        scrub: true
      }
    });

    descriptionTlAdd.fromTo(
      '.sp_description_item',
      { opacity: 0.2 },
      { opacity: 1, stagger: 1, ease: 'power2.out' }
    );
    descriptionTlRemove.to('.sp_description_item', { opacity: 0.2, stagger: 1 });
  }, []);

  return (
    <SecondProjectWrapper className="taskzilla-page">
      <div>
        <ProjectTitle>Taskzilla</ProjectTitle>
        <ProjectTech>
          <span className="bracket">[</span>Typescript, Next, Socket.io, Drag&apos; n Drop
          PostgreSQL, Prisma, Jest
          <span className="bracket">]</span>
        </ProjectTech>
        <Image src="/assets/taskzilla.png" width="1200" height="650" alt="Taskzilla design"></Image>

        <ProjectDescription>
          <span className="sp_description_item">
            Task management application, that allows users to create and manage workspaces,
            projects, tasks and columns.
          </span>
          <span className="sp_description_item">
            This project includes Drag&apos; n drop for task and columns management.{' '}
          </span>
          <span className="sp_description_item">
            Web sockets provide functionality for project active users list and for live project
            updates.
          </span>
        </ProjectDescription>
        <div className="project_links_container">
          <a
            href="https://github.com/SmgTR/Taskzilla"
            title="github"
            className="mouseHover projectLink"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button>
              Github<i className="fa-brands fa-github"></i>
            </button>
          </a>
          <a
            href="https://taskzilla.onrender.com/"
            title="github"
            className="mouseHover projectLink"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button>
              Live <i className="fa-solid fa-earth-americas"></i>
            </button>
          </a>
        </div>
      </div>
    </SecondProjectWrapper>
  );
};

export default SecondProject;
