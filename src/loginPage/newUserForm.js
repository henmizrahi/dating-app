
import React, { useState } from "react"
import "./loginPage.css"

 
export function NewUserForm({submit}){
    const [userName, setUser]= useState("");
    const [password, setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const isValid = userName.length && password.length&& password2.length&& password === password2;
    

    const userSubmit = (userName, password) =>{
        if(isValid){
            submit(userName,password);
        }
        setUser("");
        setPassword("");
        
    }

    return(
            <form className = "NewUserForm" 
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
                <div className="FormItem">
                    Password: <input 
                    type = "password"
                    className= "Input" 
                    required
                    onChange= {e => setPassword2(e.target.value)}
                    value={password2}/>
                </div>
                <div >
                    <button className="ButtonNewUser" disabled = {!isValid}>Register</button>
                </div>
            </form>
    )
}