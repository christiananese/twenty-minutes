import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { fetchAPI } from '../lib/api';
import PostCard, { PostProps } from '../components/PostCard';
import { GetStaticProps } from 'next';

export default function Home({ posts }: { posts: PostProps[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TwentyMinutes Blog</h1>
        {posts.map((post: PostProps, index: number) => (
          <PostCard key={index} title={post.title} excerpt={post.excerpt} featureImage={post.featureImage} />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAPI('/posts');
  return { props: { posts } };
};
