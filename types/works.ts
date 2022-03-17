import { ExternalServiceLink } from './externalServiceLink';

export type PositionRole = 'Frontend' | 'Backend' | 'Design' | 'PM';
export type MediaRole = 'github' | 'twitter' | 'news' | 'youtube' | 'slide';

export type Works = {
  name: string;
  image: {
    src: string;
  };
  role: PositionRole[];
  introduction: string;
  externalServiceLinks: ExternalServiceLink[];
};
