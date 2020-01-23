
import React, { useState } from "react"
import "./loginPage.css"

 
export function LoginForm({submit}){
    const [userName, setUser]= useState("");
    const [password, setPassword] = useState("");
    const isValid = userName.length && password.length;
    

    const userSubmit = (userName, password) =>{
        if(isValid){
            submit(userName,password);
        }
        setUser("");
        setPassword("");
        
    }

    return(
            <form className = "LoginForm" 
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
                    <button className="ButtonLogin" disabled = {!isValid}>login</button>
                </div>
            </form>
    )
}