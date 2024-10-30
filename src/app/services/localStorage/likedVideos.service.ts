export const LIKED_VIDEOS_KEY = 'liked_videos';

export function SetLikedVideos(id: string) {
	let likedVideosStorage = localStorage.getItem(LIKED_VIDEOS_KEY);
	let likedVideosStorageArray = likedVideosStorage
		? JSON.parse(likedVideosStorage)
		: [];

	if (likedVideosStorageArray.includes(id)) {
		likedVideosStorageArray = likedVideosStorageArray.filter(
			(videoId: string) => videoId !== id
		);
	} else {
		likedVideosStorageArray.push(id);
	}
	localStorage.setItem(
		LIKED_VIDEOS_KEY,
		JSON.stringify(likedVideosStorageArray)
	);
}
