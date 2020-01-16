
import React, { useState } from "react"
import "./loginPage.css"


export function Form({buttonName}){
    const [userName, setUser]= useState("");
    const [password, setPassword] = useState("");

    const isValid = userName.length && password.length;

    return(
            <form className = "Form">
                <div className="FormItem">
                    User: <input 
                    className= "Input"
                    required 
                    onChange={e => setUser(e.target.value)} 
                    value={userName}/>
                </div>
                <div className="FormItem">
                    Password: <input 
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