import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:localStorage.getItem('jwtToken')|| null,
        isFetching:false,
        error:false
    },
    reducers:{
       loginStart:(state)=>{
           state.isFetching=true;
       },
       loginSuccess:(state,action)=>{
           state.isFetching=false;
           localStorage.setItem('jwtToken',JSON.stringify(action.payload))
           state.currentUser=action.payload
        },
        loginFailure:(state)=>{
           state.isFetching=false;
           state.error=true
       }    }
});

export const {loginFailure,loginStart,loginSuccess}=userSlice.actions;

export default userSlice.reducer;