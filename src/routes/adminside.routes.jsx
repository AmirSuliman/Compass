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
      <DefaultLayout headerChildren={<SearchInput/>}>
        <Revenue />
      </DefaultLayout>
    ),
  },
  {
    path: "/admin/subscribedplan",
    element: (
      <DefaultLayout headerChildren={<SearchInput/>}>
        <SubscibedPlan />
      </DefaultLayout>
    ),
  },
]

export default { routes: adminsideRouter }
