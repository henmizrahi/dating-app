import React from "react"
import {Form} from "./form"
import "./loginPage.css"
import { useAction } from "../redux/utils";
import { userActions } from "../redux/userLogin";
import {getLoginUser} from "../dbManager/dbManager";
import {useHistory} from "react-router-dom";



export function LogIn(){
    const userLogin = useAction(userActions.userLogin);
    const history = useHistory();

    async function mySubmit(userName, password){
        const user = await getLoginUser(userName, password);
        if(user){
            userLogin(user);
            history.push("/home");
        }
        else{
            alert("user not exist or password incorrect");
        }
    }

    return(
        <div className ="LogWindows">
        <h2>LogIn</h2>
        <Form buttonName= "login" submit = {mySubmit} />
        </div>
    )
}