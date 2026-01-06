// import { useState } from "react";
// export default function Forms() {
//     let [form, formData] = useState({
//         fullName: "",
//         petType: "",
//         breedType: ""
//     });
//     let handleChangeName = (event) => {
//         let fieldName = event.target.name;
//         let newValue = event.target.value;

//         formData((currData) => {
//             currData[fieldName] = newValue;
//             return { ...currData };
//         });
//     }
//     return (
//         <form >
//             <label htmlFor="name">Pet Name: </label>
//             <input type="text" id="name" name="fullName" placeholder="Pet Name " value={formData.fullName} onChange={handleChangeName} />

//             <label htmlFor="petType">Pet Type: </label>
//             <input type="text" id="petType" name="petType" placeholder="Enter the Pet Type" value={formData.petType} onChange={handleChangeName} />

//             <label htmlFor="breedType">Breed Type: </label>
//             <input type="text" id="breedType" name="breedType" placeholder="Bread Type: " value={formData.breedType} onChange={handleChangeName} />
//             <button>Submit</button>
//         </form>
//     );
// }


import {useState} from "react";
import "./Forms.css";
export default function Forms(){
    const [form,setForm]=useState({
       username:"",
       email:"",
       password:"",
       confirmPassowrd:"" 
    });
    const [error,setError]=useState({});

    const validate = ()=>{
        let err={};

        if(!/^[a-zA-Z0-9]{3,15}$/.test(form.username)){
            err.username='Username must be 3-15 characters and no special characters';
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
            err.email="Invalid Email format";
        }

        if (form.password.length < 6) {
            err.password = "Password must be at least 6 characters";
        }

        if(form.password !== form.confirmPassowrd){
            err.confirmPassowrd="Password do not match";
        }

        setError(err);
        return Object.keys(err).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          alert("Registration Successful");
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

     return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
        {error.username && <p>{error.username}</p>}

        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        {error.email && <p>{error.email}</p>}

        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        {error.password && <p>{error.password}</p>}

        <input type="password" name="confirmPassword"  placeholder="Confirm Password" onChange={handleChange}/>
        {error.confirmPassword && <p>{error.confirmPassword}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}