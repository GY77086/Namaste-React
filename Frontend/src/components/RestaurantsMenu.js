import {useState, useEffect} from "react";
import CardShimmer from "./CardShimmer";
import menuData from "../utils/menuData.json";

const RestaurantsMenu = () =>
{
    const [restInfo , setRestInfo] = useState (null);
    useEffect (() =>
    {
        fetchMenu ();
    }, []);

    const fetchMenu = async () =>
    {
        // const menuData = await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4750346&lng=80.3532749&restaurantId=359354&catalog_qa=undefined&submitAction=ENTER");
        // const menuData = await fetch("https://corsproxy.io/?https://www.themealdb.com/api/json/v1/1/search.php?s=");
        // const jsonData = await menuData.json();
        // setRestInfo(jsonData?.meals);
        // setRestInfo(jsonData?.data);
        setRestInfo(menuData.data);
    }
        

    if (restInfo === null)
    {
        return <CardShimmer/>;
    }

// const items =
    //     restInfo?.data?.cards
    //         ?.find(card => card?.groupedCard)
    //         ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    //         ?.flatMap(card =>
    //             card?.card?.card?.itemCards || []
    //         )
    //         ?.map(item => item?.card?.info) || [];


    const 
    {
        name,
        cuisines,
        costForTwoMessage
    } = restInfo?.cards[2]?.card?.card?.info || {};

    
    return  (
        <div className="menu">
            {
                // restInfo.map ((item) =>
                // {
                //     return (
                //         <div className="menu-card" key={item.idMeal}>
                //             <img className="menu-img" src={item.strMealThumb} alt={item.strMeal}/>
                //             <h3> {item.strMeal} </h3>
                //             <p><b> Category: </b> {item.strCategory} </p>
                //             <p><b> Cuisine: </b> {item.strArea} </p>
                //             <p className="menu-desc"> {item.strInstructions.slice(0, 80)}... </p>
                //             <button className="menu-btn">
                //                 View Recipe
                //             </button>
                //         </div>
                //     );
                // })

                
            }
            <h1>{name}</h1>
            <p>{cuisines.join (" ")} - {costForTwoMessage}</p>
            
        </div>
    );
}

export default RestaurantsMenu;


