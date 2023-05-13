import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Booking/Booking";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
   {
     path: "/",
     element: <Main />,
     children: [
      {
        path: "/",
        element: <Home />,
      },
      {
         path:"login" ,
         element:<Login/>
      },
      {
         path:"signup" ,
         element:<SignUp/>
      },
      {
        path:"services/:id" ,
        element:<CheckOut/> ,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:"checkOuts" ,
        element:<PrivateRouter><Booking/></PrivateRouter>
      }
    ],
   },
 ]);
  
 export default router