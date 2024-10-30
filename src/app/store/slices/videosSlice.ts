import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { VideoModel } from '../models/VideoModel';

interface videosState {
	videos: VideoModel[];
	sortedVideos: VideoModel[];
	query: string;
	likedVideos: VideoModel[];
	isLoading: boolean;
	error: string;
}

const initialState: videosState = {
	videos: [],
	sortedVideos: [],
	likedVideos: [],
	query: '',
	isLoading: false,
	error: '',
};

export const videosSlice = createSlice({
	name: 'videos',
	initialState,
	reducers: {
		videosFetching(state) {
			state.isLoading = true;
		},
		videosFetchingSuccess(state, action: PayloadAction<any>) {
			state.isLoading = false;
			state.error = '';
			state.videos = action.payload;
		},
		videosFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setQuery(state, action: PayloadAction<string>) {
			state.query = action.payload;
		},
		sortVideosByQuery(
			state,
			action: PayloadAction<{ videos: any; query: string }>
		) {
			if (action.payload.query !== '') {
				state.sortedVideos = [...action.payload.videos].filter((video) =>
					video.snippet.title
						.toLowerCase()
						.includes(action.payload.query.toLowerCase())
				);
			} else {
				state.sortedVideos = [...state.videos];
			}
		},
		likedVideosFetching(state, action: PayloadAction<VideoModel[]>) {
			state.isLoading = false;
			state.likedVideos = action.payload;
			state.error = '';
		},
	},
});

export const {
	videosFetching,
	videosFetchingSuccess,
	videosFetchingError,
	likedVideosFetching,
	setQuery,
	sortVideosByQuery,
} = videosSlice.actions;

export default videosSlice.reducer;
