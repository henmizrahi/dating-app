import React from "react"
import { NewUser } from "./newUser"
import { LogIn } from "./logIn"
import "./loginPage.css"

export function LoginPage(){
    return(
        <div className= "Login">
            <NewUser />
            <LogIn/>
        </div>
    )
}



