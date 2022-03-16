import { LanguageAndFramework } from '../../types/languageAndFramework';
import Card from './Card';

type Props = {
  languageAndFrameworks: LanguageAndFramework[];
};

const Skill: React.VFC<Props> = ({ languageAndFrameworks }) => {
  return (
    <>
      <h2>skills</h2>
      {languageAndFrameworks.map((item: LanguageAndFramework) => {
        return <Card skill={item} key={item.name} />;
      })}
    </>
  );
};

export default Skill;
