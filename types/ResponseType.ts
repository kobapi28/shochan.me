import { LanguageAndFramework } from './languageAndFramework';
import { Profile } from './profile';
import { Works } from './works';

export type ProfileResponse = {
  data: {
    items: Profile[];
  };
};

export type LanguageAndFrameworkResponse = {
  data: {
    items: LanguageAndFramework[];
  };
};

export type WorksResponse = {
  data: {
    items: Works[];
  };
};
