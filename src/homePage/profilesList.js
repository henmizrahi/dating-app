
import React from "react"
import {ProfileElement} from "./profileElement"






export function ProfilesList({title, data}){
    return(
        <div className = "ProfilesList">
            <h2>{title}</h2>
                {
                data.map(
                    (profile, index) => 
                    <ProfileElement
                    key = {index}
                    name = {profile.name}
                    lastName = {profile.lastName}
                    age = {profile.age}
                    image = {profile.image}
                     />)
                }
        </div>
    )

}