
import React from 'react';
import { Link } from "react-router-dom";
import "./topBar.css"


export function TopBar(){
    return(
        <div className = "TopBar">
            <Link className="homeLink" to="/">DateNigth</Link>
            <Link  className="logLink" to="loging">Login</Link>
        </div>
    );
} 