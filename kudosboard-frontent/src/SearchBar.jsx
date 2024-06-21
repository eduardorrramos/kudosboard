import React from "react";
import ReactDOM from "react-dom";
import './SearchBar.css'
import { useState } from 'react';

function SearchBar({setIsCardCreatorOpen, setSelectedKeyword}) {
    function handleCreateButton() {
        setIsCardCreatorOpen(true);
    }
    const handleSearchButton = function (event) {
        setSelectedKeyword(event.target.value);
    }

    return (
        <div className="searchbar"> 
            <input onChange={handleSearchButton} className="actualSearchBar" type="text" placeholder="Search..." />
            {/* <button onClick={handleSearchButton} className="searchButton">Search</button> */}
            <button onClick={handleCreateButton} className="kudosButton">Create a New Board</button>
        </div>
    );
}
export default SearchBar;

