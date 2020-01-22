import {setUser, getUser, setFakeUser, getFakeUser} from "../server/server.js"
import {createFakeProfile} from "./fakeProfileWithApe"


const checkUserName = (user, userName) =>user === userName;

const createUser = (userName,password, name = "", age = 0, gender = "", lookingFor= "") => ({
    userName, 
    password,
    name,
    age,
    gender,
    lookingFor
   
});

export async function addNewUser(userName, password){
    const users = await getUsersList();
    if(!checkUserExist(users,userName)){
        const newUser = createUser(userName,password);
        await createNewUsersJason(newUser);
        return newUser;
    }
    return null;
}


export async function getLoginUser(userName,password){
    const users = await getUsersList();
    if(checkUserExist(users, userName)){
        const user = users.find((user) => checkUserName(user.userName, userName));
        if(user.password === password){
            return user;
        }
    return null;
    }
}

export async function updateUserDetails(userName, name, age, gender, lookingFor){
    const users = await getUsersList();
    const user = users.find((user) => checkUserName(user.userName, userName));
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.lookingFor = lookingFor;
    await setUser({users});
    return user;   
}


async function getUsersList(){
    const usersList = await getUser();
    return usersList? usersList.users:[];
}

function checkUserExist(users, userName){
    const some = users.some((user) =>checkUserName(user.userName, userName));
    return some;
}

async function createNewUsersJason(newUser){
    const users = await getUsersList();
    users.push(newUser);
    await setUser({users});
}


export async function getFakeProfile(){
    const users = await getFakeUser();
    if(users){
        return users;   
    }
    await firstFakeProfilesCreate(); 
    return await getFakeUser();
      
}

async function firstFakeProfilesCreate(){
    const fakeUsers = createFakeProfile();
    await setFakeUser(fakeUsers);
}
 
export async function getRecommendedProfiles(lookingFor){
    const fakeProfiles = await getFakeProfile();
    if(lookingFor === "male&female" || lookingFor === ""){
        return fakeProfiles;
    }
    const user = fakeProfiles.filter(profile => profile.gender === lookingFor);
    return user;

}

export async function getRecentlyJoinProfiles(){
    const fakeProfiles = await getFakeProfile();
    return fakeProfiles.slice(0,10);

}

export async function getFakeProfileByName(name){
    const fakeProfiles = await getFakeProfile();
    return fakeProfiles.find((profile) => profile.name === name);
}





