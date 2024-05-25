import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "isLogged",
  initialState: {
    value: false,
  },
  reducers: {
    toggleIsLogged: (state) => {
      // TODO cambiare localstorage, trovare soluzione nativa
      localStorage.removeItem("userToken")
      localStorage.removeItem("spotifyToken")
      localStorage.removeItem("spotifyTokenTimestamp")
      state.value = false;
    },
    setIsLogged: (state) => {
      // TODO utilizzare libreria jwt per validazione utente
      // Todo trovare alternativa al localstorage
      if (localStorage.getItem("userToken")) state.value = true;
    },
  },
});

export const { toggleIsLogged, setIsLogged } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
