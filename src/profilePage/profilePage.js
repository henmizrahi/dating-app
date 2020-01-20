
import React, { useState } from "react";
import "./profilePage.css";
import { userActions } from "../redux/userLogin";
import {useSelector} from "react-redux";
import { useAction } from "../redux/utils";
import {useHistory} from "react-router-dom"
import { updateUserDetails } from "../dbManager/dbManager";



export function ProfilePage(){

    const userLogin = useSelector(({userLogin}) => userLogin);
    const [name, setName] = useState(userLogin.name);
    const [age, setAge] = useState(userLogin.age);
    const [gender, setGender] = useState(userLogin.gender);
    const [lookingFor, setLookingFor] = useState(userLogin.lookingFor);
    const updateUser = useAction(userActions.updateUser);
    const history = useHistory();

    const isValid = name.length && age >=0;
    async function submit(){
        if(isValid){
            const user = await updateUserDetails(userLogin.userName, name, age, gender,lookingFor);
            updateUser(user);
            history.push("/home");

        }
    }

    return(
        <div className= "ProfilePage">
        <form className = "FormProfile"
              onSubmit = {e =>{
                e.preventDefault();
                submit();}}>
            <div className = "Form-Item">
                Name: <input
                type = "text"
                className= "ProfileInput"
                required
                onChange= {e => setName(e.target.value)}
                    value={name}/>
            </div>
            <div className = "Form-Item">
                Age: <input 
                type="number"
                className= "ProfileInput"
                required
                onChange= {e => setAge(e.target.value)}
                    value={age}/>
            </div>
            <div className = "Form-Item">
                Gender:
                <select 
                    className= "ProfileInput"
                    onChange= {e => setGender(e.target.value)}
                    value={gender}>
                    <option value = "male">male</option>
                    <option value = "female">female</option>
                </select>
            </div>
            <div className = "Form-Item">
                Looking For: 
                <select
                    className= "ProfileInput"
                    onChange= {e => setLookingFor(e.target.value)}
                    value={lookingFor}>
                    <option value = "man">man</option>
                    <option value = "woman">woman</option>
                    <option value = "man&woman">man&woman</option>
                </select>
            </div>
            <div className = "Form-Item">
                <button className= "ProfileButton" disabled = {!isValid}>Save</button>
            </div>
        </form>
    </div>
    )
  
}