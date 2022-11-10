import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Signup from "../Signup/Signup";
import Privateroute from "./Privateroute/Privateroute";
import Checkout from "../Pages/Checkout/Checkout";
import Review from "../Layout/Review/Review";
import Reviewdetail from "../Pages/Reviewdetail/Reviewdetail";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddServices from "../Pages/AddServices/AddServices";

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
                loader: ({ params }) => fetch(`https://sunshine-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviewdetails',
                element: <Reviewdetail></Reviewdetail>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservices',
                element: <Privateroute><AddServices></AddServices></Privateroute>
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