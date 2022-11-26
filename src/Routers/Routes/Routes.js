import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/products/${params.id}`)
        },
        element: <PrivateRouter><Products></Products></PrivateRouter>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
    children: [
      {
        path: '/dashboard/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/dashboard/myOrders',
        element: <MyOrders></MyOrders>
      },
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])

export default router