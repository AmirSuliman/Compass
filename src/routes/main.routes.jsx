import React from 'react';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import usersideRoutes from './userside.routes';
import adminsideRoutes from './adminside.routes';
import landingPageRoutes from './landingpage.routes';
const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...usersideRoutes.routes, ...adminsideRoutes.routes, ...landingPageRoutes.routes],
  },
]);

export default mainRoutes;
