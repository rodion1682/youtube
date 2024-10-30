import { combineReducers, configureStore } from '@reduxjs/toolkit';
import videosReducer from './slices/videosSlice';
import videoReducer from './slices/videSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
	videos: videosReducer,
	video: videoReducer,
	user: userReducer,
});

export const setupStore = () => {
	return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
