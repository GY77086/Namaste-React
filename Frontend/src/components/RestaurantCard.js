import { CDN_URL } from "../utils/constants.js";
const RestaurantCard = ({restData}) =>
{
    const 
    {
        cloudinaryImageId,
        name,
        avgRating,  
        cuisines,
        costForTwo,
        deliveryTime,
        sla
    } = restData;


    return (
        <div className="restaurant-card" >
            <img className="restaurant-pic" src={CDN_URL +  cloudinaryImageId} alt="restaurant-pic"></img>
            <h4> {name} </h4>
            <h5> {cuisines.join(", ")} </h5>
            <h5> {avgRating} ⭐ </h5>    
            <h5> {costForTwo} </h5>
            <h5> {sla?.deliveryTime} mins.</h5>
        </div>
    );
}
export default RestaurantCard;  