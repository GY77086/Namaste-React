import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headder.js";
import Body from "./components/Body.js";



const  AppLayout = () =>
{
    return (
            <div className="app-layout">
                <Header />
                <Body />
            </div>
            );
} 



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);