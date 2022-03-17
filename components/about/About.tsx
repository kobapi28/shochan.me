import { Profile } from '../../types/profile';
import { eraseTags } from '../../utils/eraseTags';
import Image from 'next/image';
import GitHub from '../icons/GitHub';
import Twitter from '../icons/Twitter';
import ExternalServiceLink from '../uiParts/ExternalServiceLink';

type Props = {
  profile: Profile;
};

const About: React.VFC<Props> = ({ profile }) => {
  return (
    <>
      <h2>about me</h2>
      <Image src={profile.profile.src} alt='' width={32} height={32} />
      <p>{eraseTags(profile.comment)}</p>
      <ExternalServiceLink
        title={profile.github}
        type='github'
      ></ExternalServiceLink>
      <ExternalServiceLink
        title={profile.twitter}
        type='twitter'
      ></ExternalServiceLink>
    </>
  );
};

export default About;
