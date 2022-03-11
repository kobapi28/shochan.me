import AxiosDefaults from 'axios';
import { LanguageAndFramework } from '../types/languageAndFramework';
import { Profile } from '../types/profile';
import {
  LanguageAndFrameworkResponse,
  ProfileResponse,
  WorksResponse,
} from '../types/ResponseType';
import { Works } from '../types/works';

const requests = {
  profile: 'profile',
  languageAndFrameworks: 'language-framework',
  works: 'works',
};

const axios = AxiosDefaults.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

export const fetchProfile = async (): Promise<Profile> => {
  return await axios
    .get(`/${requests.profile}`)
    .then((res: ProfileResponse) => {
      return res.data.items[0];
    });
};

export const fetchLanguageAndFrameworks = async (): Promise<
  LanguageAndFramework[]
> => {
  return await axios
    .get(`/${requests.languageAndFrameworks}`)
    .then((res: LanguageAndFrameworkResponse) => {
      return res.data.items;
    });
};

export const fetchWorks = async (): Promise<Works[]> => {
  return await axios.get(`/${requests.works}`).then((res: WorksResponse) => {
    return res.data.items;
  });
};
