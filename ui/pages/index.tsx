import Head from 'next/head';
import { fetchAPI } from '../lib/api';
import PostCard, { PostProps } from '../components/PostCard';
import { GetStaticProps } from 'next';

export default function Home({ posts }: { posts: PostProps[] }) {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full">
        <h1 className="text-3xl md:text-6xl mb-8">TwentyMinutes Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 max-w-full md:max-w-screen-lg">
          {posts.map((post: PostProps, index: number) => (
            <PostCard key={index} title={post.title} excerpt={post.excerpt} featureImage={post.featureImage} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAPI('/posts');
  return { props: { posts } };
};
