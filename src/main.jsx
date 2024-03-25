import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/applied",
        element: <AppliedJobs/>
      },
      {
        path: "/statistics",
        element: <Statistics/>
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='container mx-auto manrope bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
