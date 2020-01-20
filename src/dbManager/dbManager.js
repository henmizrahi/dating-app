import {setUser} from "../server/server.js"
import {getUser} from "../server/server.js"


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


