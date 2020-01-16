import React from "react"
import {Form} from "./form"
import "./loginPage.css"


export function NewUser(){
    return(
        <div className ="LogWindows">
            <h2>NewUser</h2>
            <Form buttonName="Register" />
        </div>
    )
}