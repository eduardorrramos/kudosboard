import './Card.css'
import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import CardBoard from './CardBoard';

function Card(props) {
    console.log(props)
    function handleCardClick (event)  {
        console.log(event.target)
        // navigate('/chosencard');
        return <div ></div>
    }
    function handleCardClose (event) {
        let closingcard = event.target.closest('.cardtemplate')
        closingcard.remove();
    }
    return (
    <div className="cardtemplate">
        <div className="topOfCard">
        <h3 className="cardtitle"> {props.id} </h3>
        <h3 className="cardtitle"> {props.name} </h3>
        <h3 className="cardtitle"> {props.category} </h3>
        {/* <img src="Https://picsum.photos/200/300?random" className="cardtitle">  </img> */}



        <button onClick={handleCardClose} className="cardCloseButton"></button> </div>
        <Link to={`/details/${props.id}`}>
        <button className="viewCardBoard">View Board</button>
        </Link>
        {/* <img 	/> */}
    </div>
    );
}
export default Card


// users can click on a board to navigate to a new page containing that board