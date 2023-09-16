import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state, action) => {
			state.user = null; // changing user back to null on logout
		},
	},
});

export const { login, logout } = userSlice.actions;

// Selector that helps select user from the userSlice
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
