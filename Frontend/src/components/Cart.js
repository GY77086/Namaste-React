import { useSelector } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const Cart  = () =>
{

    const cartItems = useSelector((state) => state.cart.items);
    console.log (cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () =>
    {
        // Dispatch an action to clear the cart
        dispatch (clearCart ());
    }

    return (
        <div
            className = "Cart text-center m-4 p-4"
        >
            < h1 
                className = "text-2xl font-bold"
            >
                Cart
            </h1>
            <div
                className = "cart-items-container m-4 p-4"
            >
                <button
                    className = "clear-cart-button bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 shadow-lg mb-4"
                    onClick = {handleClearCart}
                >
                    Clear Cart
                </button>
                {
                    cartItems.length === 0 ? <h2 className="text-xl font-semibold">Your cart is empty. Add items to your cart </h2> : <ItemList items = {cartItems} />
                }
            </div>
        </div>
    );
}

export default Cart;