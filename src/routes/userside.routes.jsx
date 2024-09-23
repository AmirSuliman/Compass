import { lazy } from "react"
import DefaultLayout from "../Layout/defaultlayout"
const Inbox = lazy(() => import("../Pages/Userside/Inbox/Inbox"))
const Login = lazy(() => import("../Pages/Userside/login"))
const Signup = lazy(() => import("../Pages/Userside/signup"))
const Forgotpassword = lazy(() => import("../Pages/Userside/forgotpsaaword"))
const Resetpassword = lazy(() => import("../Pages/Userside/resetpassword"))
const DescribeQuestion = lazy(() =>
  import("../Pages/Userside/questions/describebest")
)
const BusinessQuestion = lazy(() =>
  import("../Pages/Userside/questions/business")
)
const NoofpeopleQuestion = lazy(() =>
  import("../Pages/Userside/questions/noofpeople")
)
const RoleQuestion = lazy(() => import("../Pages/Userside/questions/role"))
const Connecttools = lazy(() => import("../Pages/Userside/connecttools"))
const Savedcontent = lazy(() =>
  import("../Pages/Userside/dashboard/savedcontent")
)
const Sizeofcompany = lazy(() =>
  import("../Pages/Userside/questions/sizeofcompany")
)
const Youtubedetails = lazy(() =>
  import("../Pages/Userside/youtubedetails/youtubedetails")
)

const usersideRouter = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <Forgotpassword />,
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
  },
  {
    path: "/question",
    element: <DescribeQuestion />,
  },
  {
    path: "/Busniess",
    element: <BusinessQuestion />,
  },
  {
    path: "/people",
    element: <NoofpeopleQuestion />,
  },
  {
    path: "/role",
    element: <RoleQuestion />,
  },
  {
    path: "/companysize",
    element: <Sizeofcompany />,
  },
  {
    path: "/connect-tools",
    element: <Connecttools />,
  },
  {
    path: "/saved-content",
    element: <Savedcontent />,
  },
  {
    path: "/youtube-connection-details",
    element: (
      <DefaultLayout>
        <Youtubedetails />
      </DefaultLayout>
    ),
  },
  {
    path: "/user/inbox",
    element: (
      <DefaultLayout>
        <Inbox />
      </DefaultLayout>
    ),
  },
]

export default { routes: usersideRouter }
