import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import Blog from "../components/Blog/Blog";
import LogIn from "../components/LogIn/LogIn";
import Registration from "../components/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/Errorpage/Errorpage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/data/:id',
            element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://chef-reciepe-project-server-tonmoy-org.vercel.app/data/${params.id}`)
          },
          {
            path: 'blog',
            element: <Blog></Blog>
          },
          {
            path: 'login',
            element: <LogIn></LogIn>
          },
          {
            path: 'register',
            element: <Registration></Registration>
          },
          {
            path: 'contact',
            element: <Contact></Contact>
          }
     ]
    },
  ]);
  export default router;