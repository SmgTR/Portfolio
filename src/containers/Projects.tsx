import { FC } from 'react';

import { ProjectsContainerWrapper } from '@/src/styled/containers/ProjectsContainerWrapper';
import FirstProject from '../components/projects/FirstProject';
import SecondProject from '../components/projects/SecondProject';
import MoreInfo from '../components/projects/MoreInfo';
import { SectionTitle } from '../styled/components/ui/SectionTitle';

const Projects: FC = () => {
  return (
    <ProjectsContainerWrapper className="projects-page">
      <SectionTitle>Projects</SectionTitle>
      <FirstProject />
      <SecondProject />
      <MoreInfo />
    </ProjectsContainerWrapper>
  );
};

export default Projects;
