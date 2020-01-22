
import React, { useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {getFakeProfileByName} from "../dbManager/dbManager"
import "./userPage.css"


import likeImage from '../likk.png'

export function UserPage(){
    const {name} = useParams();
    const [user, setUser] = useState("");
    const [currentImage, setImage] = useState("");

    const clickLeftRigth = (direction) =>{
        const length = (user.image).length;
        const index = user.image.indexOf(currentImage);
        setImage(user.image[(index+direction+length)%length]);
    }


    useEffect(() =>{
        async function getUser(){
            const profile = await getFakeProfileByName(name);
            setUser(profile);
            setImage(profile.image[0])
            
        }
        getUser();
    }, [name]);
    return(
        <div className="Page">
            <div className = "UserProfile">
                <div className= "roundImage">
                    <div className="arrow-left" onClick ={() =>clickLeftRigth(-1)}></div>
                    <img className= "UserImage" src={currentImage} alt="img" />
                    <div className="arrow-right" onClick ={() =>clickLeftRigth(1)}></div>
                </div>
                <div>
                    <h5 className= "UserName">
                    {`${user.name} ${user.lastName}`}
                    <br/>
                    {user.age}
                    </h5>
                </div>
                <div className= "Like">
                    <button className = "LikeButton">I like him/her
                    <img className= "likeLogo" src={likeImage} alt = "like"/>
                    </button>
                    
                </div>
                <div className = "checkBox">
                    <input className="Creap" type="checkbox"/>Is a creap
                </div>
            </div>
        </div>
    );
    


}