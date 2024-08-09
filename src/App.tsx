import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import { Toaster } from 'sonner';
import Layout from './Layout';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout/>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
