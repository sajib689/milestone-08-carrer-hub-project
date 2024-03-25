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
import Error from './Components/Error/Error';
import FeaturedDetails from './Components/FeaturedDetails/FeaturedDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
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
      },
      {
        path: "/details/:id",
        element: <FeaturedDetails/>,
        loader: ({params}) => fetch(`jobs.json/${params.id}`)
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <div className='container mx-auto manrope bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]'>
   <RouterProvider router={router} />
   </div>
  </>,
)
