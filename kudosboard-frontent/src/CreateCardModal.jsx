import React from "react";
import ReactDOM from "react-dom";
import './CreateCardModal.css'
import { useState } from 'react';

function CreateCardModal({isCardCreatorOpen, setIsCardCreatorOpen}) {
    function handleCloseButton() {
        setIsCardCreatorOpen(false);
    }
    if (!isCardCreatorOpen) {
        return null
    }
    return (
        <form action="/action_page.php">  
        <div className="createcardmodal" id="createmodal"> Create a New Board
            <div>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" className="title" />
            </div>
            
        <div>
        <label for="category">Category</label>
        <select id="category" name="category" className="category">
            <option value="volvo">Lifestyle</option>
            <option value="saab">Vacation</option>
            <option value="mercedes">Nightlife</option>
            <option value="audi">Nauture</option>
        </select>
        </div>

        <div>
            <label for="author">Author</label>
            <input type="text" id="author" name="author" className="author"></input>
        </div>
      <button onClick={handleCloseButton}></button>
     </div>
     <input type="submit" value="Submit"/>
     </form>
    );
}
export default CreateCardModal;

