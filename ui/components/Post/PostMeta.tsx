import React from 'react';
import { formatDate } from '../../lib/format';

interface PostMetaPorps {
  commentCount: number;
  updatedAt: Date;
}

export const PostMeta = ({ updatedAt, commentCount }: PostMetaPorps) => {
  return (
    <div className="flex justify-between items-center text-xs col-start-1 col-span-6 mb-4 md:col-start-2 md:col-span-8 md:my-6">
      <span className="font-light">{formatDate(updatedAt)}</span>
      <span className="font-bold">{commentCount} Kommentare</span>
    </div>
  );
};
