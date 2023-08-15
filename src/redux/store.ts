import { configureStore } from '@reduxjs/toolkit';
import screenReducer from '@/redux/screenSlice'

export const store = configureStore({
	reducer: {    screen: screenReducer},
});
