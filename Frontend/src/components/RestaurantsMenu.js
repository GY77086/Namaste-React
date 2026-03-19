import {useState, useEffect} from "react";
import CardShimmer from "./CardShimmer";

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
        const menuData = await fetch("https://corsproxy.io/?https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const jsonData = await menuData.json();
        setRestInfo(jsonData?.meals);
        // setRestInfo(jsonData?.data);
    }


    if (restInfo === null)
    {
        return <CardShimmer/>;
    }
    
    return  (
        <div className="menu">
            {
                restInfo.map ((item) =>
                {
                    return (
                        <div className="menu-card" key={item.idMeal}>
                            <img className="menu-img" src={item.strMealThumb} alt={item.strMeal}/>
                            <h3> {item.strMeal} </h3>
                            <p><b> Category: </b> {item.strCategory} </p>
                            <p><b> Cuisine: </b> {item.strArea} </p>
                            <p className="menu-desc"> {item.strInstructions.slice(0, 80)}... </p>
                            <button className="menu-btn">
                                View Recipe
                            </button>
                        </div>
                    );
                })
            }
            
        </div>
    );
}

export default RestaurantsMenu;




