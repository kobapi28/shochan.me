import Angular from '../icons/Angular';
import AWS from '../icons/AWS';
import Cpp from '../icons/Cpp';
import Docker from '../icons/Docker';
import Kotlin from '../icons/Kotlin';
import Nest from '../icons/Nest';
import Next from '../icons/Next';
import PHP from '../icons/PHP';
import React from '../icons/React';
import Terraform from '../icons/Terraform';
import TypeScript from '../icons/TypeScript';
import Vue from '../icons/Vue';

type Props = {
  skillName: string;
};

const SkillIcon: React.VFC<Props> = ({ skillName }) => {
  switch (skillName) {
    case 'Nextjs':
      return <Next />;
    case 'NestJS':
      return <Nest />;
    case 'Angular':
      return <Angular />;
    case 'React':
      return <React />;
    case 'Vue':
      return <Vue />;
    case 'Terraform':
      return <Terraform />;
    case 'AWS':
      return <AWS />;
    case 'Docker':
      return <Docker />;
    case 'PHP':
      return <PHP />;
    case 'C++':
      return <Cpp />;
    case 'Kotlin':
      return <Kotlin />;
    case 'TypeScript':
      return <TypeScript />;
    default:
      return null;
  }
};

export default SkillIcon;
