import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChanelModel } from '../models/ChanelModel';
import { VideoModel } from '../models/VideoModel';
import { CommentModel } from '../models/CommentModel';

interface videoState {
	video: VideoModel;
	chanel: ChanelModel;
	comments: CommentModel[];
	related: VideoModel[];
	isLoading: boolean;
	error: string;
}

const initialState: videoState = {
	video: {
		id: '',
		snippet: {
			channelId: '',
			title: '',
			channelTitle: '',
			publishedAt: '',
			viewCount: '',
			description: '',
			thumbnails: {
				medium: {
					url: '',
				},
				maxres: {
					url: '',
				},
				high: {
					url: '',
				},
			},
		},
		statistics: {
			viewCount: '',
			likeCount: '',
		},
	},
	chanel: {
		snippet: {
			thumbnails: {
				default: {
					url: '',
				},
			},
		},
		statistics: {
			subscriberCount: '',
		},
	},
	comments: [],
	related: [],
	isLoading: false,
	error: '',
};

export const videoSlice = createSlice({
	name: 'videos',
	initialState,
	reducers: {
		videoFetching(state) {
			state.isLoading = true;
		},
		videoFetchingSuccess(state, action: PayloadAction<any>) {
			state.error = '';
			state.video = action.payload;
		},

		videoChanelFetching(state, action: PayloadAction<any>) {
			state.chanel = action.payload;
		},
		videoCommentFetching(state, action: PayloadAction<any>) {
			state.comments = action.payload;
		},
		videoRelatedFetching(state, action: PayloadAction<any>) {
			state.isLoading = false;
			state.related = action.payload;
		},
		videoFetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {
	videoFetching,
	videoFetchingSuccess,
	videoFetchingError,
	videoChanelFetching,
	videoCommentFetching,
	videoRelatedFetching,
} = videoSlice.actions;

export default videoSlice.reducer;
