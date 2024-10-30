export interface CommentModel {
	snippet: {
		topLevelComment: {
			snippet: {
				authorProfileImageUrl: string;
				authorDisplayName: string;
				likeCount: string;
				textDisplay: string;
			};
		};
	};
}
