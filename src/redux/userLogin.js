import { createSlice } from "@reduxjs/toolkit";






const createUser = (userName,password, name = "", age = 0, gender = "", lookingFor= "") => ({
    userName, 
    password,
    name,
    age,
    gender,
    lookingFor
   
});


const { reducer, actions } = createSlice({
  name: "userLogin",
  initialState: createUser("", ""),
  reducers: {
    updateLogin(user, { payload: {name, age, gender, lookingFor }}){
        return {...user, name, age, gender,lookingFor}
    },
    userLogin(user, { payload: {userName, password, name, age, gender, lookingFor}}) {
        return createUser(userName, password, name, age, gender, lookingFor);
    },
    addUser(user, { payload: {userName, password}}) {
        return createUser(userName,password);
    },
  }
});

export const userReducer = reducer;
export const userActions = actions;










