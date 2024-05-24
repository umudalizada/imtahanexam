
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routers } from './routes/routes';

const router = createBrowserRouter(routers);

function App() {


  return   <RouterProvider router={router} />
}

export default App
