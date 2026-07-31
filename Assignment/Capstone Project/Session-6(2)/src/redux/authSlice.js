import { createSlice } from "@reduxjs/toolkit"

const initialState={
user:null,
isLoggedIn:false
}

const authSlice=createSlice({

name:"auth",

initialState,

reducers:{

login:(state,action)=>{

state.user=action.payload
state.isLoggedIn=true

},

logout:(state)=>{

state.user=null
state.isLoggedIn=false

},

setUser:(state,action)=>{

state.user=action.payload
state.isLoggedIn=!!action.payload

}

}

})

export const{
login,
logout,
setUser
}=authSlice.actions

export default authSlice.reducer