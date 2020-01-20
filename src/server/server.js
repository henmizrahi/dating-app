

const myStorage = window.localStorage; 


export async function getUser(){
    return new Promise (function(resolve, reject){
        resolve(JSON.parse(myStorage.getItem("users")))
    });
}


export async function setUser(newUsers){
    return new Promise(function(resolve,reject){
        myStorage.setItem("users",JSON.stringify(newUsers));
        resolve(200);
    });
    
}






