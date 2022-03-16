import { Works } from '../../types/works';
import Image from 'next/image';
import { eraseTags } from '../../utils/eraseTags';
import Chip from '../uiParts/Chip';

type Props = {
  works: Works;
};

const Card: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <p>{works.name}</p>
      {works.role.map((r) => {
        return <Chip title={r} key={r} />;
      })}
      <p>{eraseTags(works.introduction)}</p>
      <p>{works.github || 'undefined'}</p>
      <p>{works.slide || 'undefined'}</p>
      <p>{works.otherUrl || 'undefined'}</p>
      <Image src={works.image.src} alt='' width={300} height={200}></Image>
    </>
  );
};

export default Card;
