import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import usersideRoutes from './userside.routes';
import adminsideRoutes from './adminside.routes';

const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...usersideRoutes.routes,
      // ...candidateRoutes.routes,
      // ...employeeRouter.routes,
      ...adminsideRoutes.routes,
      // ...landingPageRouter,
    ],
  },
]);

export default mainRoutes;
