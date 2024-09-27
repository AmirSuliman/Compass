import { lazy } from 'react';
import DefaultLayout from '../Layout/Userside/UserLayout';
import SearchInput from '../Layout/Userside/components/SearchInput';
import Tabs from '../Pages/Userside/Inbox/Components/Tabs';
import Userdashboard from '../Pages/Userside/dashboard/Userdashboard';
import Survey from '../Pages/Userside/Suggestionandsurvey/survey';
import Profile from '../Pages/Userside/setting/profile';
import Setting from '../Pages/Userside/setting/Setting';
import Verifyemailandphone from '../Pages/Userside/setting/emailandphoneverification';
import Otp from '../Pages/Userside/setting/otp';
import Planning from '../Pages/Userside/Planning/Planning';
import AIcontentrecomendation from '../Pages/Userside/AIcontent/recomendation';
import Targetaudience from '../Pages/Userside/AIcontent/targetaudience';
import AddCompetitors from '../Pages/Userside/AIcontent/addcompititors';
import Content from '../Pages/Userside/suggestion/content';
const Notification = lazy(() =>
  import('../Pages/Userside/setting/notification')
);
const Inbox = lazy(() => import('../Pages/Userside/Inbox/Inbox'));
const Login = lazy(() => import('../Pages/Userside/login'));
const Signup = lazy(() => import('../Pages/Userside/signup'));
const Forgotpassword = lazy(() => import('../Pages/Userside/forgotpsaaword'));
const Resetpassword = lazy(() => import('../Pages/Userside/resetpassword'));
const DescribeQuestion = lazy(() =>
  import('../Pages/Userside/questions/describebest')
);
const BusinessQuestion = lazy(() =>
  import('../Pages/Userside/questions/business')
);
const NoofpeopleQuestion = lazy(() =>
  import('../Pages/Userside/questions/noofpeople')
);
const RoleQuestion = lazy(() => import('../Pages/Userside/questions/role'));
const Connecttools = lazy(() => import('../Pages/Userside/connecttools'));
const Savedcontent = lazy(() =>
  import('../Pages/Userside/dashboard/savedcontent')
);
const Sizeofcompany = lazy(() =>
  import('../Pages/Userside/questions/sizeofcompany')
);
const Youtubedetails = lazy(() =>
  import('../Pages/Userside/youtubedetails/youtubedetails')
);

const Overview = lazy(() => import('../Pages/Userside/dashboard/overview'));
const Connections = lazy(() =>
  import('../Pages/Userside/dashboard/connections')
);
const UserSidescreen = lazy(() =>
  import('../Pages/Userside/usersidescreen/selectplatform')
);
const Suggestion = lazy(() =>
  import('../Pages/Userside/Suggestionandsurvey/suggestion')
);
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
    path: '/user/overview/saved-content',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Savedcontent />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/overview/connection',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Connections />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/overview',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Overview />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/select-platform',
    element: (
      <DefaultLayout>
        <UserSidescreen />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/suggestion',
    element: (
      <DefaultLayout>
        <Suggestion />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/survey',
    element: (
      <DefaultLayout>
        <Survey />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/profile',
    element: (
      <DefaultLayout>
        <Profile />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/setting',
    element: (
      <DefaultLayout>
        <Setting />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/verification',
    element: (
      <DefaultLayout>
        <Verifyemailandphone />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/otp',
    element: (
      <DefaultLayout>
        <Otp />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/notification',
    element: (
      <DefaultLayout>
        <Notification />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/Ai-content-recomendation',
    element: (
      <DefaultLayout headerChildren={<SearchInput/>}>
        <AIcontentrecomendation />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/target-audience',
    element: (
      <DefaultLayout headerChildren={<SearchInput/>}>
        <Targetaudience />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/suggestion-content',
    element: (
      <DefaultLayout>
        <Content />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/add-competitors',
    element: (
      <DefaultLayout headerChildren={<SearchInput/>}>
        <AddCompetitors />
      </DefaultLayout>
    ),
  },
  {
    path: '/user-dashboard',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Userdashboard />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/overview/analytics',
    element: (
      <DefaultLayout headerChildren={<Tabs />}>
        <Youtubedetails />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/overview/inbox',
    element: (
      <DefaultLayout headerChildren={<Tabs />}>
        <Inbox />
      </DefaultLayout>
    ),
  },
  {
    path: '/user/overview/planning',
    element: (
      <DefaultLayout headerChildren={<Tabs />}>
        <Planning />
      </DefaultLayout>
    ),
  },
];

export default { routes: usersideRouter };
