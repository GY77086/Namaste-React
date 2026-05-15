import ItemList from "./ItemList.js";
import {useState} from "react";

const RestaurantCategory = ({data, showItems, setShowIndex, index , local}) => 
{
    // console.log (data);

    // const [showItems, setShowItems] = useState (false);

    const handleClick = () =>
    {
        if(showItems)
        {
            setShowIndex(null);
        }
        else
        {
            setShowIndex(index);
        }
    }

    return (
        <div>
            {/* Accordian header */}
            <div 
                className = "accordian w-[90%] bg-gray-50 shadow-lg p-4 mx-auto my-4 "
            >
                <div 
                    className = "acordian-header flex justify-between cursor-pointer"
                    onClick = {handleClick}
                >
                    <span 
                        className = "font-bold"
                    >
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        {
                            showItems == true
                            ? 
                            <img 
                                width="30" 
                                height="30" 
                                src="https://img.icons8.com/ios/50/circled-chevron-up.png"
                                alt="circled-chevron-down"
                            />
                            : 
                            <img 
                                width="30"
                                height="30" 
                                src="https://img.icons8.com/ios/50/circled-chevron-down.png" 
                                alt="circled-chevron-up"
                            />
                        }
                    </span>
                </div>
                {
                    showItems && <ItemList items = {data.itemCards} localData = {local}/>
                }
            </div>
            {/* Accordian body */}
        </div>
    )
}

export default RestaurantCategory;



