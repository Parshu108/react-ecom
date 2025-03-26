import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
   name:"myname",
   initialState:{
      cart:[]
   },
   reducers:{
      addtocard:(state,actions)=>{
         const mydata=state.cart.filter(key=>key.id==actions.payload.id);
         if(mydata.length>=1){
            alert("product Added sucessfully");
         }
         else{
            state.cart.push(actions.payload);
         }
      }
   }
})
export const{addtocard}=cartSlice.actions;
export default cartSlice.reducer;
