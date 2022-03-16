import { Skill } from '../../types/skill';
import Card from './Card';

type Props = {
  skills: Skill[];
};

const Skill: React.VFC<Props> = ({ skills }) => {
  return (
    <>
      <h2>skills</h2>
      {skills.map((item: Skill) => {
        return <Card skill={item} key={item.name} />;
      })}
    </>
  );
};

export default Skill;
