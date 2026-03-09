import RestaurantCard from "./RestaurantCard.js";  
import { useState } from "react";
import restList from "../utils/mockData.js";

// not using keys (not acceptable) <<<<< using index as key <<<<<<<<< using unique id (best practice)
const Body = () =>
{
    // Local state variable - Super powerful variable (super variable)
    // const [restaurantList, setRestaurantList] = useState (restList); // useState is a hook that returns an array with two elements - the current state value and a function to update the state value (Destuuctring on the fly)
    
    // OR

    // const arr = useState (restList);
    // const [restaurantList, setRestaurantList] = arr; // array destructuring (destructuring assignment) - we are extracting the values from the array and assigning them to individual variables
    
    // OR
    const arr = useState (restList);
    const restaurantList = arr [0]; // restaturantList is the first element of the array (the current state value)
    const setRestaurantList = arr [1]; // setRestaurantList is the second element of the array (the function to update the state value)
    return (
            <div className="body">
                <div className="filter"> 
                    <button 
                    className="filter-btn" onClick={() => 
                    {
                        //  Whenever our state variable changes, react re-render the component or  triggers a reconciliation cycle (react compares the new virtual dom with the old virtual dom and updates the real dom accordingly)
                        const filteredList = restaurantList.filter ((rest) => rest.avgRating > 4.2);                                                  
                        setRestaurantList (filteredList);
                        console.log(restaurantList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="restaurant-container">
                    {
                        restaurantList.map((rest) => (<RestaurantCard key={rest.id} restData={rest} />))
                    }
                </div>
            </div>
            );
};
export default Body;




// Another way to pass props to the restaurant card component
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