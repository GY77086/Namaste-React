import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../utils/appSlice.js';

const Head = () => 
{
    const dispatch = useDispatch();
    const toggleMenuHandler = () =>
    {
        dispatch(toggleMenu());
    }
    return (
        <div className = "grid grid-flow-col h-full p-2 m-2 shadow-lg">
            <div className = "flex col-span-1"> 
                <img 
                    className = "hamburger-logo cursor-pointer p-0.5 my-1 h-7 w-6 mr-3 hover:bg-gray-300 rounded-full"
                    src = "https://cdn-icons-png.flaticon.com/512/8182/8182885.png" 
                    alt = "hamburger-logo" 
                    onClick = {() => toggleMenuHandler ()}
                />
                <a href = "/">
                    <img 
                        className = "youtube-logo h-[22px] w-[96px] ml-3 mr-40 my-1.5" 
                        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
                        alt = "youtube-logo"    
                    />
                </a>
            </div>
            <div className = "col-span-10 flex">
                <input 
                    className = "search-bar w-1/2 border border-gray-300 p-2 rounded-l-full h-[39px]"
                    type = "text" 
                    placeholder = "Search ....." 
                />
                <button className = "search-btn px-4 border border-gray-300 border-l-0 rounded-r-full bg-gray-300 flex items-center h-[39px] w-[62px]">
                    <svg 
                        xmlns = "http://www.w3.org/2000/svg"
                        fill = "none"
                        viewBox = "0 0 24 24"
                        stroke = "currentColor"
                        className = "w-7 h-7 text-gray-600">
                        <path 
                            stroke-linecap = "round"
                            stroke-linejoin = "round"
                            stroke-width = "2"
                            d = "M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            <div className = "col-span-1">
                <img
                    className = "user-logo h-7 w-7 my-1 ml-10"
                    src = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt = "user-logo"
                />
            </div>
        </div>
    );
}

export default Head;
