import './Card.css'
import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
    return (
    <div>
        {props.description}
    </div>
    );
}
export default Card