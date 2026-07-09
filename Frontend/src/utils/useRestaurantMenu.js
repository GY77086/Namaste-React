// import { useState, useEffect } from "react";
// import menuData from "./menuData.json";
// const useRestaurantMenu = () => 
// {
//     const [resInfo , setResInfo] = useState (null);

//     useEffect (() =>
//     {
//         fetchData ();
//     }, []);
//     const fetchData = async () =>
//     {
//         // const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4783732&lng=80.3542791&restaurantId=608598&catalog_qa=undefined&submitAction=ENTER");
//         // const jsonData = await data.json ();
//         // setResInfo(jsonData);
//         setResInfo(menuData);
//     }
//     return resInfo;
// }

// export default useRestaurantMenu;






import { useState, useEffect } from "react";
import menuData from "./menuData.json"; 

const useRestaurantMenu = (restId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        if (!restId) return;
        fetchData();
    }, [restId]); 

    const fetchData = async () => {
        try {
            const data = await fetch(
                `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4783732&lng=80.3542791&restaurantId=${restId}`
            );
            
            if (!data.ok) throw new Error("API call failed");
            
            const jsonData = await data.json();
            setResInfo(jsonData);
        } catch (error) {
            console.warn("Switching layout data pipeline to local backup menuData.json:", error.message);
            setResInfo(menuData);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;