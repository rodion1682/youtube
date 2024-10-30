import { RouteProps } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import VideoPage from '../../pages/VideoPage/VideoPage';
import { LogInPage } from '../../pages/LogInPage/LogInPage';
import LikedVideos from '../../pages/LikedVideos/LikedVideos';

export enum AppRoutes {
	MAIN_RANDOM = 'main_random',
	MAIN_TREND = 'main_trend',
	MAIN_GAMING = 'main_gaming',
	LIKED_VIDEOS = 'liked_videos',
	VIDEO = 'video',
	LOGIN = 'login',
	NOT_FOUND = 'not_found',
}

export enum MainPageTypes {
	RANDOM = 'random',
	TREND = 'trend',
	GAMING = 'gaming',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN_RANDOM]: `youtube/`,
	[AppRoutes.MAIN_TREND]: 'youtube/trend',
	[AppRoutes.MAIN_GAMING]: 'youtube/gaming',
	[AppRoutes.LIKED_VIDEOS]: 'youtube/likedVideos',
	[AppRoutes.VIDEO]: '/youtube/video',
	[AppRoutes.LOGIN]: 'youtube/login',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN_RANDOM]: {
		path: RoutePath.main_random,
		element: <MainPage type={MainPageTypes.RANDOM} />,
	},
	[AppRoutes.MAIN_TREND]: {
		path: RoutePath.main_trend,
		element: <MainPage type={MainPageTypes.TREND} />,
	},
	[AppRoutes.MAIN_GAMING]: {
		path: RoutePath.main_gaming,
		element: <MainPage type={MainPageTypes.GAMING} />,
	},
	[AppRoutes.LIKED_VIDEOS]: {
		path: RoutePath.liked_videos,
		element: <LikedVideos />,
	},
	[AppRoutes.VIDEO]: {
		path: 'youtube/video/:type/:id',
		element: <VideoPage />,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		element: <LogInPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.main_random,
		element: <MainPage type={MainPageTypes.RANDOM} />,
	},
};
