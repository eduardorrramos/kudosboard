import './CardBoard.css'
import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';
import SearchBar from './SearchBar';

function CardBoard({newCard}) {
    if (newCard)
        return ( 1);
    return(
        <>
        <header>This is my card board</header>
        <div>
            <Card title={'A pretty photo'}/>
            <Card title={'Another pretty photo'}/>
            <Card title={'One more pretty photo'}/>
        </div>
        </>
        
    );
}
export default CardBoard