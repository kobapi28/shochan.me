import { ExternalServiceLink } from '../../types/externalServiceLink';
import { roleColor } from '../../utils/RoleColor';
import Chip from './Chip';

type Props = {
  link: ExternalServiceLink;
};

const ExternalServiceLink: React.VFC<Props> = ({ link }) => {
  return (
    <div>
      <Chip title={link.type} color={roleColor(link.type)} />
      <a
        target='_blank'
        rel='noreferrer'
        href={link.url}
        style={{ wordWrap: 'break-word' }}
      >
        {link.url}
      </a>
    </div>
  );
};

export default ExternalServiceLink;
