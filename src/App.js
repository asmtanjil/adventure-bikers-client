import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
