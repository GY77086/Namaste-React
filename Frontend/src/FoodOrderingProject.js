import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import RestaurantsMenu from "./components/RestaurantsMenu.js";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading 
// On demand loading
// Dynamic import

const Grocery = lazy (() =>import ("./components/Grocery.js"));

const  AppLayout = () =>
{
    return (
            <div className="app-layout">
                <Header />
                {/* if path = "/"  then load Body in the Outlet */}
                {/* if path = "/AboutUs" then load AboutUs in the Outlet */}
                {/* if path = "/ContactUs" then load ContactUs in the Outlet  and so on */}
                <Outlet />
            </div>
    );
}


const appRouter = createBrowserRouter
(   
    [
        {
            path : "/",
            element : <AppLayout />,
            children :
                [
                    {
                        path : "/",
                        element : <Body />
                    },
                    {
                        path : "/AboutUs",
                        element : <AboutUs />
                    },
                    {
                        path : "/ContactUs",
                        element : <ContactUs />
                    },
                    {
                        path : "/restaurant/:restId",
                        element : <RestaurantsMenu/>
                    },
                    {
                        path: "/Grocery",
                        element: <Suspense fallback = {<h1> Loading ........</h1>}><Grocery /></Suspense>
                    }
                ],
            errorElement : <Error />
        }
        
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);