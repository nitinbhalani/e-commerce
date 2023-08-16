import {createSlice} from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem("cart")) || []
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state))


        },
       remove(state,action){
       return state.filter((item)=>item.id !== action.payload)

       }
    }
})

export const {add,remove} =cartSlice.actions
export default cartSlice.reducer