export interface VideoModel {
	id: string;
	snippet: {
		channelId: string;
		title: string;
		channelTitle: string;
		publishedAt: string;
		viewCount: string;
		description: string;
		thumbnails: {
			medium: {
				url: string;
			};
			maxres: {
				url: string;
			};
			high: {
				url: string;
			};
		};
	};
	statistics: {
		viewCount: string;
		likeCount: string;
	};
}
