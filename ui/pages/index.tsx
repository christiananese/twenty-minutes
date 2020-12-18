import PostCard, { PostProps } from '../components/PostCard';
import { GetStaticProps } from 'next';
import PageContainer from '../components/PageContainer';
import PostAPI from '../lib/api/post';

export default function Home({ posts }: { posts: PostProps[] }) {
  return (
    <PageContainer>
      <h1 className="text-3xl md:text-6xl mb-8">TwentyMinutes Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 max-w-full md:max-w-screen-lg">
        {posts.map((post: PostProps, index: number) => (
          <PostCard
            key={index}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            featureImage={post.featureImage}
            commentCount={post.commentCount}
            isFeatured={index === 0}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await PostAPI.findAll();
  return { props: { posts } };
};
