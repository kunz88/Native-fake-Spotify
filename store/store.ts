import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../SliceContext/loginSlice";
import { userReducer } from "../SliceContext/userSlice";
import { playlistReducer } from "../SliceContext/playlistSlice";
import { spotifyTokenReducer } from "@/SliceContext/tokenSlice";




export const store = configureStore({
    reducer:{
        login:loginReducer,
        user:userReducer,
        playlist:playlistReducer,
        token:spotifyTokenReducer
    }
})

export type StoreState = ReturnType<typeof store.getState>