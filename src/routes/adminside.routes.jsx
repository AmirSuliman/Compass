import { lazy } from "react";
import DefaultLayout from "../Layout/AdminSide/AdminLayout";
import SearchInput from "../Layout/Userside/components/SearchInput";
import Campaigns from "../Pages/Adminside/campaigns/campaigns";
import AIcontent from "../Pages/Adminside/AI content optimaization request/AIcontent";

const Revenue = lazy(() => import("../Pages/Adminside/Revenue/revenue"));
const Dashboard = lazy(() => import("../Pages/Adminside/dashboard"));
const AIcontentOptimization = lazy(() => import("../Pages/Adminside/AI content optimaization request/aicontentoptimizationrequest"));

import { lazy } from "react"
import DefaultLayout from "../Layout/AdminSide/AdminLayout"
import SearchInput from "../Layout/Userside/components/SearchInput"
const Revenue = lazy(()=> import('../Pages/Adminside/Revenue/revenue'))
const Dashboard = lazy(() => import("../Pages/Adminside/dashboard"))
const SubscibedPlan = lazy(() => import("../Pages/Adminside/Subscribed_Plan/SubscribedPlan"))
const adminsideRouter = [
  {
    path: "/admin-dashboard",
    element: (
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/revenue",
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Revenue />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/campaigns",
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <Campaigns />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/ai-content",
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <AIcontent />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/ai-content-optimization",
    element: (
      <DefaultLayout headerChildren={<SearchInput />}>
        <AIcontentOptimization />
      </DefaultLayout>
    ),
  },
];
  {
    path: "/admin/subscribedplan",
    element: (
      <DefaultLayout headerChildren={<SearchInput/>}>
        <SubscibedPlan />
      </DefaultLayout>
    ),
  },
]

export default { routes: adminsideRouter };
