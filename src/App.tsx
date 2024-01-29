import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import store from '@/store';
import Layout from '@/components/Layout';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Layout />
          </Provider>
        </QueryClientProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default App;
