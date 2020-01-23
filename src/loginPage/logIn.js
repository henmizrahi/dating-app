import React from "react"
import "./loginPage.css"
import { useAction } from "../redux/utils";
import { userActions } from "../redux/userLogin";
import {getLoginUser} from "../dbManager/dbManager";
import {useHistory} from "react-router-dom";
import {LoginForm} from "./loginForm"



export function LogIn(){
    const updateUser = useAction(userActions.updateUser);
    const history = useHistory();

    async function mySubmit(userName, password){
        const user = await getLoginUser(userName, password);
        if(user){
            updateUser(user);
            history.push("/profile");
        }
        else{
            alert("user not exist or password incorrect");
        }
    }

    return(
        <div className ="LogWindows">
        <h2>LogIn</h2>
        <LoginForm  submit = {mySubmit} />
        </div>
    )
}