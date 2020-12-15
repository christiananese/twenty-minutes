import React from 'react';
import Image from 'next/image';

export interface PostProps {
  title: string;
  excerpt?: string;
  featureImage: string;
}

const PostCard = ({ title, excerpt, featureImage }: PostProps) => {
  return (
    <article>
      <Image width="800" height="600" src={featureImage} />
      <div>{title}</div>
      <div>{excerpt}</div>
    </article>
  );
};

export default PostCard;
