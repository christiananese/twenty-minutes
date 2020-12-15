import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { fetchAPI } from '../lib/api';
import { GetStaticProps } from 'next';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TwentyMinutes Blog</h1>
        {posts.map((post, index) => (
          <div key={index}>{post.title}</div>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAPI('/posts');
  return { props: { posts } };
};
