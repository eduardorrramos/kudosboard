import { useState } from "react";
function ListCardForm ({addItem}) {
    const [formData, setFormData] = useState({title: "", category: '', author: ''});
    function handleSubmit(event) {
        const form = event.target;
        const formData = new FormData(form);

        fetch(`${import.meta.env.VITE_BACKEND_ADDRESS}/board`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: formData.get("title"),
                    category: formData.get("category"),
                    author: formData.get("author"),
                    cards: []
                }),
            })}

    return (
        <form onSubmit={handleSubmit}>  
        <div className="createcardmodal" id="createmodal"> Create a New Board
            
            <div>
        <label >Title</label>
        <input type="text" id="title" name="title" className="title" />
            </div>

            <div>
        <label >Category</label>
        <select id="category" name="category" className="category">
            <option value="Lifestyle">Lifestyle</option>
            <option value="Vacation">Vacation</option>
            <option value="Nightlife">Nightlife</option>
            <option value="Nature">Nature</option>
        </select>
            </div>

        <div>
            <label >Author</label>
            <input type="text" id="author" name="author" className="author" ></input>
            <input type="submit" value="Submit"/>

        </div>
      
        </div>
     </form>
    );
}
export default ListCardForm;