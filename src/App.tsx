import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Toaster } from 'sonner';
import Layout from './Layout';
import Modal from './containers/Modal';
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2, refetchOnWindowFocus: false } },
});

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
      <Toaster richColors position='top-center' />
      <Modal/>
    </QueryClientProvider>
  );
}

export default App;
