
import React from "react";
import {useHistory} from "react-router-dom";






export function ProfileElement({name, lastName, age, image}){
    console.log(image)
    const history = useHistory();
    return(
        <div className = "ProfileElement" 
        onClick = {() => {history.push(`/user/${name}`)}}>
            <img className= "Image" src={image} alt="img" />
            <h5 className= "Title">
            {name}
            <br/>
            {lastName}
            <br/>
            {age}</h5>
        </div>
    )
    
}


