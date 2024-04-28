import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoutes";
import Pdf from "../Pages/Pdf/Pdf";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import ServerCopy from "../Pages/ServerCopy/ServerCopy";
import Recharge from "../Pages/Recharge/Recharge";
import NidOrder from "../Pages/NidOrder/NidOrder";
import AllOrder from "../Pages/AllOrder/AllOrder";
import MyOrder from "../Pages/MyOrder/MyOrder";
import AllRecharge from "../Pages/AllRecharge/AllRecharge";
import MyRecharge from "../Pages/MyRecharge/MyRecharge";
import UpdatePassword from "../Pages/UpdatePassword/UpdatePassword";
import MyProfile from "../Pages/MyProfile/MyProfile";
import NoticeForm from "../Pages/NoticeForm/NoticeForm";
import AdminRoutes from "./AdminRoutes";
import AllUser from "../Pages/AllUser/AllUser";
import BalanceForm from "../Pages/BalanceForm/BalanceForm";
import Roshid from "../Pages/Roshid/Roshid";
import BirthRegistrationForm from "../Pages/BirthRegistrationForm/BirthRegistrationForm";
import Tin from "../Pages/Tin/Tin";
import Bio from "../Pages/Bio/Bio";
import SignCopy from "../Pages/SignCopy/SignCopy";
import PhoneNumberForm from "../Pages/PhoneNumberForm/PhoneNumberForm";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><Main/></PrivateRoute>,
      children: [
        {
          path: "/",
          element:<Home/>  , 
        },
        
        {
          path: "/pdf",
          element:<Pdf/> ,
        },
        {
          path: "/home",
          element:<Home/>,
        },
        {
          path: "/server-copy",
          element:<ServerCopy/>,
        },
        
        {
          path: "/recharge",
          element:<Recharge/>,
        },
        {
          path: "/nid-order",
          element:<NidOrder/>, 
        },
        {
          path: "/all-order",
          element:<AdminRoutes><AllOrder/></AdminRoutes>,
        },
        {
          path: "/my-order",
          element:<MyOrder/> , 
        },
        {
          path: "/all-recharge",
          element:<AdminRoutes><AllRecharge/></AdminRoutes> , 
        },
        {
          path: "/my-recharge",
          element:<MyRecharge/> , 
        },
        {
          path: "/update-password",
          element:<UpdatePassword/> , 
        },
        {
          path: "/profile",
          element:<MyProfile/> , 
        },
        {
          path: "/notice",
          element:<AdminRoutes><NoticeForm/></AdminRoutes> , 
        },
        {
          path: "/all-user",
          element:<AdminRoutes><AllUser/></AdminRoutes> , 
        },
        {
          path: "/update-balance",
          element:<AdminRoutes><BalanceForm/>  </AdminRoutes> , 
        },
        {
          path: "/update-phone",
          element:<AdminRoutes><PhoneNumberForm/>  </AdminRoutes> , 
        },
        {
          path: "/roshid",
          element:<Roshid/> , 
        },
        {
          path: "/birthday-registration",
          element:<BirthRegistrationForm/> , 
        },
        {
          path: "/tin",
          element:<Tin/> , 
        },
        {
          path: "/bio",
          element:<Bio/> , 
        },
        {
          path: "/signup",
          element:<Signup/>,
        },
        {
          path: "/sign-copy",
          element:<SignCopy/>, 
        },
        
      ],
    },
    {
      path: "/login",
      element:<Login/>,
    },
    

    
  ]);
  