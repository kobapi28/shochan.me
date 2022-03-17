import { Works } from '../../types/works';
import Image from 'next/image';
import { eraseTags } from '../../utils/eraseTags';
import Chip from '../uiParts/Chip';
import ExternalServiceLink from '../uiParts/ExternalServiceLink';
import { roleColor } from '../../utils/RoleColor';
import { ExternalServiceLink as ExternalServiceLinkType } from '../../types/externalServiceLink';

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
        return <Chip title={r} key={r} color={roleColor(r)} />;
      })}
      <p>{eraseTags(works.introduction)}</p>
      {works.externalServiceLinks.map((link: ExternalServiceLinkType) => {
        return <ExternalServiceLink link={link} key={link.url} />;
      })}
    </div>
  );
};

export default Card;
