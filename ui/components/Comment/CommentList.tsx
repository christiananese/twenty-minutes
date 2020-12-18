import React from 'react';
import { CommentItem } from './CommentItem';
import { motion } from 'framer-motion';

interface CommentProps {
  name?: string;
  text: string;
  updatedAt: Date;
}

const containerVariants = {
  initial: { opacity: 1, scale: 0 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const CommentList = ({ comments }: any) => {
  if (!comments || !comments.length) {
    return <div className="text-gray-800">Es gibt noch keine Kommentare</div>;
  }

  return (
    <motion.div variants={containerVariants} initial="initial" animate="enter">
      {comments.map((comment: CommentProps, index: number) => {
        return <CommentItem key={index} name={comment.name} text={comment.text} date={comment.updatedAt} />;
      })}
    </motion.div>
  );
};

export default CommentList;
