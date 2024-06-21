import './CardBoard.css'
import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function CardBoard() {
    function handleCardClick (event)  {
        console.log(event.target)
        navigate('/chosencard');
        return <div ></div>
    }
    function handleCardClose (event) {
        let closingcard = event.target.closest('.cardtemplate')
        closingcard.remove();
    }
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetchCard();
      }, []);
    
      const fetchCard = () => {
        fetch(`http://localhost:3000/board`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setCard(data)
        })
        .catch(error => {
          console.error(`Error fetching card: `, error);
        });
      };
      console.log(card)
    const onecard = card.map(individual => {
        return (
            
        <div className="cardtemplate">
            <div className="topOfCard">
            <h3 className="cardtitle"> {individual.id} </h3>
            <h3 className="cardtitle"> {individual.name} </h3>

            <button onClick={handleCardClose} className="cardCloseButton"></button> </div>
            <Link to="/details">
            <button onClick={handleCardClick} className="viewCardBoard">View Board</button>
            </Link>
        </div>
        
        
        
        );});


    console.log(onecard)

    return (
        <>
        {onecard}
        </>

    )
}
export default CardBoard
{/* <div className="cardtemplate">
        <div className="topOfCard">
        <h3 className="cardtitle"> {props.title} </h3>
        <button onClick={handleCardClose} className="cardCloseButton"></button> </div>
        <Link to="/details">
        <button onClick={handleCardClick} className="viewCardBoard">View Board</button>
        </Link>
    </div> */}