
import React, { useState } from "react"
import "./loginPage.css"

 
export function Form({buttonName, submit}){
    const [userName, setUser]= useState("");
    const [password, setPassword] = useState("");
    const isValid = userName.length && password.length;
    

    const userSubmit = (userName, password) =>{
        if(isValid){
            submit(userName,password);
        }
        
    }

    return(
            <form className = "Form" 
                onSubmit = {e =>{
                    e.preventDefault();
                    userSubmit(userName, password);
                }}>
                <div className="FormItem">
                    User: <input 
                    type = "text"
                    className= "Input"
                    required 
                    onChange={e => setUser(e.target.value)} 
                    value={userName}/>
                </div>
                <div className="FormItem">
                    Password: <input 
                    type = "password"
                    className= "Input" 
                    required
                    onChange= {e => setPassword(e.target.value)}
                    value={password}/>
                </div>
                <div >
                    <button className="Button" disabled = {!isValid}>{buttonName}</button>
                </div>
            </form>
    )
}