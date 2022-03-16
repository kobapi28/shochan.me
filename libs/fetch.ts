import AxiosDefaults from 'axios';
import { Skill } from '../types/skill';
import { Profile } from '../types/profile';
import {
  SkillResponse,
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

export const fetchSkills = async (): Promise<Skill[]> => {
  return await axios
    .get(`/${requests.languageAndFrameworks}`)
    .then((res: SkillResponse) => {
      return res.data.items;
    });
};

export const fetchWorks = async (): Promise<Works[]> => {
  return await axios.get(`/${requests.works}`).then((res: WorksResponse) => {
    return res.data.items;
  });
};
