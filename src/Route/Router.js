import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Signup from "../Signup/Signup";
import Privateroute from "./Privateroute/Privateroute";

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
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/booking',
                element: <Privateroute><Booking></Booking></Privateroute>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
]);
export default router;