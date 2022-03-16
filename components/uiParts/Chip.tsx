import { Type } from '../../types/skill';
import { Role } from '../../types/works';
import { calculateColor } from '../../utils/RoleColor';

type Props = {
  title: Type | Role;
};

const Chip: React.VFC<Props> = ({ title }) => {
  return (
    <span
      style={{
        color: '#fff',
        backgroundColor: calculateColor(title),
        padding: '4px 12px',
        borderRadius: '16px',
      }}
    >
      {title}
    </span>
  );
};

export default Chip;
