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
    updateUser(user, { payload: userObj}){
        return userObj;
    },
  }
});

export const userReducer = reducer;
export const userActions = actions;










