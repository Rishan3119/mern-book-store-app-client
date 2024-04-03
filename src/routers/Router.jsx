import { createBrowserRouter } from "react-router-dom";
import SingleBook from "../shop/SingleBook";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import App from "../App";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PtivateRoute/PrivateRoute";
import Logout from "../components/Logout";
import CartPage from "../shop/CartPage";
import Payment from "../shop/Payment";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path: '/cart-page',
        element:<CartPage/>
      },
      {
        path:"/process-checkout",
        element:<Payment/>
      },
      {
        path: "/book/:id",
        element: <SingleBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },
  {
    path:'/admin/dashboard',
    element: <DashboardLayout/>,
    children:[
      {
        path: '/admin/dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>
      },
      {
        path: '/admin/dashboard/upload',
        element: <UploadBook/>
      },
      {
        path: '/admin/dashboard/manage',
        element: <ManageBooks/>
      },
      {
        path: '/admin/dashboard/edit-books/:id',
        element: <EditBooks/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },{
    path:'sign-up',
    element: <Signup/>
  },{
    path:'login',
    element: <Login/>
  },{
    path:'logout',
    element:<Logout/>
  }
  
]);

 
export default router;