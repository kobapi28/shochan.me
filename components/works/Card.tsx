import { Works } from '../../types/works';
import Image from 'next/image';

type Props = {
  works: Works;
};

const Card: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <p>{works.name}</p>
      <p>{works.role}</p>
      <p>{works.introduction}</p>
      <p>{works.github || 'undefined'}</p>
      <p>{works.slide || 'undefined'}</p>
      <p>{works.otherUrl || 'undefined'}</p>
      <Image src={works.image.src} alt='' width={300} height={200}></Image>
    </>
  );
};

export default Card;
