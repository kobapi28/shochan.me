import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/about/About';
import Skills from '../components/skill/Skills';
import WorksComponent from '../components/works/Works';
import { fetchSkills, fetchProfile, fetchWorks } from '../libs/fetch';
import styles from '../styles/Home.module.css';
import { Skill } from '../types/skill';
import { Profile } from '../types/profile';
import { Works } from '../types/works';
import { eraseTags } from '../utils/eraseTags';

type Props = {
  profile: Profile;
  skills: Skill[];
  works: Works[];
};

// TODO: 画像urlを発行してくれないので、imgをどこか外部ストレージのファイルurlにするか、Google Cloud Storageと連携するか
const Home: NextPage<Props> = ({ profile, skills, works }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{profile.title}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{profile.name}</h1>
        <About profile={profile} />

        <Skills skills={skills} />

        <WorksComponent works={works} />
      </main>

      <footer className={styles.footer}>{profile.title}</footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const responses: Props = await Promise.all([
    fetchProfile(),
    fetchSkills(),
    fetchWorks(),
  ]).then((res) => {
    return {
      profile: res[0],
      skills: res[1],
      works: res[2],
    };
  });
  return {
    props: responses,
  };
};

export default Home;
