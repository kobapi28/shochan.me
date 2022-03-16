import { LanguageAndFramework } from '../../types/languageAndFramework';

type Props = {
  skill: LanguageAndFramework;
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
