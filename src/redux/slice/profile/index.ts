import { Profile } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProfileState = {user: Profile | null};
const initialState: ProfileState = {user: null}

const slice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<Profile | null>) {
            state.user = action.payload;
        },
        cleanProfile(state) {
            state.user = null
        } 
    }
})

export const {setProfile, cleanProfile} = slice.actions;
export default slice.reducer;