import Angular from '../icons/Angular';
import AWS from '../icons/AWS';
import Cpp from '../icons/Cpp';
import Docker from '../icons/Docker';
import Figma from '../icons/Figma';
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
  const width = 32;
  const height = 32;

  switch (skillName) {
    case 'Nextjs':
      return <Next width={width} height={height} />;
    case 'NestJS':
      return <Nest width={width} height={height} />;
    case 'Angular':
      return <Angular width={width} height={height} />;
    case 'React':
      return <React width={width} height={height} />;
    case 'Vue':
      return <Vue width={width} height={height} />;
    case 'Terraform':
      return <Terraform width={width} height={height} />;
    case 'AWS':
      return <AWS width={width} height={height} />;
    case 'Docker':
      return <Docker width={width} height={height} />;
    case 'PHP':
      return <PHP width={width} height={height} />;
    case 'C++':
      return <Cpp width={width} height={height} />;
    case 'Kotlin':
      return <Kotlin width={width} height={height} />;
    case 'TypeScript':
      return <TypeScript width={width} height={height} />;
    case 'Figma':
      return <Figma width={width} height={height} />;
    default:
      return null;
  }
};

export default SkillIcon;
