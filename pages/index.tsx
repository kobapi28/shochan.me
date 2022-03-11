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

type Props = {
  profile: Profile;
  languageAndFrameworks: LanguageAndFramework[];
  works: Works[];
};

const Home: NextPage<Props> = ({ profile, languageAndFrameworks, works }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>shochan.me</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
              Find in-depth information about Next.js features and API. test `a
              href`
            </p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
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