
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../components/home/Main";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import AdminHome from "../components/Admin/AdminHome";
import CreateWriter from "../components/Admin/CreateWriter";
import CreateAuthor from "../components/Admin/CreateAuthor";
import CreateAPost from "../components/Admin/CreateAPost";
import ShowWriter from "../components/pages/ShowWriter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/showWriter',
        element: <ShowWriter></ShowWriter>
      }

    ]
  },

  {
    path: "/register",
    element: <Register></Register>
  },

  {
    path: "/login",
    element: <Login></Login>
  },

  {
    path: "/admin",
    element: <AdminHome></AdminHome>,

  },

  {
    path: "/createwriter",
    element: <CreateWriter></CreateWriter>
  },

  {
    path: "/createauthor",
    element: <CreateAuthor></CreateAuthor>
  },

  {
    path: "/createapost",
    element: <CreateAPost></CreateAPost>
  }

]);

export default router;