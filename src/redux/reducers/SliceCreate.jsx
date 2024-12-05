import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bicycles: [],

};
export const CreateBicycles = createSlice({
  name: "Bicycles",
  initialState,
  reducers: {
    GetBicyles(state, action) {
      state.bicycles = action.payload;
    },
    BicylesCreate(state, action) {
      state.bicycles = [...state.bicycles, action.payload];
    },
    SortBicyclesOne(state) {
      state.bicycles = state.bicycles.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    },
    SortBicyclesEnd(state) {
      state.bicycles = state.bicycles.sor(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
      
    },filterBicycles(state,action){
      state.bicycles=state.bicycles.filter((el)=>el.category===action.payload)
    }
  },
});
export const {
  filterBicycles,
  BicylesCreate,
  GetBicyles,
  SortBicyclesEnd,
  SortBicyclesOne,
} = CreateBicycles.actions;
export default CreateBicycles.reducer;
