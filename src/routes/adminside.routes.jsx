import { lazy } from 'react';
import DefaultLayout from '../Layout/Adminside/AdminLayout';
import SearchInput from '../Layout/Userside/components/SearchInput';
const Revenue = lazy(() => import('../Pages/Adminside/Revenue/revenue'));
const Dashboard = lazy(() => import('../Pages/Adminside/dashboard'));
const Allusers = lazy(() => import('../Pages/Adminside/allusers'));
const Suggestions = lazy(() =>
  import('../Pages/Adminside/suggestions/Suggestions')
);

import Campaigns from '../Pages/Adminside/campaigns/campaigns';
import AIcontent from '../Pages/Adminside/AI content optimaization request/AIcontent';
const AIcontentOptimization = lazy(() =>
  import(
    '../Pages/Adminside/AI content optimaization request/aicontentoptimizationrequest'
  )
);
const SubscibedPlan = lazy(() =>
  import('../Pages/Adminside/Subscribed_Plan/SubscribedPlan')
);
const adminsideRouter = [
  {
    path: '/admin-dashboard',
    element: (
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    ),
  },
  {
    path: '/admin/all-users',
    element: (
      <DefaultLayout>
        <Allusers />
      </DefaultLayout>
    ),
  },
  {
    path: '/admin/revenue',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Revenue />
      </DefaultLayout>
    ),
  },
  {
    path: '/admin/suggestions',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Suggestions />
      </DefaultLayout>
    ),
  },

  {
    path: '/admin/campaigns',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Campaigns />
      </DefaultLayout>
    ),
  },
  {
    path: '/admin/ai-content',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <AIcontent />
      </DefaultLayout>
    ),
  },
  {
    path: '/admin/ai-content-optimization',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <AIcontentOptimization />
      </DefaultLayout>
    ),
  },

  {
    path: '/admin/subscribedplan',
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <SubscibedPlan />
      </DefaultLayout>
    ),
  },
];

export default { routes: adminsideRouter };
