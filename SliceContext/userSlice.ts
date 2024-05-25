import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
  avatar: string;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
        user:{
            name: "",
            email: "",
            avatar: "",
        }

    },
  },
  reducers: {
    // devo utilizzare il tipo PayloadAction per  inserire un oggetto come stato
    setUserState: (state, action: PayloadAction<User>) => {
        console.log(action.payload)
        state.value.user = action.payload
    }
  },
});

export const {setUserState} = userSlice.actions
export const userReducer = userSlice.reducer
