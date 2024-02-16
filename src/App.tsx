import './App.css';

import { Button } from './components/ui/button';
import env from './config';
const App = () => {
  console.info(env);
  return (
    <>
      <h1 className="text-3xl font-bold text-center underline bg-red-400">Protegix1</h1>
      <Button>Add</Button>
    </>
  );
};

export default App;
