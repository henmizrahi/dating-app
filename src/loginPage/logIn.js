import React from "react"
import {Form} from "./form"
import "./loginPage.css"


export function LogIn(){
    return(
        <div className ="LogWindows">
        <h2>LogIn</h2>
        <Form buttonName= "login" />
        </div>
    )
}