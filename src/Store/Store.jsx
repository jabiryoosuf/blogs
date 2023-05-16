import { configureStore } from "@reduxjs/toolkit";
import Authreducer from './AuthSlice'
// import AuthSlice from "./AuthSlice";

export const store = configureStore({
    reducer:{
        auth:Authreducer

    }
})