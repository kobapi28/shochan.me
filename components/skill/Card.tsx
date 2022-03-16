import { Skill } from '../../types/skill';

type Props = {
  skill: Skill;
};

const Card: React.VFC<Props> = ({ skill }) => {
  return (
    <>
      <p>{skill.name}</p>
      <p>{skill.type}</p>
      <p>{skill.level}</p>
    </>
  );
};

export default Card;
