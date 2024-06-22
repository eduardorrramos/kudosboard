import './CardBoard.css'
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

/*handles fetching information for our boards, and filtering them as well*/
function CardBoard({selectedKeyword}) {
    const [card, setCard] = useState([]);
    const [selectedCat, setSelectedCat] = useState('');
    let filteredCards = [];

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
          setCard(data)
        })
        .catch(error => {
          console.error(`Error fetching card: `, error);
        });
      };
      /*establishes the categories we will be parsing*/
      const collectLifestyle = () => {
        setSelectedCat('Lifestyle'); 
      };
      const collectVacation = () => {
        setSelectedCat('Vacation'); 
      };
      const collectNightlife = () => {
        setSelectedCat('Nightlife'); 
      };
      const collectNature = () => {
        setSelectedCat('Nature');
      };
      const collectRecent = () => {
        setSelectedCat('Recent'); 
      };
      /*filters through our received card data based on category and recents*/
      if (selectedKeyword !== '') {
        filteredCards = card.filter(card => card.title == selectedKeyword);
      }
      else if (selectedCat === 'Recent') {
        filteredCards = card.sort((a, b) => b.id - a.id);
      }
      else {
      filteredCards = card.filter(card => card.category === selectedCat ||
        selectedCat ==='');
      }

      const cardComponents = filteredCards.map(individual => {
        return (
            <div className="cardtemplate">
               <div className="topOfCard">
            <h3 className="cardtitle"> {individual.id} </h3>
            <h3 className="cardtitle"> {individual.title} </h3>
            <button onClick={handleCardClose} className="cardCloseButton"></button> 
               </div>
               <div><h3 className="cardtitle"> {individual.category} </h3>
               <img src={`https://picsum.photos/id/${individual.id}/200/300?grayscale`}/>
            <h3 className="cardtitle"> {individual.author} </h3></div>
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
        <button onClick={collectRecent} className="viewBoard">Recent</button>
        <button onClick={collectLifestyle} className="viewBoard">Lifestyle</button>
        <button onClick={collectVacation} className="viewBoard">Vacation</button>
        <button onClick={collectNightlife} className="viewBoard">Nightlife</button>
        <button onClick={collectNature}className="viewBoard">Nature</button>
        </div>
        {cardComponents}
        </>
        )
}
export default CardBoard;
