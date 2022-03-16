import { Skill } from './skill';
import { Profile } from './profile';
import { Works } from './works';

export type ProfileResponse = {
  data: {
    items: Profile[];
  };
};

export type SkillResponse = {
  data: {
    items: Skill[];
  };
};

export type WorksResponse = {
  data: {
    items: Works[];
  };
};
