import React from "react";
import ReactDOM from "react-dom";
import './SearchBar.css'

function SearchBar() {
    return (
        <div>   
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    );
}
export default SearchBar;