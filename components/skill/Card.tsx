import { Skill } from '../../types/skill';
import Chip from '../uiParts/Chip';

type Props = {
  skill: Skill;
};

const Card: React.VFC<Props> = ({ skill }) => {
  return (
    <>
      <p>{skill.name}</p>
      <Chip title={skill.type} />
      <p>{skill.level}</p>
    </>
  );
};

export default Card;
