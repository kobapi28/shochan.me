import { LanguageAndFramework } from '../../types/languageAndFramework';

type Props = {
  languageAndFrameworks: LanguageAndFramework[];
};

const Skill: React.VFC<Props> = ({ languageAndFrameworks }) => {
  return (
    <>
      <h2>skills</h2>
      {languageAndFrameworks.map((item: LanguageAndFramework) => {
        return <p key={item.name}>{item.name}</p>;
      })}
    </>
  );
};

export default Skill;
