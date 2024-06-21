import React from "react";
import ReactDOM from "react-dom";
import './CardOpen.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

function CardOpen({id, name}) {
    console.log("cardopen")
    return (
        <div>
            <h1>{name}</h1>
        <Link to="/">
        <button className="viewCardBoard">Close Board</button>
        </Link>
    </div>
    );
}
export default CardOpen