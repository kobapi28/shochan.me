import { Type } from '../../types/skill';
import { Role } from '../../types/works';
import { calculateColor } from '../../utils/RoleColor';

type Props = {
  title: Type | Role;
};

const Chip: React.VFC<Props> = ({ title }) => {
  return <p style={{ color: calculateColor(title) }}>{title}</p>;
};

export default Chip;
