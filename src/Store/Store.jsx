import { configureStore } from "@reduxjs/toolkit";
import Authreducer from './AuthSlice';
import Blogreducer from './BlogSlice';


export const store = configureStore({
    reducer:{
        auth:Authreducer,
        blogs:Blogreducer

    }
})