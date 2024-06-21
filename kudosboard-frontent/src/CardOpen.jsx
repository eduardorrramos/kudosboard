import React from "react";
import ReactDOM from "react-dom";
import './CardOpen.css'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

function CardOpen() {
    const {id} = useParams();
    const [card, setCard] = useState([])

    useEffect(() => {
        fetchCard();
      }, []);
    
      const fetchCard = () => {
        fetch(`http://localhost:3000/board/${id}`)
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

    console.log(card.cards)
// fawofawnfowianfowainfowainfwaoifnwaokfnwaofknwaofknwaofkwanofwaknfownfwao
const [dataFromCards, setDataFromCards] = useState([]);
let thisboardcards = [];
function closingacard (event) {
    let closingcard = event.target.closest('.oneboardcard')
    closingcard.remove();
}
useEffect(() => {
    getBoardCardData();
  }, []);

const getBoardCardData = () => {
    fetch(`http://localhost:3000/card`)
    .then(respo => {
        if (!respo.ok) {
            throw new Error(`HTTP error! status: ${respo.status}`);
          }
          return respo.json();
        })
        .then(data => {
          console.log(data);
          setDataFromCards(data)
        })
        .catch(error => {
          console.error(`Error fetching card: `, error);
        });
      };
      console.log(dataFromCards)
      let winningarray = []
      for (let i = 0; i < dataFromCards.length ; i++) {
        if (dataFromCards[i].boardId == id) {
            winningarray.push(dataFromCards[i])
        }
      }
      console.log(winningarray)
      const boardCards = winningarray.map(oneboardcards => {
        return (
            <div className="cardinsideofboard">
            <h3 className="cardtitle"> {oneboardcards.id} </h3>
            <h3 className="cardtitle"> {oneboardcards.comment} </h3>
            <h3 className="cardtitle"> {oneboardcards.author} </h3>
        </div>
        );

        });

    return (
        <div >
            <div className="modalboard">
            <h1>{card.title}</h1>
            <h2>{card.author}</h2>
            <h3>{card.category}</h3>
            <Link to="/">
                <button className="viewCardBoard">Close Board</button>
            </Link>
            </div>
            {boardCards}
        </div>
    );
}

export default CardOpen;



   
/*

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
            { add image here }
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
        //     <Link to={`/details/${individual.id}`}>
        //     <button className="viewCardBoard">View Board</button>
        //     </Link>
        // </div>
        // );});

export default CardBoard; */