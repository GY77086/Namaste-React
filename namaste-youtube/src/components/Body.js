import React from 'react';
import Sidebar from './Sidebar.js';
import MainContainer from './MainContainer.js';

const Body = () => 
{
    return (
        <div className="flex">
            <Sidebar />
            <MainContainer />
        </div>
    );
}

export default Body;
