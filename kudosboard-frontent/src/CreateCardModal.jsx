import React from "react";
import ReactDOM from "react-dom";
import './CreateCardModal.css'
import { useState } from 'react';
import ListCardForm from "./ListCardForm";

function CreateCardModal({isCardCreatorOpen, setIsCardCreatorOpen}) {
    const [items, setItems] = useState([]);
    function addItem(newItem) {
        setItems(items => [...items, newItem]);
        console.log(items)
    }

    function handleCloseButton() {
        setIsCardCreatorOpen(false);
    }
    if (!isCardCreatorOpen) {
        return null
    }
    return (
        <>
        <ListCardForm addItem={addItem}/>
        <button onClick={handleCloseButton}></button>
        </>
    );
}
export default CreateCardModal;

