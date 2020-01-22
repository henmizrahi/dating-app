

const myStorage = window.localStorage; 


export async function getUser(){
   return createPromise(JSON.parse(myStorage.getItem("users")));
}


export async function setUser(newUsers){
    return createSetPromise("users",newUsers);
}




export async function getFakeUser(){
    return createPromise(JSON.parse(myStorage.getItem("fakeUsers")));
}


export function setFakeUser(newUsers){
    return createSetPromise("fakeUsers", newUsers);
    
    
}




async function createPromise(resolveValue){
    return new Promise(function(resolve,reject){
        resolve(resolveValue);
    });
}

async function createSetPromise(name ,setValue){
    myStorage.setItem(name,JSON.stringify(setValue));
    return createPromise(200);
}

