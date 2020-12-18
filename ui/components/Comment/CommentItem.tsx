import React from 'react';
import { formatDate } from '../../lib/format';

interface CommentProps {
  name?: string;
  text: string;
  date: Date;
}

export const CommentItem = ({ name = 'Anonym', text, date }: CommentProps) => {
  return (
    <article className="border border-gray-200 rounded-lg  p-4 flex flex-col mb-4 bg-white">
      <div className="flex flex-col space-between">
        {name && <span className="font-bold">{name}</span>}
        <span>{formatDate(date)}</span>
      </div>
      <p className="py-4">{text}</p>
    </article>
  );
};
