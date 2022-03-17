import { Works } from '../../types/works';
import Card from './Card';

type Props = {
  works: Works[];
};

const WorksComponent: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <h2>works</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        {works.map((item: Works) => {
          return <Card works={item} key={item.name} />;
        })}
      </div>
    </>
  );
};

export default WorksComponent;
