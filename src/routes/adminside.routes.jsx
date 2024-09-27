import { lazy } from "react"
import DefaultLayout from "../Layout/AdminSide/AdminLayout"
import SearchInput from "../Layout/Userside/components/SearchInput"
import Campaigns from "../Pages/Adminside/campaigns/campaigns"
const Revenue = lazy(()=> import('../Pages/Adminside/Revenue/revenue'))
const Dashboard = lazy(() => import("../Pages/Adminside/dashboard"))

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
    path: "/admin/campaigns",
    element: (
      <DefaultLayout headerChildren={<SearchInput/>}>
        <Campaigns />
      </DefaultLayout>
    ),
  },
]

export default { routes: adminsideRouter }
