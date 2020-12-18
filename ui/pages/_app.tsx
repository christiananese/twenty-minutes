import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'tailwindcss/tailwind.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const easing = [0.6, -0.05, 0.01, 0.99];

const pageTransition = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  },
  exit: {
    opacity: 0
  }
};

const pageMotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: pageTransition
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div key={router.route} {...pageMotionProps}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default MyApp;
