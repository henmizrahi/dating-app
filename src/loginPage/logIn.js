import React from "react"
import {Form} from "./form"
import "./loginPage.css"
import { useAction } from "../redux/utils";
import { userActions } from "../redux/userLogin";


export function LogIn(){
    const userLogin = useAction(userActions.userLogin);
    return(
        <div className ="LogWindows">
        <h2>LogIn</h2>
        <Form buttonName= "login" submit = {userLogin} />
        </div>
    )
}