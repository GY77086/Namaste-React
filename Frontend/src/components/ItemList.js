import {CDN_URL} from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({items, localData}) =>
{
    const dispatch = useDispatch();
    const handleAddItems = (item) =>
    {
        // Dispatch an action to add the item to the cart
        dispatch (addItem(item));
    }

    // console.log (items);
    console.log (localData);
    return (
        <div>
            {items.map ((item) => 
                <div
                    className = "items text-left p-2 m-2 border-b-2 border-gray-200 flex justify-between" 
                    key = {item.card.info.id}
                >
                    <div className="item-container w-[70%]">
                        <div className = "item-name-price py-2">
                            <span>{item.card.info.name}</span>
                            <span> {" "} - ₹ {" "} {item.card.info.price ? (item.card.info.price / 100) : (item.card.info.defaultPrice / 100)} </span>
                        </div>
                        <p className = "item-description text-xs">{item.card.info.description}</p>
                    </div>
                    <div className = "item-image-container w-[20%]">
                        <div className = "add-button-container absolute">
                            <button 
                                className="add-button bg-green-500 text-white p-1 m-auto rounded-lg hover:bg-green-600 shadow-lg"
                                onClick = {() => handleAddItems (item)}
                            >
                                Add +
                            </button>
                        </div>
                        <img 
                            className = "item-image rounded-lg shadow-lg"
                            src = {CDN_URL + item.card.info.imageId}
                            alt = {item.card.info.name}
                        /> 
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemList;