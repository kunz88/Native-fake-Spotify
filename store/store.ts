import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../SliceContext/loginSlice";
import { userReducer } from "../SliceContext/userSlice";
import { playlistReducer } from "../SliceContext/playlistSlice";
import { spotifyTokenReducer } from "@/SliceContext/tokenSlice";
import { playerReducer } from "@/SliceContext/playerSlice";




export const store = configureStore({
    reducer:{
        login:loginReducer,
        user:userReducer,
        playlist:playlistReducer,
        token:spotifyTokenReducer,
        player:playerReducer
    }
})

export type StoreState = ReturnType<typeof store.getState>