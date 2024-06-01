import { Track } from "@/model/savedTrackTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



export const playerSlice = createSlice({
    name:"songPlayed",
    initialState:{
        value:null as (null | Track)
    },
    reducers:{
        setPlayedSong: (state,action:PayloadAction<Track | null>)=>{
            state.value = action.payload
        }
    }
}
)

export const {setPlayedSong} = playerSlice.actions
export const playerReducer = playerSlice.reducer