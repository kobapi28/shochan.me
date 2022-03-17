import { Profile } from '../../types/profile';
import { eraseTags } from '../../utils/eraseTags';
import Image from 'next/image';
import ExternalServiceLink from '../uiParts/ExternalServiceLink';
import { ExternalServiceLink as ExternalServiceLinkType } from '../../types/externalServiceLink';

type Props = {
  profile: Profile;
};

const About: React.VFC<Props> = ({ profile }) => {
  return (
    <>
      <h2>about me</h2>
      <Image src={profile.profile.src} alt='' width={32} height={32} />
      <p>{eraseTags(profile.comment)}</p>
      {profile.externalServiceLinks.map((link: ExternalServiceLinkType) => {
        return <ExternalServiceLink link={link} key={link.url} />;
      })}
    </>
  );
};

export default About;
