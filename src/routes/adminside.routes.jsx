import { lazy } from "react"
import DefaultLayout from "../Layout/AdminSide/AdminLayout"

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
]

export default { routes: adminsideRouter }
