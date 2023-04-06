const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    contactData:[]
}


const siteSlider = createSlice({
    name:"site",
    initialState,
    reducers:{
        addContactInfo:(state,action)=>{
            state.contactData = [...state.contactData,action.payload];
        }
    },
    // extraReducers:{}
})

export const { addContactInfo } = siteSlider.actions;
export default siteSlider.reducer;