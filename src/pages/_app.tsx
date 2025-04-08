import type { AppProps } from 'next/app';
import { StyleSheetManager } from 'styled-components';
import '@/styles/globals.css';
import '@/styles/reset.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager>
        <Component {...pageProps} />
      </StyleSheetManager>
    </QueryClientProvider>
  );
}
