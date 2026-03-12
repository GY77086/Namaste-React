import { CDN_URL } from "../utils/constants.js";
const RestaurantCard = ({restData}) =>
{
    // const {restData} = props;
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
                <img className="restaurant-pic" src={CDN_URL +  restData.cloudinaryImageId} alt="restaurant-pic"></img>
                <h3> {name} </h3>
                <h5> {cuisines.join(", ")} </h5>
                <h5> {avgRating} ⭐ </h5>    
                <h5> {costForTwo} </h5>
                <h5> {sla?.deliveryTime} mins </h5>
            </div>
            );
}
export default RestaurantCard;  