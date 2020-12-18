import React from 'react';
import { CommentItem } from './CommentItem';

interface CommentProps {
  name?: string;
  text: string;
  updatedAt: Date;
}

export const CommentList = ({ comments }: any) => {
  if (!comments || !comments.length) {
    return <div className="text-gray-800">Es gibt noch keine Kommentare</div>;
  }

  return comments.map((comment: CommentProps, index: number) => {
    return <CommentItem key={index} name={comment.name} text={comment.text} date={comment.updatedAt} />;
  });
};

export default CommentList;
