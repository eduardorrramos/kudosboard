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
    return (
        <div>
            <h1>{card.title}</h1>
            <h2>{card.author}</h2>
            <h1>{card.category}</h1>
            <Link to="/">
                <button className="viewCardBoard">Close Board</button>
            </Link>
        </div>

    );
}
export default CardOpen