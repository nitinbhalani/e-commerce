import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
const initialState = {
    data:[],
    status: "idel"
}
const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers:{
    //    fetchData(state,action){
    //      state.data = action.payload
    //    }
    },

    extraReducers:(builder) =>{
      builder
      .addCase(getProduct.fulfilled,(state,action) =>{
        state.data = action.payload
        state.status = "idel"
      })
      .addCase(getProduct.pending,(state,action)=>{
        state.status = "pending"

      })
      .addCase(getProduct.rejected,(state,action)=>{
        state.status = "rejected"

        
      })

    }


})

// export const {fetchData} =  ProductSlice.actions
export default ProductSlice.reducer

export const getProduct  = createAsyncThunk("get/product",async () =>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data1 = await res.json()
    return data1
})



// export function getProduct(){
//     return async function getProductThunk(dispatch,getState){
//       const res = await fetch("https://fakestoreapi.com/products")
//         const data = await res.json()
//          dispatch(fetchData(data))

//     }
// }