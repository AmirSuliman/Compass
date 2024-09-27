import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import usersideRoutes from './userside.routes';
import adminsideRoutes from './adminside.routes';
import landingPageRoutes from './landingpage.routes';  // Import landing page routes

const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // ...usersideRoutes.routes,
      // ...landingPageRoutes.routes,  // Add the landing page routes here
      // ...candidateRoutes.routes,
      // ...employeeRouter.routes,
      ...adminsideRoutes.routes,
      // ...landingPageRouter,
      // ...adminRouter.routes,
    ],
  },
]);

export default mainRoutes;
