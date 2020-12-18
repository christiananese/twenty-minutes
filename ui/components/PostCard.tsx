import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface PostProps {
  title: string;
  slug: string;
  excerpt?: string;
  featureImage: string;
  commentCount: number;
  isFeatured: boolean;
}

const PostCard = ({ title, slug, excerpt, featureImage, isFeatured, commentCount }: PostProps) => {
  return (
    <article
      className={`flex flex-col rounded-lg overflow-hidden sm:col-span-2 md:col-span-4 ${
        isFeatured && 'sm:col-span-4 md:col-span-8 md:flex-row'
      }`}
    >
      <Link href={`posts/${slug}`}>
        <a>
          <div className="w-full">
            <Image width="600" height="400" src={featureImage} alt={title} />
          </div>
          <div className="flex flex-col p-4">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-base">{excerpt}</p>
            <div className="grid gap-4 grid-flow-col auto-cols-max">
              <span>{commentCount} Kommentare</span>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default PostCard;
