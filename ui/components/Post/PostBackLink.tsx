import Link from 'next/link';
import { motion } from 'framer-motion';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const fadeInLeft = {
  exit: { x: -100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export const PostBackLink = () => {
  return (
    <motion.div
      variants={fadeInLeft}
      className="text-lg font-bold tracking-wider col-start-1 col-span-6 py-4 row-start-1 md:col-start-2 md:col-span-11 text-gray-800"
    >
      <Link href="/">Zurück</Link>
    </motion.div>
  );
};
