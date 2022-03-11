import AxiosDefaults from 'axios';

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

export const fetchProfile = async () => {
  axios.get(`/${requests.profile}`).then((res) => {
    console.log(res);
  });
};

export const fetchLanguageAndFrameworks = async () => {
  axios.get(`/${requests.languageAndFrameworks}`).then((res) => {
    console.log(res);
  });
};

export const fetchWorks = async () => {
  axios.get(`/${requests.works}`).then((res) => {
    console.log(res);
  });
};
