import React from "react";
import ReactDOM from "react-dom";
import './CardOpen.css'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

function CardOpen() {
    const {id} = useParams();
    const [card, setCard] = useState([])
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const [searchGif, setSearchGif] = useState('');
    const [imgURL, setImgURL] = useState('');

    function handlethisclose (event) {
        let closingcard = event.target.closest('.cardinsideofboard')
        closingcard.remove();
    }
    function upvotebutton (event) {
        const button = event.target;
        button.style.color= 'red';
    }
    const handleSearch = async (event) => {
        const newSearchQuery = event.target.value;
        setSearchGif(newSearchQuery);
        if (!newSearchQuery.trim()) return;
        const params = new URLSearchParams({
            api_key: apiKey,
            q: newSearchQuery,
            limit: 10
        });
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?${params.toString()}`);
            const data = await response.json();
            if (data.data.length > 0) {
                setImgURL(data.data[0].images.original.url);
            }
        } catch (error) {
            console.error("Error searching for GIFs:", error);
        }
    };

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
          setDataFromCards(data)
        })
        .catch(error => {
          console.error(`Error fetching card: `, error);
        });
      };
      let winningarray = []
      for (let i = 0; i < dataFromCards.length ; i++) {
        if (dataFromCards[i].boardId == id) {
            winningarray.push(dataFromCards[i])
        }
      }
      const boardCards = winningarray.map(oneboardcards => {
        return (
            <div className="cardinsideofboard">
            <h3 className="cardtitle"> {oneboardcards.id} </h3>
            <h3 className="cardtitle"> {oneboardcards.comment} </h3>
            <h3 className="cardtitle"> {oneboardcards.author} </h3>
            <img src={imgURL} alt="gif" />
            <button onClick={handlethisclose} className="cardCloseButton"></button> 
            <button className='upvotebutton' onClick={upvotebutton}>UPVOTE</button>

        </div>
        );
        });
    return (
        <div>
            <div className="modalboard">
            <h1>{card.title}</h1>
            <h2>{card.author}</h2>
            <div>
                <label htmlFor="imgURL">Gif:</label>
                <input type="text" placeholder="Search Gifs..."
                value={searchGif} onChange={handleSearch}/>
                </div>
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