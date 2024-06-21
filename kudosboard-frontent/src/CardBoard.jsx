import './CardBoard.css'
import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function CardBoard({selectedKeyword}) {
    const [card, setCard] = useState([]);
    const [selectedCat, setSelectedCat] = useState('');
    let filteredCards = [];

    console.log({selectedKeyword})
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
        setSelectedCat('Recent'); // update the selected category state variable
      };

      if (selectedKeyword !== '') {
        filteredCards = card.filter(card => card.title == selectedKeyword);
      }
      else if (selectedCat === 'Recent') {
        filteredCards = card.sort((a, b) => b.id - a.id);

        console.log(filteredCards)
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
