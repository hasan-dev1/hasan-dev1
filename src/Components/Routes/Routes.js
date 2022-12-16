import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import MoreAbot from '../Pages/About/MoreAbout';
import Contuctus from '../Pages/Contuctus/Contuctus';
import Moreproject from '../Pages/Project/Moreproject';
import ProjectDetails from '../Pages/Project/ProjectDetails';
import Blogs from '../SharedPage/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contuctus",
        element: <Contuctus></Contuctus>
      },
      {
        path: "/moreabout",
        element: <MoreAbot></MoreAbot>,
      },
      {
        path: "/moreproject",
        loader: () =>fetch(`https://portfolio-server-kohl.vercel.app/home`),
        element: <Moreproject></Moreproject>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/projectdetails/:projectid",
        loader: ({ params }) =>
          fetch(`https://portfolio-server-kohl.vercel.app/project?id=${params.projectid}`),
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default router