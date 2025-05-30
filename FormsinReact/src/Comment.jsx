import { useState } from "react";

function Comment() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });
    let handleChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            currData[fieldName] = newValue;
            return { ...currData };
        });
    }
    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter the username" value={formData.username} onChange={handleChange} />
            <br /><br />
            <textarea name="remarks" id="" value={formData.remarks} onChange={handleChange}>Remarks</textarea>
            <br /><br />
            <input type="number" name="rating" min={1} max={5} value={formData.rating} onChange={handleChange} />
            <br /><br />
            <button>Add Comment</button>
        </form>
    )
}
export default Comment;