import React, {useState,} from "react";
import "./Signup.css"

const HireStaff = () => {

    const [userRegistraton, setUserRegistraton] = useState({
        username:"",
        phone:"",
        email:"",
        password:""
    });

    const  [records, setRecords] = useState([]);

    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)

        setUserRegistraton({ ...userRegistraton, [name] : value})
    }

    const handleSubmit = (e) => {
            e.preventDefault();

            const newRecord = { ...userRegistraton, id:new Date().getTime().toString() }
            setRecords ([...records, newRecord])
            console.log(records)

            setUserRegistraton({ username:"", phone:"", email:"", password:""})
    }

    return (
      <>
      <form className="sign-up-form-css" action="" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
        <div className="labels">
            <label htmlFor="username">Full Name</label>
            <input type="text" autoComplete="off"
            value={userRegistraton.usename}
            onChange={handelInput}
            name="username" id="username"
            placeholder="Enter full name"
            />
        </div>

        <div className="labels">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" autoComplete="off"
            value={userRegistraton.phone} 
            onChange={handelInput} 
            name="phone" id="username"
            placeholder="Enter phone number"
            />
        </div>

        <div className="labels">
            <label htmlFor="email">E-mail Id</label>
            <input type="text" autoComplete="off"
            value={userRegistraton.email}
            onChange={handelInput} 
            name="email" id="username"
            placeholder="Enter an e-mail"
            />
        </div>

        <div className="labels">
            <label htmlFor="passward">Password</label>
            <input type="password" autoComplete="off"
            value={userRegistraton.password} 
            onChange={handelInput} 
            name="password" id="username"
            placeholder="Enter password"
            />
        </div>
        <button className="sub-button" type="submit">Registration</button>
      </form>
      </>
    );
  }
  
  export default HireStaff;