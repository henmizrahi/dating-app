
import React from 'react';
import { Link } from "react-router-dom";
import "./topBar.css"
//import {userActions} from "../redux/userLogin"
import { useSelector } from "react-redux";


function loginLinkOptions(userName){
    return(
        userName.length > 0
        ? <Link  className="logLink" to="/profile">Hello {userName}</Link>
        : <Link  className="logLink" to="/login">Login</Link>)

}


export function TopBar(){
    const userLogin = useSelector(({userLogin}) => userLogin);
    const userName = userLogin.userName
    return(
        <div className = "TopBar">
            <Link className="homeLink" to="/">DateNigth</Link>
            {loginLinkOptions(userName)}
        </div>
    );
} 