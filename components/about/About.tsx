import { Profile } from '../../types/profile';
import { eraseTags } from '../../utils/eraseTags';
import Image from 'next/image';

type Props = {
  profile: Profile;
};

const About: React.VFC<Props> = ({ profile }) => {
  return (
    <>
      <h2>about me</h2>
      <Image src={profile.profile.src} alt='' width={32} height={32} />
      <p>{eraseTags(profile.comment)}</p>
      <p>{profile.github}</p>
      <p>{profile.twitter}</p>
    </>
  );
};

export default About;
