import { Button } from '@/components/ui/button';
import { useDataFetch } from '@/service/queries';

const Home = () => {
  const { data, isLoading, refetch: fetchPost } = useDataFetch();

  console.info(data);

  const handleFetchData = () => {
    console.info('clicked');
    fetchPost();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center underline ">Protegix1</h1>

      <Button onClick={handleFetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Add'}
      </Button>

      {/* <div className="grid grid-cols-8 grid-rows-6 gap-4">
        <div className="col-span-5 row-span-2 bg-green-200">1</div>
        <div className="col-span-3 col-start-1 row-span-4 row-start-3 bg-red-200">2</div>
        <div className="col-span-2 col-start-4 row-span-4 bg-red-700 row-start-10">3</div>
        <div className="col-span-3 col-start-6 row-span-6 row-start-1 bg-red-500">7</div>
        <div className="col-span-2 col-start-4 row-span-4 row-start-3 bg-red-400">8</div>
      </div> */}
    </>
  );
};

export default Home;
