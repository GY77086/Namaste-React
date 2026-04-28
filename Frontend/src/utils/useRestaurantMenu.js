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
        // const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4750346&lng=80.3532749&restaurantId=126281&catalog_qa=undefined&submitAction=ENTER");
        // const jsonData = await data.json ();
        // setResInfo(jsonData);
        setResInfo(menuData);
    }
    return resInfo;
}

export default useRestaurantMenu;

