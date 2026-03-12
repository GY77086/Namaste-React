import RestaurantCard from "./RestaurantCard.js";  
import { useState, useEffect } from "react";
import CardShimmer from "./CardShimmer.js";




// not using keys (not acceptable) <<<<< using index as key <<<<<<<<< using unique id (best practice)
const Body = () =>
{
    // Local state variable - Super powerful variable (super variable)
    const [restaurantList, setRestaurantList] = useState ([]); // useState is a hook that returns an array with two elements - the current state value and a function to update the state value (Destuuctring on the fly)
    
    // OR

    // const arr = useState (restList);
    // const [restaurantList, setRestaurantList] = arr; // array destructuring (destructuring assignment) - we are extracting the values from the array and assigning them to individual variables
    
    // OR
    // const arr = useState (restList);
    // const restaurantList = arr [0]; // restaturantList is the first element of the array (the current state value)
    // const setRestaurantList = arr [1]; // setRestaurantList is the second element of the array (the function to update the state value)


    useEffect (() => 
    {
        fetchData ();
    } , []); // useEffect is a hook that allows us to perform side effects in our component (like fetching data from an API, subscribing to a service, etc.) - it takes two arguments - a function that contains the side effect and an array of dependencies (if the array is empty, the side effect will only run once when the component mounts)


    const fetchData = async () =>
    {
        // const data = await fetch ("https://www.swiggy.com/dapi/misc/launch");
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4750346&lng=80.3532749&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        const restaurants = jsonData?.data?.cards?.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.find((res) => res !== undefined); // optional chaining (?.) - it allows us to access the properties of an object without having to check if the object is null or undefined (it returns undefined if the object is null or undefined)
        setRestaurantList (restaurants);
    }
    // Conditional rendering - if restaurantList is empty, show the shimmer effect (loading state) - otherwise, show the restaurant cards
    // if (restaurantList.length === 0)
    // {
    //     return <Shimmer />;
    // }

    // OR ADDING SHIMMER EFFECT IN THE RETURN STATEMENT USING TERNARY OPERATOR 
    return restaurantList.length === 0 ? <CardShimmer /> : 
    (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" onClick=
                {
                    () => 
                    {
                        //  Whenever our state variable changes, react re-render the component or  triggers a reconciliation cycle (react compares the new virtual dom with the old virtual dom and updates the real dom accordingly)
                        const filteredList = restaurantList.filter ((rest) => rest.info.avgRating >= 4.5);                                                  
                        setRestaurantList (filteredList);
                        console.log(filteredList);
                    }
                }>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {
                    restaurantList.map((rest) => (<RestaurantCard key={rest.info.id} restData={rest.info} />))
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