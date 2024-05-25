import { PayloadAction, createSlice } from "@reduxjs/toolkit";




export const playlistSlice = createSlice({
  name: "playlist",
  initialState:{
    value:[] as string[]
  },
  reducers:{
    addSong:(state,action: PayloadAction<string>) => {
        if(state.value.includes(action.payload)){
        state.value = state.value.filter((item)=> item != action.payload)
        }
        else{
            state.value = [...state.value,action.payload ]
        }
    },
    deletePlaylist:(state) => {
        state.value = []
    }
  }
});
export const {addSong,deletePlaylist} = playlistSlice.actions
export const playlistReducer = playlistSlice.reducer