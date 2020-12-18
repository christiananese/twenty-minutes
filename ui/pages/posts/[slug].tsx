import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import PageContainer from '../../components/PageContainer';

import PostAPI from '../../lib/api/post';
import CommentAPI from '../../lib/api/comment';

interface PostProps {
  title: string;
  excerpt?: string;
  slug: string;
  featureImage: string;
  content?: string;
  updatedAt: Date;
  commentCount: number;
}

interface CommentProps {
  name?: string;
  text: string;
  updatedAt: Date;
}

const Post = ({ post, initialComments }: { post: PostProps; initialComments: CommentProps[] }) => {
  if (!post) {
    return <div>Loading Spinner</div>;
  }

  return (
    <PageContainer>
      <div className="grid grid-cols-6 md:grid-cols-12 md:max-w-screen-lg">
        <div>{post.title}</div>
        <div>{initialComments.length}</div>
      </div>
    </PageContainer>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  try {
    const { slug } = params;
    const { data: post } = await PostAPI.findOne(slug);
    const comments = await CommentAPI.findAll(slug);

    return {
      props: {
        post,
        initialComments: comments
      },
      revalidate: 1
    };
  } catch (error) {
    return {
      props: {
        post: null,
        initialComments: []
      },
      revalidate: 1
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await PostAPI.findAll();

  const paths = data.map((post: PostProps) => ({
    params: {
      slug: post.slug
    }
  }));
  return { paths: [], fallback: true };
};
