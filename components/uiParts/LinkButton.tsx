import { ExternalServiceLink } from '../../types/externalServiceLink';
import { roleColor } from '../../utils/RoleColor';

type Props = {
  link: ExternalServiceLink;
};

const LinkButton: React.VFC<Props> = ({ link }) => {
  return (
    <a
      style={{
        color: '#fff',
        backgroundColor: roleColor(link.type),
        padding: '4px 12px',
        borderRadius: '4px',
      }}
      href={link.url}
    >
      {link.type}
    </a>
  );
};

export default LinkButton;
