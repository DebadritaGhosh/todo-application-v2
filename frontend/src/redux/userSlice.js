import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	status: "",
	error: "",
	user: {
		id: "",
		name: "",
		email: "",
		picture: "",
		status: "",
		token: "",
		refreshToken: ""
	},
}

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		logout: (state) => {
			state.status = "";
			state.error = "";
			state.user = {
				id: "",
				name: "",
				email: "",
				picture: "",
				status: "",
				token: "",
				refreshToken: ""
			}
		}
	}
})




export const {logout} = userSlice.actions;
export default userSlice.reducer;