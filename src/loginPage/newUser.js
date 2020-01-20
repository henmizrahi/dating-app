import React from "react"
import {Form} from "./form"
import "./loginPage.css"
import { useAction } from "../redux/utils";
import { userActions } from "../redux/userLogin";
import { addNewUser } from "../dbManager/dbManager";
import {useHistory} from "react-router-dom"



export function NewUser(){

    const addUser = useAction(userActions.addUser);
    const history = useHistory();

    async function mySubmit(userName, password){
        const user = await addNewUser(userName, password);
        if(user){
            addUser(user);
            history.push("/home")
        }
        else{
            alert("user already exist");
        }
        
    } 

    return(
        <div className ="LogWindows">
            <h2>NewUser</h2>
            <Form buttonName="Register"  submit = {mySubmit}/>
        </div>
    )
}