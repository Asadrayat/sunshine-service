import { createBrowserRouter, useLoaderData } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Booking from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Signup from "../Signup/Signup";
import Privateroute from "./Privateroute/Privateroute";
import ServiceDetails from "../Pages/Checkout/Checkout";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import Review from "../Layout/Review/Review";

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
                path: '/services/:id',
                element: <Checkout></Checkout>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <Privateroute><Bookings></Bookings></Privateroute>
            },
            {
                path: '/reviews',
                element: <Privateroute><Review></Review></Privateroute>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
]);
export default router;