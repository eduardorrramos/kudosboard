import './CardBoard.css'
import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function CardBoard() {
    const [card, setCard] = useState([]);
    const [selectedCat, setSelectedCat] = useState('');

    function handleCardClose (event) {
        let closingcard = event.target.closest('.cardtemplate')
        closingcard.remove();
    }
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
      const collectLifestyle = () => {
        setSelectedCat('Lifestyle'); // update the selected category state variable
      };
      const collectVacation = () => {
        setSelectedCat('Vacation'); // update the selected category state variable
      };
      const collectNightlife = () => {
        setSelectedCat('Nightlife'); // update the selected category state variable
      };
      const collectNature = () => {
        setSelectedCat('Nature'); // update the selected category state variable
      };
      const collectRecent = () => {
        setSelectedCat('Nature'); // update the selected category state variable
      };

      const filteredCards = card.filter(card => card.category === selectedCat ||
        selectedCat ==='');

      const cardComponents = filteredCards.map(individual => {
        return (
            <div className="cardtemplate">
            <div className="topOfCard">
            <h3 className="cardtitle"> {individual.id} </h3>
            <h3 className="cardtitle"> {individual.title} </h3>
            <button onClick={handleCardClose} className="cardCloseButton"></button> </div>
            {/* add image here */}
            <Link to={`/details/${individual.id}`}>
            <button className="viewCardBoard">View Board</button>
            </Link>
        </div>
        );

        });
        return (
        <>
        <div className="buttondashboard">
        
        <button onClick={collectRecent} className="viewCardBoard">Recent</button>

        <button onClick={collectLifestyle} className="viewCardBoard">Lifestyle</button>
        
        <button onClick={collectVacation} className="viewCardBoard">Vacation</button>
        <button onClick={collectNightlife} className="viewCardBoard">Nightlife</button>
        <button onClick={collectNature}className="viewCardBoard">Nature</button>
        </div>

        {cardComponents}
        </>
        )
      

    // const onecard = card.map(individual => {
    //     return (
            
        // <div className="cardtemplate">
        //     <div className="topOfCard">
        //     <h3 className="cardtitle"> {individual.id} </h3>
        //     <h3 className="cardtitle"> {individual.title} </h3>
        //     <button onClick={handleCardClose} className="cardCloseButton"></button> </div>
        //     {/* add image here */}
        //     <Link to={`/details/${individual.id}`}>
        //     <button className="viewCardBoard">View Board</button>
        //     </Link>
        // </div>
        // );});
}
export default CardBoard;
