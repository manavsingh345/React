import { useState } from "react";
export default function Forms() {
    let [form, formData] = useState({
        fullName: "",
        petType: "",
        breedType: ""
    });
    let handleChangeName = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        formData((currData) => {
            currData[fieldName] = newValue;
            return { ...currData };
        });
    }
    return (
        <form >
            <label htmlFor="name">Pet Name: </label>
            <input type="text" id="name" name="fullName" placeholder="Pet Name " value={formData.fullName} onChange={handleChangeName} />

            <label htmlFor="petType">Pet Type: </label>
            <input type="text" id="petType" name="petType" placeholder="Enter the Pet Type" value={formData.petType} onChange={handleChangeName} />

            <label htmlFor="breedType">Breed Type: </label>
            <input type="text" id="breedType" name="breedType" placeholder="Bread Type: " value={formData.breedType} onChange={handleChangeName} />
            <button>Submit</button>
        </form>
    );
}