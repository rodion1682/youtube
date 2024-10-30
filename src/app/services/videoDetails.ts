import axios from 'axios';
import { AppDispatch } from '../store/store';
import {
	videoFetching,
	videoFetchingSuccess,
	videoFetchingError,
	videoChanelFetching,
	videoCommentFetching,
	videoRelatedFetching,
} from '../store/slices/videSlice';
import { VideoModel } from '../store/models/VideoModel';
import { ChanelModel } from '../store/models/ChanelModel';
import { CommentModel } from '../store/models/CommentModel';

const KEY = process.env.REACT_APP_KEY;
const URL = process.env.REACT_APP_URL;

interface VideoApiResponse {
	items: VideoModel[];
}

interface ChannelApiResponse {
	items: ChanelModel[];
}

interface CommentApiResponse {
	items: CommentModel[];
}

export const fetchVideoDetails =
	(videoId: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(videoFetching());
			const res = await axios.get<VideoApiResponse>(
				`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${KEY}`
			);

			dispatch(videoFetchingSuccess(res.data.items[0]));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(videoFetchingError(error.message));
			}
		}
	};

export const fetchChannelData =
	(chanelId: string) => async (dispatch: AppDispatch) => {
		try {
			const res = await axios.get<ChannelApiResponse>(
				`${URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${chanelId}&key=${KEY}`
			);

			dispatch(videoChanelFetching(res.data.items[0]));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(videoFetchingError(error.message));
			}
		}
	};

export const fetchComments =
	(videoId: string) => async (dispatch: AppDispatch) => {
		try {
			const res = await axios.get<CommentApiResponse>(
				`${URL}/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${KEY}`
			);

			dispatch(videoCommentFetching(res.data.items));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(videoFetchingError(error.message));
			}
		}
	};

export const fetchRelatedVideos =
	(type: string) => async (dispatch: AppDispatch) => {
		try {
			const res = await axios.get<VideoApiResponse>(
				`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=8&videoCategoryId=${type}&key=${KEY}`
			);

			dispatch(videoRelatedFetching(res.data.items));
		} catch (error) {
			if (error instanceof Error) {
				dispatch(videoFetchingError(error.message));
			}
		}
	};
