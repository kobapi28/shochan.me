import { Works } from '../../types/works';
import Image from 'next/image';
import { eraseTags } from '../../utils/eraseTags';
import Chip from '../uiParts/Chip';
import ExternalServiceLink from '../uiParts/ExternalServiceLink';

type Props = {
  works: Works;
};

const Card: React.VFC<Props> = ({ works }) => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <Image
        src={works.image.src}
        alt=''
        objectFit='contain'
        width={300}
        height={200}
      ></Image>
      <h3>{works.name}</h3>
      {works.role.map((r) => {
        return <Chip title={r} key={r} />;
      })}
      <p>{eraseTags(works.introduction)}</p>
      {works.github ? (
        <ExternalServiceLink title={works.github} type='github' />
      ) : null}
      {works.slide ? (
        <ExternalServiceLink title={works.slide} type='other' />
      ) : null}
      {works.otherUrl ? (
        <ExternalServiceLink title={works.otherUrl} type='other' />
      ) : null}
    </div>
  );
};

export default Card;
