import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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

export const loginUser = createAsyncThunk('auth/register',async(values,{rejectWithValue}) => {
	try {
		const {data} = await console.log("TEST");
	} catch (error) {
		return rejectWithValue(error.response.data.error.message);
	}
});

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