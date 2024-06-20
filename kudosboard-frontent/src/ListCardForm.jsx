import { useState } from "react";
import './ListCardForm.css';

function ListCardForm ({addItem}) {
    const [formData, setFormData] = useState({title: "", category: '', author: ''});
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        addItem(formData);
        setFormData({title: "", category: "", author: ""});
    }
/* one thought, event.target. is not specifying the correct things
the actual . also, event.target is referencing the button modal 
itself not anythingh useful
also might not even be these, but the improper transferring
of data from one to the other*/
    function handleChange(event) {
        const title = event.target.title;
        const category = event.target.category;
        const author = event.target.author;
        setFormData(fData => ({
            ...fData,
            [title]:category, author
        }));
    }

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
            <option value="volvo">Lifestyle</option>
            <option value="saab">Vacation</option>
            <option value="mercedes">Nightlife</option>
            <option value="audi">Nauture</option>
        </select>
        </div>

        <div>
            <label >Author</label>
            <input type="text" id="author" name="author" className="author"></input>
        </div>
      
     </div>
     <input type="submit" value="Submit"/>
     </form>
    );
}
export default ListCardForm;