import CardShimmer from "./CardShimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantsMenu = () => {
    const { restId } = useParams();
    const dummy = "dummy data";

    const restInfo = useRestaurantMenu(restId);
    const internetStatus = useOnlineStatus();
    
    const [showIndex, setShowIndex] = useState(null);

    if (internetStatus === false) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[75vh] bg-[#211c11] text-center px-4">
                <div className="bg-[#1e1910] border border-amber-900/40 p-8 rounded-2xl shadow-2xl max-w-sm">
                    <span className="text-5xl mb-3 block">📡</span>
                    <h1 className="text-xl font-bold text-amber-200 font-serif">Offline Grid State</h1>
                    <p className="text-xs text-slate-500 mt-2 font-mono">Verify active local routing parameters.</p>
                </div>
            </div>
        );
    }

    if (restInfo === null) {
        return <CardShimmer />;
    }

    // Deep object check for safe restaurant info fetching
    const restaurantInfo = restInfo?.data?.cards?.find(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info || restInfo?.data?.cards[2]?.card?.card?.info;
    
    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        areaName
    } = restaurantInfo || {};

    // Filtering regular item cards matrix cleanly
    const regularCards = restInfo?.data?.cards?.find(
        (c) => c?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const categories = regularCards?.filter(
        (categ) => categ.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    return (
        <div className="menu bg-[#211c11] min-h-screen text-amber-50/90 pt-28 pb-16 antialiased selection:bg-amber-900/40">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                
                {/* Fancy Restaurant Header Card */}
                <div className="bg-[#2a2216]/90 border border-amber-900/20 p-6 rounded-3xl shadow-2xl mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-500 to-amber-600"></div>
                    
                    <div className="space-y-1">
                        <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-wide text-white group-hover:text-amber-400 transition-colors duration-300">
                            {name}
                        </h1>
                        <p className="text-xs sm:text-sm font-medium text-slate-400 font-mono">
                            {cuisines?.join(", ")}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-500/80 pt-1 font-mono">
                            <span>📍 {areaName || "Premium Zone"}</span>
                            <span>•</span>
                            <span className="text-amber-400 font-bold">{costForTwoMessage || "₹300 for two"}</span>
                        </div>
                    </div>

                    {/* Score Rating Panel */}
                    <div className="flex sm:flex-col items-center gap-1.5 bg-[#1e1910] border border-amber-900/30 p-2 px-3 rounded-xl shrink-0 text-center shadow-md">
                        <div className="flex items-center gap-1 text-emerald-400 font-black font-mono text-sm sm:border-b sm:border-amber-900/10 sm:pb-1 w-full justify-center">
                            <span>★</span>
                            <span>{avgRating || "4.2"}</span>
                        </div>
                        <span className="text-[9px] font-mono tracking-wider uppercase text-slate-500 font-bold block whitespace-nowrap">
                            {totalRatingsString || "1K+ Ratings"}
                        </span>
                    </div>
                </div>

                <div className="border-b border-amber-900/15 mb-8"></div>

                {/* Accordion Categories List Wrapper */}
                <div className="space-y-4">
                    {categories.map((categ, index) => (
                        <div 
                            key={categ?.card?.card?.title || index}
                            className="bg-[#1e1910]/80 border border-amber-900/20 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:border-amber-500/15"
                        >
                            <RestaurantCategory 
                                data={categ?.card?.card} 
                                showItems={index === showIndex}
                                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                                index={index}
                                local={dummy}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default RestaurantsMenu;