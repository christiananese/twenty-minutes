import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const ReactQueryRenderer = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: ReactQueryRenderer,
    ...options
  });

export * from '@testing-library/react';
export { customRender as render };
