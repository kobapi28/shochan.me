import { SkillRole } from '../types/skill';
import { PositionRole, MediaRole } from '../types/works';

/**
 * positionRoleを受け取って、それに応じた色を返す
 * @param role
 * @returns
 */
export const calculatePositionRoleColor = (role: PositionRole) => {
  switch (role) {
    case 'Frontend':
      return '#5060ee';
    case 'Backend':
      return '#669f52';
    case 'Design':
      return '#c6bf1d';
    case 'PM':
      return '#c9489d';
    default:
      return '#000';
  }
};

/**
 * skillRoleを受け取って、スキルに応じた色を返す
 * @param role
 * @returns
 */
export const calculateSkillRoleColor = (role: SkillRole) => {
  switch (role) {
    case 'language':
      return '#5060ee';
    case 'library':
      return '#669f52';
    case 'framework':
      return '#c6bf1d';
    case 'tool':
      return '#c9489d';
    default:
      return '#000';
  }
};

/**
 * mediaRoleを受け取って、それに応じた色を返す
 * @param role
 * @returns
 */
export const calculateMediaRoleColor = (role: MediaRole) => {
  switch (role) {
    case 'slide':
      return '#087213';
    case 'github':
      return '#181616';
    case 'twitter':
      return '#1da1f2';
    case 'youtube':
      return '#da1725';
    case 'news':
      return '#170872';
    default:
      return '#000';
  }
};
