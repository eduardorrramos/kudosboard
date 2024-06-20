import './Card.css'
import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const navigate = useNavigate();
    
    function handleCardClick (event)  {
        console.log(event.target)
        navigate('/chosencard');
        return <div ></div>
    }
    function handleCardClose (event) {
        let closingcard = event.target.closest('.cardtemplate')
        closingcard.remove();
    }
    return (
    <div className="cardtemplate">
        <div className="topOfCard">
        <h3 className="cardtitle"> {props.title} </h3>
        <button onClick={handleCardClose} className="cardCloseButton"></button> </div>
        <button onClick={handleCardClick} className="viewCardBoard">View Board</button>
        {/* <img 	/> */}
    </div>
    );
}
export default Card


// users can click on a board to navigate to a new page containing that board