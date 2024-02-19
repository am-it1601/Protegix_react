import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './utility/routes';

const App = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
