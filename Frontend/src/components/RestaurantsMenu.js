import CardShimmer from "./CardShimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const RestaurantsMenu = () =>
{
    
    const {restId} = useParams ();
    console.log (restId);

    const restInfo = useRestaurantMenu ();

    const internetStatus = useOnlineStatus ();
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

    const itemCards = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || {};
    console.log (itemCards);

    return (
        <div className="menu">
            <div className="card-img">
                <img className="menu-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/94149176-2053-43b4-b291-2864557cfac5_862473.JPG" alt={name}/> 
            </div>
            <div className="menu-details">
                <h2>{name}</h2>
                <h5>
                    {cuisines?.join(",")} - {costForTwoMessage} 
                </h5>
                <h5> {"Rating - "} {avgRating} ⭐</h5>
                <ul>
                    {itemCards.map (item => <li key = {item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantsMenu;


