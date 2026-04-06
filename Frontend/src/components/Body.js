import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard.js";  
import { useState, useEffect } from "react";
import CardShimmer from "./CardShimmer.js";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

// not using keys (not acceptable) <<<<< using index as key <<<<<<<<< using unique id (best practice)
const Body = () =>
{
    // Local state variable - Super powerful variable (super variable)
    const [restaurantList, setRestaurantList] = useState ([]); // useState is a hook that returns an array with two elements - the current state value and a function to update the state value (Destuuctring on the fly)
    const [filteredRestaurantList, setFilteredRestaurantList] = useState ([]); 
    const [searchText, setSearchText] = useState ("");
    const PromotedRestaurants = WithPromotedLabel(RestaurantCard); // Higher order component (HOC) - it is a function that takes a component as an argument and returns a new component (it is used to add additional functionality to a component without modifying the original component)
    console.log ("Body rendered");
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
        // const data = await fetch ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4750346&lng=80.3532749&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");        
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4750346&lng=80.3532749&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        console.log(jsonData);
        const restaurants = jsonData?.data?.cards?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.find((res) => {if(res != undefined){return res;}}); // optional chaining (?.) - it allows us to access the properties of an object without having to check if the object is null or undefined (it returns undefined if the object is null or undefined)
        console.log(restaurants);        
        setRestaurantList (restaurants);
        setFilteredRestaurantList (restaurants);
    }  

    const internetStatus = useOnlineStatus ();
    if (internetStatus === false)
    {
        return <h1>Looks Like You Are Offline !! Please check Your Internet Connection 🙄🙄 </h1>
    }

    // Conditional rendering - if restaurantList is empty, show the shimmer effect (loading state) - otherwise, show the restaurant cards
    // if (restaurantList.length === 0)
    // {
    //     return <CardShimmer />;
    // }

    // OR ADDING SHIMMER EFFECT IN THE RETURN STATEMENT USING TERNARY OPERATOR 
   
    return restaurantList.length === 0 ? <CardShimmer /> : (
        <div className="body">
            <div className="filter flex mb-2"> 
                <div className="search-box">
                    <input className="serch-input  shadow-lg rounded-md h-9 p-1 ml-2 border border-solid border-[rgb(164,181,237)]" id="text-input" type="text" placeholder="Search for restaurants..." value={searchText} onChange=
                    {
                        (e) =>
                        {
                            setSearchText (e.target.value);
                        }
                    }/>
                </div>

                {/* filtering the restaurant list based on the search query (case insensitive) */}   
                <div className="search-button bg-[rgb(164,181,237)] hover:bg-[rgb(100,156,230)] shadow-lg border border-solid rounded-md h-9 p-1 mr-5 ">
                    <button onClick=
                    {
                        () =>
                        {
                            console.log(searchText);
                            const filteredRestaurant = restaurantList.filter ((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase())); // includes is a method that checks if a string contains a substring (it returns true if the string contains the substring, otherwise it returns false)
                            setFilteredRestaurantList (filteredRestaurant);   
                        }
                    }>
                        Search
                    </button>
                </div>

                <div className="filter-button  hover:bg-[rgb(100,156,230)] shadow-lg border border-solid rounded-2xl h-9 p-1 bg-[rgb(164,181,237)]">
                    <button onClick=
                    {
                        () =>
                        {
                            //  Whenever our state variable changes, react re-render the component or  triggers a reconciliation cycle (react compares the new virtual dom with the old virtual dom and updates the real dom accordingly)
                            const filteredList = restaurantList.filter ((rest) => rest.info.avgRating >= 4.5);                                                
                            setFilteredRestaurantList (filteredList);
                            console.log(filteredList);
                        }
                    }>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="restaurant-container flex flex-wrap">
                {
                    filteredRestaurantList.map((restaurants) => (<Link key={restaurants.info.id} to={"/restaurant/" + restaurants.info.id}> {restaurants.info.isOpen? <PromotedRestaurants restData={restaurants.info} /> : <RestaurantCard restData={restaurants.info} />} </Link>))
                }
            </div>
        </div>
    );
};
export default Body;




// Another way to pass props to the restaurant card component
// {/* <RestaurantCard restaurantname="Meghana Food" cuisine="Shahi Paneer, South Indian" />
//                     <RestaurantCard restaurantname="Biryani Blues" cuisine="Biryani, North Indian" />
//                     <RestaurantCard restaurantname="Domino's Pizza" cuisine="Pizza, Italian" />
//                     <RestaurantCard restaurantname="KFC" cuisine="Finger, Fast Food" />
//                     <RestaurantCard restaurantname="Pizza Hut" cuisine="Pizza, Italian" />
//                     <RestaurantCard restaurantname="Subway" cuisine="Sandwiches" />
//                     <RestaurantCard restaurantname="Meghana Food" cuisine="Shahi Paneer, South Indian"/>
//                     <RestaurantCard restaurantname="Biryani Blues" cuisine="Biryani, North Indian" />
//                     <RestaurantCard restaurantname="Domino's Pizza" cuisine="Pizza, Italian" />
//                     <RestaurantCard restaurantname="KFC" cuisine="Finger, Fast Food" />
//                     <RestaurantCard restaurantname="Pizza Hut" cuisine="Pizza, Italian" />
//                     <RestaurantCard restaurantname="Subway" cuisine="Sandwiches" />
//                     <RestaurantCard restaurantname="Meghana Food"  cuisine="Shahi Paneer, South Indian" />
//                     <RestaurantCard restaurantname="KFC" cuisine="Finger, Fast Food" /> */}
