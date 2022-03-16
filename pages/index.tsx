import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  fetchLanguageAndFrameworks,
  fetchProfile,
  fetchWorks,
} from '../libs/fetch';
import styles from '../styles/Home.module.css';
import { LanguageAndFramework } from '../types/languageAndFramework';
import { Profile } from '../types/profile';
import { Works } from '../types/works';
import { eraseTags } from '../utils/eraseTags';

type Props = {
  profile: Profile;
  languageAndFrameworks: LanguageAndFramework[];
  works: Works[];
};

// TODO: 画像urlを発行してくれないので、imgをどこか外部ストレージのファイルurlにするか、Google Cloud Storageと連携するか
const Home: NextPage<Props> = ({ profile, languageAndFrameworks, works }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{profile.title}</title>
      </Head>
      <main className={styles.main}>
        <Image src={profile.profile.src} alt='' width={32} height={32} />
        <h1 className={styles.title}>{profile.name}</h1>

        <h2>about me</h2>
        <p className={styles.description}>{eraseTags(profile.comment)}</p>

        <p className={styles.description}>{profile.github}</p>

        <p className={styles.description}>{profile.twitter}</p>

        <h2>skills</h2>
        {languageAndFrameworks.map((item: LanguageAndFramework) => {
          return (
            <p key={item.name} className={styles.description}>
              {item.name}
            </p>
          );
        })}

        <h2>works</h2>
        {works.map((item: Works) => {
          return (
            <p key={item.name} className={styles.description}>
              {item.name}
            </p>
          );
        })}
      </main>

      <footer className={styles.footer}>{profile.title}</footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const responses: Props = await Promise.all([
    fetchProfile(),
    fetchLanguageAndFrameworks(),
    fetchWorks(),
  ]).then((res) => {
    return {
      profile: res[0],
      languageAndFrameworks: res[1],
      works: res[2],
    };
  });
  return {
    props: responses,
  };
};

export default Home;
