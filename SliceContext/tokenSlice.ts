
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const spotifyTokenSlice = createSlice({
  name: "SpotifyToken",
  initialState: {
    value:"",
  },
  reducers: {
    setToken:(state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
});

export const { setToken} = spotifyTokenSlice.actions;
export const spotifyTokenReducer = spotifyTokenSlice.reducer;
