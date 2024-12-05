import {createSlice } from "@reduxjs/toolkit"

const initialState={
favorite:JSON.parse(localStorage.getItem("favorite"))||[],
basket: []
}


export const FavoriteSlice=createSlice({

  name:"FAVORITE",
  initialState,
  reducers:{
    addToFavorite(state,action){
      let add =   state.favorite=[...state.favorite,action.payload]
      localStorage.setItem("favorite",JSON.stringify(add))
    },
    delFavorite (state,action){
      let res=state.favorite=state.favorite.filter((el)=>el._id !==action.payload)
      localStorage.setItem("favorite",JSON.stringify(res))
    }
    
  }
})


export const {addToFavorite,delFavorite}=FavoriteSlice.actions;
 export default FavoriteSlice.reducer
 