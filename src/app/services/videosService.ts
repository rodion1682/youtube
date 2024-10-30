import axios from 'axios';
import { AppDispatch } from '../store/store';
import {
	videosFetching,
	videosFetchingSuccess,
	videosFetchingError,
	likedVideosFetching,
} from '../store/slices/videosSlice';
import { LIKED_VIDEOS_KEY } from './localStorage/likedVideos.service';
import { VideoModel } from '../store/models/VideoModel';

const KEY = process.env.REACT_APP_KEY;
const URL = process.env.REACT_APP_URL;

interface YouTubeApiResponse {
	items: VideoModel[];
}

export const fetchVideos = (type: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(videosFetching());

		const res = await axios.get<YouTubeApiResponse>(
			`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${type}&key=${KEY}`
		);

		dispatch(videosFetchingSuccess(res.data.items));
	} catch (error) {
		if (error instanceof Error) {
			dispatch(videosFetchingError(error.message));
		}
	}
};

export const fetchLikedVideos = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(videosFetching());
		const likedVideosIds = localStorage.getItem(LIKED_VIDEOS_KEY);

		if (!likedVideosIds) {
			dispatch(likedVideosFetching([]));
			return;
		}

		const likedVideosArray: string[] = JSON.parse(likedVideosIds);

		const result = await Promise.all(
			likedVideosArray.map(async (id: string) => {
				const res = await axios.get<YouTubeApiResponse>(
					`${URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${KEY}`
				);
				return res.data.items[0];
			})
		);

		dispatch(likedVideosFetching(result));
	} catch (error) {
		if (error instanceof Error) {
			dispatch(videosFetchingError(error.message));
		}
	}
};
