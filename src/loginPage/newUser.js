import React from "react"
import {Form} from "./form"
import "./loginPage.css"
import { useAction } from "../redux/utils";
import { userActions } from "../redux/userLogin";


export function NewUser(){
    const addUser = useAction(userActions.addUser);

    return(
        <div className ="LogWindows">
            <h2>NewUser</h2>
            <Form buttonName="Register"  submit = {addUser}/>
        </div>
    )
}