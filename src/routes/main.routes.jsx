import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import usersideRoutes from './userside.routes';

const mainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...usersideRoutes.routes,
      // ...candidateRoutes.routes,
      // ...employeeRouter.routes,
      // ...adminRouter.routes,
      // ...landingPageRouter,
    ],
  },
]);

export default mainRoutes;
