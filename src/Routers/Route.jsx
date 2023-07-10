
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../components/home/Main";
import Register from "../components/register/Register";
import Login from "../components/login/Login";
import AdminHome from "../components/Admin/AdminHome";
import CreateWriter from "../components/Admin/CreateWriter";
import CreateAuthor from "../components/Admin/CreateAuthor";
import CreateAPost from "../components/Admin/CreateAPost";
import ShowWriter from "../components/pages/ShowWriter";
import WriterDetails from "../components/Details/WriterDetails";
import Home from "../components/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/writerDetails",
        element:<WriterDetails></WriterDetails>
      },
     

      {
        path: "/WriterDetails/:id",
        element: <WriterDetails></WriterDetails>,
        //  loader:({params})=>fetch(`http://localhost:5000/writer/${params.id}`)
      },

    ]

    
  },

  {
    path: '/showWriter',
    element: <ShowWriter></ShowWriter>
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