import { createSlice } from '@reduxjs/toolkit';

type ScreenState = {
	isFullScreen: boolean;
};

const initialState: ScreenState = {
	isFullScreen: false,
};

export const screenSlice = createSlice({
	name: 'screen',
	initialState,
	reducers: {
		toggleFullScreen: (state: ScreenState) => {
			state.isFullScreen = !state.isFullScreen;
		},
	},
});

export const selectIsFullScreen = (state: { screen: ScreenState }) => state.screen.isFullScreen;

export default screenSlice.reducer;
export const { toggleFullScreen } = screenSlice.actions;

