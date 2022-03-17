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
        <>
          <Twitter width={32} height={32} />
          <a target='_blank' rel='noreferrer' href={title}>
            {title}
          </a>
        </>
      );
    case 'github':
      return (
        <>
          <GitHub width={32} height={32} />
          <a target='_blank' rel='noreferrer' href={title}>
            {title}
          </a>
        </>
      );
    default:
      return (
        <>
          <Link width={32} height={32} />
          <a target='_blank' rel='noreferrer' href={title}>
            {title}
          </a>
        </>
      );
  }
};

export default ExternalServiceLink;
