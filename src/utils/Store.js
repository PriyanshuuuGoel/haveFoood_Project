import { configureStore } from "@reduxjs/toolkit";
import slice1Redux from "./Slice"; 



const stores = configureStore({
    reducer:{
       slice1: slice1Redux
    }
})


export default stores;