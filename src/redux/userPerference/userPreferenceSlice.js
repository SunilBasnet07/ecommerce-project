
import { DARK_MODE, LIGHT_MODE } from "@/constance/theme";
import { createSlice } from "@reduxjs/toolkit";


const userPreferenceSlice = createSlice({
    name: "userPreference",
    initialState: {
        theme: LIGHT_MODE,
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
        }
    }
})
export const {toggleTheme}= userPreferenceSlice.actions;
export default userPreferenceSlice.reducer;
