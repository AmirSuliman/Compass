import { lazy } from "react"
import DefaultLayout from "../Layout/AdminSide/AdminLayout"
import SearchInput from "../Layout/Userside/components/SearchInput"
const Revenue = lazy(()=> import('../Pages/Adminside/Revenue/revenue'))
const Dashboard = lazy(() => import("../Pages/Adminside/dashboard"))
const Allusers = lazy(() => import("../Pages/Adminside/allusers"))

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
    path: "/admin/all-users",
    element: (
      <DefaultLayout>
        <Allusers />
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
]

export default { routes: adminsideRouter }
