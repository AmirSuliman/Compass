import { lazy } from "react"
import DefaultLayout from "../Layout/AdminSide/AdminLayout"
import SearchInput from "../Layout/Userside/components/SearchInput"
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
]

export default { routes: adminsideRouter }
