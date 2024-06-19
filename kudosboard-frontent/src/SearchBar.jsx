import React from "react";
import ReactDOM from "react-dom";
import './SearchBar.css'
import { useState } from 'react';

function SearchBar({setIsCardCreatorOpen}) {

    function handleCreateButton() {
        setIsCardCreatorOpen(true);
    }

    return (
        <div className="searchbar"> 
            <input className="actualSearchBar" type="text" placeholder="Search..." />
            <button className="searchButton">Search</button>
            <button onClick={handleCreateButton} className="kudosButton">Create a New Board</button>
        </div>
    );
}
export default SearchBar;
