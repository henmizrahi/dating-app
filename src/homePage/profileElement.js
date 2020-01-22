
import React from "react"


export function ProfileElement({name, lastName, age, image}){
    return(
        <div className = "ProfileElement">
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


