import './CardBoard.css'
import React from "react";
import ReactDOM from "react-dom";
import Card from './Card';

function CardBoard() {

    return(
        <div>This is my card board
            <Card description={'A pretty photo'}/>
            <Card description={'Another pretty photo'}/>

        </div>
    );
}
export default CardBoard