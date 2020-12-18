import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';

import PageContainer from '../../components/PageContainer';
import { CommentContainer, CommentForm } from '../../components/Comment';
import { PostMeta, PostBody, PostBackLink } from '../../components/Post';

import useComments from '../../lib/hooks/useComments';
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

const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5
    }
  }
};

const CommentList = dynamic(() => import('../../components/Comment/CommentList'), {
  ssr: false
});

const Post = ({ post, initialComments }: { post: PostProps; initialComments: CommentProps[] }) => {
  if (!post) {
    return <PageContainer>Loading Spinner</PageContainer>;
  }

  const { slug, updatedAt, commentCount, featureImage, content, title, excerpt } = post;
  const [localCount, setLocalCount] = useState(commentCount);

  const { data: comments } = useComments(slug, initialComments);

  useEffect(() => {
    setLocalCount(comments.length || 0);
  }, [comments.length]);

  return (
    <PageContainer>
      <motion.div variants={stagger} className="grid grid-cols-6 md:grid-cols-12 md:max-w-screen-lg">
        <PostBackLink />

        {featureImage && (
          <motion.div
            variants={fadeInUp}
            className="w-full rounded-lg overflow-hidden row-start-2 col-start-1 col-span-6 md:col-span-12"
          >
            <Image width="1200" height="600" layout="responsive" src={featureImage} />
          </motion.div>
        )}

        <PostMeta updatedAt={updatedAt} commentCount={localCount} />

        <PostBody title={title} excerpt={excerpt} content={content} />

        <CommentContainer>
          <CommentForm slug={slug} commentCount={localCount} />
          <CommentList comments={comments} />
        </CommentContainer>
      </motion.div>
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
  return { paths: paths, fallback: true };
};
