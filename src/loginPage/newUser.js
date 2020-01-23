import React from "react"
import "./loginPage.css"
import { useAction } from "../redux/utils";
import { userActions } from "../redux/userLogin";
import { addNewUser } from "../dbManager/dbManager";
import {useHistory} from "react-router-dom"
import {NewUserForm} from "./newUserForm"



export function NewUser(){

    const updateUser = useAction(userActions.updateUser);
    const history = useHistory();

    async function mySubmit(userName, password){
        const user = await addNewUser(userName, password);
        if(user){
            updateUser(user);
            history.push("/profile")
        }
        else{
            alert("user already exist");
        }
        
    } 

    return(
        <div className ="LogWindows">
            <h2>NewUser</h2>
            <NewUserForm submit = {mySubmit}/>
        </div>
    )
}