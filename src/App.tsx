import { Button } from './components/ui/button';
import { useDataFetch } from './service/queries';

const App = () => {
  const { data, isLoading, refetch: fetchPost } = useDataFetch();

  console.info(data);

  const handleFetchData = () => {
    console.info('clicked');
    fetchPost();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center underline bg-red-400">Protegix1</h1>

      <span></span>

      <Button onClick={handleFetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Add'}
      </Button>
    </>
  );
};

export default App;
