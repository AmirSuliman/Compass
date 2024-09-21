import { lazy } from 'react';
import Sidebar from '../Layout/components/sidebar';
import Login from '../Pages/Userside/login';
import Signup from '../Pages/Userside/signup';
import Forgotpassword from '../Pages/Userside/forgotpsaaword';
import Resetpassword from '../Pages/Userside/resetpassword';
import DescribeQuestion from '../Pages/Userside/questions/describebest';
import BusinessQuestion from '../Pages/Userside/questions/business';
import NoofpeopleQuestion from '../Pages/Userside/questions/noofpeople';
import RoleQuestion from '../Pages/Userside/questions/role';
import Connecttools from '../Pages/Userside/connecttools';
import Savedcontent from '../Pages/Userside/dashboard/savedcontent';
import Layout from '../Pages/Layout';
import Sizeofcompany from '../Pages/Userside/questions/sizeofcompany';
// const Layout = lazy(() => import('../Components/Layout'));

const usersideRouter = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forgot-password',
    element: <Forgotpassword />,
  },
  {
    path: '/reset-password',
    element: <Resetpassword />,
  },
  {
    path: '/question',
    element: <DescribeQuestion />,
  },
  {
    path: '/Busniess',
    element: <BusinessQuestion />,
  },
  {
    path: '/people',
    element: <NoofpeopleQuestion />,
  },
  {
    path: '/role',
    element: <RoleQuestion />,
  },
  {
    path: '/companysize',
    element: <Sizeofcompany />,
  },
  {
    path: '/connect-tools',
    element: <Connecttools />,
  },
  {
    path: '/saved-content',
    element: (
      <Layout
        sidebar={<Sidebar />}
        // heading={
        //   <h1 className="text-xl font-semibold text-[#16151C]">All Videos</h1>
        // }
        // subHeading={<h2></h2>}
      >
        <Savedcontent />
      </Layout>
    ),
  },
];

export default { routes: usersideRouter };
