import { useState, useEffect } from "react";
import menuData from "./menuData.json";
const useRestaurantMenu = () => 
{
    const [resInfo , setResInfo] = useState (null);

    useEffect (() =>
    {
        fetchData ();
    }, []);
    const fetchData = async () =>
    {
        setResInfo(menuData);
    }
    return resInfo;
}

export default useRestaurantMenu;
