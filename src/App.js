import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import User from './getuser/User';
import AddUser from './addUser/AddUser';

function App() {
  const route = createBrowserRouter([
    {
    path:"/",
    element : <User/>
    },
    {
      path:"/add",
      element : <AddUser/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
