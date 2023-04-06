import siteSlice from "./siteReducer/siteSlice";
const { configureStore } = require("@reduxjs/toolkit");
const store = configureStore({
    reducer:{
        site:siteSlice
    }
})

export default store;