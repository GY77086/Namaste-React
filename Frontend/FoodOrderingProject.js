import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import AboutUs from "./src/components/AboutUs.js";
import ContactUs from "./src/components/ContactUs.js";
import Error from "./src/components/Error.js";
import RestaurantsMenu from "./src/components/RestaurantsMenu.js";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";





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
                        path : "/restaurant/:id",
                        element : <RestaurantsMenu/>
                    }
                ],
            errorElement : <Error />
        }
        
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);