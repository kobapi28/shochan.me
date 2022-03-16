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
      return '#5060ee';
    case 'Backend':
    case 'library':
      return '#669f52';
    case 'Design':
    case 'framework':
      return '#c6bf1d';
    case 'PM':
    case 'tool':
      return '#c9489d';
    default:
      return '#000';
  }
};
