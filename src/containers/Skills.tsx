import { FC } from 'react';
import SkillsStack from '@/src/components/skills/SkillsStack';
import { SkillsWrapper } from '../styled/components/skills/SkillsWrapper';

import { SkillsContainerWrapper } from '../styled/containers/SkillsContainerWrapper';

const Skills: FC = () => {
  return (
    <SkillsContainerWrapper className="skills-page">
      <h4>Tech Stack</h4>
      <SkillsWrapper>
        <SkillsStack />
      </SkillsWrapper>
    </SkillsContainerWrapper>
  );
};

export default Skills;
