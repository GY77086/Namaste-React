import RestaurantCard from "./RestaurantCard.js";  
// import { restList } from "../utils/mockData.js";
// not using keys (not acceptable) <<<<< using index as key <<<<<<<<< using unique id (best practice)
const Body = () =>
{
    let restList = [
{
info:{
id:"334475",
name:"KFC",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Burgers","Biryani","American","Snacks","Fast Food"],
avgRating:4.2,
costForTwo:"₹400 for two",
sla:{deliveryTime:36}
}
},

{
info:{
id:"10575",
name:"Pizza Hut",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Pizzas"],
avgRating:4.1,
costForTwo:"₹350 for two",
sla:{deliveryTime:28}
}
},

{
info:{
id:"56782",
name:"Burger King",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Burgers","American"],
avgRating:4.3,
costForTwo:"₹350 for two",
sla:{deliveryTime:25}
}
},

{
info:{
id:"89876",
name:"Domino's Pizza",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Pizza","Italian","Pastas"],
avgRating:4.4,
costForTwo:"₹400 for two",
sla:{deliveryTime:30}
}
},

{
info:{
id:"90876",
name:"McDonald's",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Burgers","Beverages","Cafe"],
avgRating:4.1,
costForTwo:"₹300 for two",
sla:{deliveryTime:22}
}
},

{
info:{
id:"11223",
name:"Biryani Blues",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Biryani","Hyderabadi","Kebabs"],
avgRating:4.3,
costForTwo:"₹450 for two",
sla:{deliveryTime:32}
}
},

{
info:{
id:"44567",
name:"Subway",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Salads","Snacks","Desserts","Beverages"],
avgRating:4.0,
costForTwo:"₹350 for two",
sla:{deliveryTime:24}
}
},

{
info:{
id:"77889",
name:"Behrouz Biryani",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Biryani","Mughlai","Lucknowi"],
avgRating:4.5,
costForTwo:"₹500 for two",
sla:{deliveryTime:35}
}
},

{
info:{
id:"99881",
name:"Faasos",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Wraps","Rolls","Fast Food"],
avgRating:4.2,
costForTwo:"₹300 for two",
sla:{deliveryTime:26}
}
},

{
info:{
id:"77665",
name:"The Belgian Waffle Co.",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Waffle","Desserts","Ice Cream"],
avgRating:4.6,
costForTwo:"₹250 for two",
sla:{deliveryTime:20}
}
},

{
info:{
id:"55678",
name:"Wow! Momo",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Momos","Chinese","Tibetan"],
avgRating:4.1,
costForTwo:"₹300 for two",
sla:{deliveryTime:23}
}
},

{
info:{
id:"88765",
name:"Natural Ice Cream",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["Ice Cream","Desserts"],
avgRating:4.7,
costForTwo:"₹200 for two",
sla:{deliveryTime:18}
}
},

{
info:{
id:"33221",
name:"Barbeque Nation",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["BBQ","North Indian","Kebabs"],
avgRating:4.5,
costForTwo:"₹800 for two",
sla:{deliveryTime:40}
}
},

{
info:{
id:"55443",
name:"Haldiram's",
cloudinaryImageId:"dimg_oP6rabnKNOL5seMPrbaDkQk_213",
cuisines:["North Indian","Sweets","Snacks"],
avgRating:4.4,
costForTwo:"₹300 for two",
sla:{deliveryTime:21}
}
},

{
info:{
id:"90909",
name:"La Pino'z Pizza",
cloudinaryImageId:"dimg_4AGsaamiGYnw4-EP88OZyQY_279",
cuisines:["Pizza","Italian"],
avgRating:4.2,
costForTwo:"₹400 for two",
sla:{deliveryTime:27}
}
}
];


    return (
            <div className="body">
                <div className="filter"> 
                    <button className="filter-btn" onClick={() => {
                        restList = restList.filter (
                            (rest) => rest.info.avgRating > 4.2);
                            console.log(restList);
                            }}>Top Rated Restaurants</button>
                </div>
                <div className="restaurant-container">
                    {
                        restList.map((restaurant) => (
                                                        <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                                                    ))
                    }
                </div>
            </div>
            );
};
export default Body;


{/* <RestaurantCard restaurantname="Meghana Food" cuisine="Shahi Paneer, South Indian" />
                    <RestaurantCard restaurantname="Biryani Blues" cuisine="Biryani, North Indian" />
                    <RestaurantCard restaurantname="Domino's Pizza" cuisine="Pizza, Italian" />
                    <RestaurantCard restaurantname="KFC" cuisine="Finger, Fast Food" />
                    <RestaurantCard restaurantname="Pizza Hut" cuisine="Pizza, Italian" />
                    <RestaurantCard restaurantname="Subway" cuisine="Sandwiches" />
                    <RestaurantCard restaurantname="Meghana Food" cuisine="Shahi Paneer, South Indian"/>
                    <RestaurantCard restaurantname="Biryani Blues" cuisine="Biryani, North Indian" />
                    <RestaurantCard restaurantname="Domino's Pizza" cuisine="Pizza, Italian" />
                    <RestaurantCard restaurantname="KFC" cuisine="Finger, Fast Food" />
                    <RestaurantCard restaurantname="Pizza Hut" cuisine="Pizza, Italian" />
                    <RestaurantCard restaurantname="Subway" cuisine="Sandwiches" />
                    <RestaurantCard restaurantname="Meghana Food"  cuisine="Shahi Paneer, South Indian" />
                    <RestaurantCard restaurantname="KFC" cuisine="Finger, Fast Food" /> */}