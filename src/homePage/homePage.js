
import React from 'react';
import "./homePage.css"
import { UnloggedHomePage } from './unloggedHomePage';
import { useSelector } from 'react-redux';
import { LoggedHomePage } from './loggedHomePage';


function checkIfUserLogeed(userLogin){
    return(
    userLogin.userName
    ? <LoggedHomePage/>
    : <UnloggedHomePage/>
    )

}


export function HomePage(){
    const userLogin = useSelector(({userLogin}) => userLogin)
    
    return(
        <div>
            {checkIfUserLogeed(userLogin)}
        </div>
    )
}