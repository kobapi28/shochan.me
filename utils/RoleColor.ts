import { Type } from '../types/skill';
import { Role } from '../types/works';

/**
 * role or type を受け取り、それに応じた色を返す
 * @param title
 * @returns
 */
export const calculateColor = (title: Type | Role) => {
  switch (title) {
    case 'Frontend':
    case 'language':
      return 'blue';
    case 'Backend':
    case 'library':
      return 'red';
    case 'Design':
    case 'framework':
      return 'yellow';
    case 'PM':
    case 'tool':
      return 'purple';
    default:
      return 'red';
  }
};
