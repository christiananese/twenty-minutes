import React from 'react';
import { formatDate } from '../../lib/format';
import { motion } from 'framer-motion';
interface CommentProps {
  name?: string;
  text: string;
  date: Date;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const CommentItem = ({ name = 'Anonym', text, date }: CommentProps) => {
  return (
    <motion.article
      variants={itemVariants}
      className="border border-gray-200 rounded-lg  p-4 flex flex-col mb-4 bg-white"
    >
      <div className="flex flex-col space-between">
        {name && <span className="font-bold text-gray-800">{name}</span>}
        <span className="text-gray-600 text-sm">{formatDate(date)}</span>
      </div>
      <p className="py-4 text-gray-800">{text}</p>
    </motion.article>
  );
};
