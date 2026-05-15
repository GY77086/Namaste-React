import CardShimmer from "./CardShimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import RestaurantCategory from "./RestaurantCategory.js";
import {useState} from "react";

const RestaurantsMenu = () =>
{
    
    const {restId} = useParams ();
    // console.log (restId);
    const dummy = "dummy data";

    const restInfo = useRestaurantMenu ();

    const internetStatus = useOnlineStatus ();

    const [showIndex, setShowIndex] = useState (null);


    if (internetStatus === false)
    {
        return <h1> Looks Like You Are Offline !! Please check Your Internet Connection 🙄🙄 </h1>
    }

    if (restInfo === null)
    {
        return <CardShimmer/>;
    }

    
    const restaurantInfo = restInfo?.data?.cards[2]?.card?.card?.info;
    
    const
    {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
    } = restaurantInfo || {};

    const itemCards = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards || {};
    // console.log (restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter ((categ) => categ.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log (categories);


    return (
        <div 
            className = "menu  text-center "
        >
            <h1 
                className = "name font-bold text-3xl text-[rgb(139,1,1)] my-2"
            >
                {name}
            </h1>
            <p 
                className = "cuisines font-bold text-xl"
            >
                {cuisines?.join(",")} - {costForTwoMessage}
            </p> 
            {/* Categories accordian */}
            {categories.map ((categ, index) => 
                // controlled component - showItems is being controlled by parent component (RestaurantsMenu)
                <RestaurantCategory 
                    data = {categ?.card?.card} 
                    key = {categ?.card?.card?.title}
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {setShowIndex} // changing the state variable in parent component (RestaurantsMenu) from child component (RestaurantCategory) indirectly .
                    index = {index}
                    local = {dummy}
                />
            )}
        </div>
    );
}

export default RestaurantsMenu;



