import ExternalServiceType from '../../types/externalService';
import GitHub from '../icons/GitHub';
import Link from '../icons/Link';
import Twitter from '../icons/Twitter';

type Props = {
  title: string;
  type: ExternalServiceType;
};

const ExternalServiceLink: React.VFC<Props> = ({ title, type }) => {
  switch (type) {
    case 'twitter':
      return (
        <div>
          <Twitter width={32} height={32} />
          <a
            target='_blank'
            rel='noreferrer'
            href={title}
            style={{ wordWrap: 'break-word' }}
          >
            {title}
          </a>
        </div>
      );
    case 'github':
      return (
        <div>
          <GitHub width={32} height={32} />
          <a
            target='_blank'
            rel='noreferrer'
            href={title}
            style={{ wordWrap: 'break-word' }}
          >
            {title}
          </a>
        </div>
      );
    default:
      return (
        <div>
          <Link width={32} height={32} />
          <a
            target='_blank'
            rel='noreferrer'
            href={title}
            style={{ wordWrap: 'break-word' }}
          >
            {title}
          </a>
        </div>
      );
  }
};

export default ExternalServiceLink;
