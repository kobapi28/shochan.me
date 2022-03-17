import { ExternalServiceLink } from './externalServiceLink';

export type Profile = {
  name: string;
  title: string;
  profile: {
    src: string;
  };
  externalServiceLinks: ExternalServiceLink[];
  comment: string;
};
