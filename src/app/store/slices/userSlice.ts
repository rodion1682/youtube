import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userSlice {
	currentUser: string;
}

const initialState: userSlice = {
	currentUser: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userFetching(state, action: PayloadAction<string>) {
			state.currentUser = action.payload;
		},
	},
});

export const { userFetching } = userSlice.actions;

export default userSlice.reducer;
