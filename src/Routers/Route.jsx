import { createBrowserRouter } from "react-router-dom";
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
import Search from "../components/search/Search";
import BookLayout from "../Layout/BookLayout";
import Novel from "../route-category/novel/Novel";
import Poem from "../route-category/poem/Poem";
import Story from "../route-category/story/Story";
import Biography from "../route-category/biography/Biography";
import Probondho from "../route-category/probondho/Probondho";
import Travel from "../route-category/travel/Travel";
import Translated from "../route-category/translated/Translated";
import Comics from "../route-category/comics/Comics";
import Romantic from "../route-category/romantic/Romantic";
import Thriler from "../route-category/thriler/Thriler";
import Horror from "../route-category/horor/Horror";
import ScienceFiction from "../route-category/sceinceFiction/ScienceFiction";
import Motivational from "../route-category/motivational/Motivational";
import Classic from "../route-category/classic/Classic";
import BookDetails from "../BookDetails/BookDetails";
import IslamicBook from "../route-category/IslamicBook/IslamicBook";
import EnglishBook from "../route-category/EnglishBook/EnglishBook";
import Comedy from "../route-category/comedy/Comedy";
import PdfViewer from "../BookDetails/PdfViewer";
import Cart from "../BookDetails/Cart";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/writerDetails",
        element: <WriterDetails></WriterDetails>,
      },

      {
        path: "/WriterDetails/:id",
        element: <WriterDetails></WriterDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/writer/${params.id}`),
      },

      {
        path: "/bookDetails",
        element: <BookDetails></BookDetails>,
      },

      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookDetails/${params.id}`),
      },
    ],
  },

  {
    path: "/",
    element: <BookLayout></BookLayout>,
    children: [
      {
        path: "/islamic",
        element: <IslamicBook />,
      },
      {
        path: "/english",
        element: <EnglishBook />,
      },
      {
        path: "/novel",
        element: <Novel></Novel>,
      },
      {
        path: "/story",
        element: <Story></Story>,
      },
      {
        path: "/poem",
        element: <Poem></Poem>,
      },
      {
        path: "/probondho",
        element: <Probondho></Probondho>,
      },
      {
        path: "/biography",
        element: <Biography></Biography>,
      },

      {
        path: "/travel",
        element: <Travel></Travel>,
      },
      {
        path: "/translated",
        element: <Translated></Translated>,
      },
      {
        path: "/comics",
        element: <Comics></Comics>,
      },
      {
        path: "/romantic",
        element: <Romantic></Romantic>,
      },
      {
        path: "/thriler",
        element: <Thriler></Thriler>,
      },
      {
        path: "/horor",
        element: <Horror></Horror>,
      },
      {
        path: "/scienceFiction",
        element: <ScienceFiction></ScienceFiction>,
      },
      {
        path: "/motivational",
        element: <Motivational></Motivational>,
      },
      {
        path: "/comedy",
        element: <Comedy />,
      },
      {
        path: "/classic",
        element: <Classic></Classic>,
      },

      {
        path: "/search",
        element: <Search />,
      },
    ],
  },

  {
    path: "/showWriter",
    element: <ShowWriter></ShowWriter>,
  },

  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/admin",
    element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
  },

  {
    path: "/createwriter",
    element: <AdminRoute><CreateWriter></CreateWriter></AdminRoute>,
  },

  {
    path: "/createauthor",
    element: <AdminRoute><CreateAuthor></CreateAuthor></AdminRoute>,
  },

  {
    path: "/createapost",
    element: <AdminRoute><CreateAPost></CreateAPost></AdminRoute>,
  },

  {
    path: "/pdfviwer",
    element: <PdfViewer></PdfViewer>
  },

  {
    path: "cart",
    element: <PrivateRoute><Cart></Cart></PrivateRoute>
  }


]);

export default router;
