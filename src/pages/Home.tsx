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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ab architecto minus officia voluptates animi sint
        possimus, a natus debitis quas voluptatem fugiat nulla dolorem voluptatum sit nobis vel. Suscipit.
      </p>
    </>
  );
};

export default Home;
