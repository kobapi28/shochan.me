import { Works } from '../../types/works';

type Props = {
  works: Works[];
};

const WorksComponent: React.VFC<Props> = ({ works }) => {
  return (
    <>
      <h2>works</h2>
      {works.map((item: Works) => {
        return <p key={item.name}>{item.name}</p>;
      })}
    </>
  );
};

export default WorksComponent;
