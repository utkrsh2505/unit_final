import React from "react";

import {  useDispatch } from "react-redux";
import axios from "axios";
const Employees = ()=>{
  
    const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
    const [purpose, setPurpose] = React.useState("");
  const [amount, setAmount] = React.useState("");
    const [status, setStatus] = React.useState("");
    const add = ( names,dates,purposes,amounts,statuss ) =>{
        console.log( names,dates,purposes,amounts,statuss )
     
        return axios
        .post("http://localhost:3001/employees",{
           
            
                Name: names,
                Date:dates,
                Purpose : purposes,
               Amount : amounts,
                Status: statuss
            
                
            
        }) 
        .then((res)=>{
        console.log(res)
    
        })
        .catch((err)=>{
            console.log("whats")
           
        });
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = { name,date,purpose,amount,status };
       // console.log(payload)
      add(name,date,purpose,amount,status )
     
      };

      
    return(
        <>
        <h1>Employees Page</h1>


        <form onSubmit={handleSubmit}>
           
            <input type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Name"/>
            <br/>
            <br/>
           
            <input type="text"
             value={date}
             onChange={(e)=>setDate(e.target.value)}
            placeholder="Date"/>
            <br/>  <br/>
           
            <input type="text" 
             value={purpose}
             onChange={(e)=>setPurpose(e.target.value)}
            placeholder="Purpose of the claim"/>
            <br/>  <br/>
            
            <input type="text"
             value={amount}
             onChange={(e)=>setAmount(e.target.value)}
            placeholder="Amount to be claimed"/>
            <br/>  <br/>
          
            <input type="text"
             value={status}
             onChange={(e)=>setStatus(e.target.value)}
            placeholder="STATUS"/>
            <br/><br/>
            <input type="submit"/>
        </form>
        </>
    )
}
export {Employees}