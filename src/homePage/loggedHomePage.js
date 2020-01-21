
import React, { useEffect, useState } from "react"
import {ProfilesList} from "./profilesList"
import {getRecommendedProfiles, getRecentlyJoinProfiles} from "../dbManager/dbManager"
import { useSelector } from "react-redux";





export function LoggedHomePage(){

    const userLogin = useSelector(({userLogin}) => userLogin);

    const [recommended, setRecommended] = useState([]);
    const [recentlyJoin, setRecentlyJoin] = useState([]);

    useEffect(() => {
        async function getData(){
            const recentlyJoinProfiles = await getRecentlyJoinProfiles();
            setRecentlyJoin(recentlyJoinProfiles);
            const recommendedProfiles = await getRecommendedProfiles(userLogin.lookingFor);
            setRecommended(recommendedProfiles);
        }
        getData();
    },  [userLogin.lookingFor]);

    return (
        <div className="loggedHomePage">
           <ProfilesList
           title= {"Recommended for you:"} 
           data = {recommended}/>
           <ProfilesList
            title= {"Recently join:"}
            data = {recentlyJoin}/> 
        </div>
        
    )
}