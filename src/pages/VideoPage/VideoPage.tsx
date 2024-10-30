import { useAppDispatch, useAppSelector } from '../../app/store/hooks/redux';
import { classNames } from '../../shared/lib/classNames/classNames';
import cls from './VideoPage.module.scss';
import avatar from '../../shared/assets/avatar.jpg';
import Comment from '../../shared/ui/VideoPageItems/Comment/Comment';
import VideoDescription from '../../shared/ui/VideoPageItems/VideoDescription/VideoDescription';
import VideoInfo from '../../shared/ui/VideoPageItems/VideoInfo/VideoInfo';
import VideoPlayer from '../../shared/ui/VideoPageItems/VideoPlayer/VideoPlayer';

import { useEffect } from 'react';
import {
	fetchChannelData,
	fetchVideoDetails,
	fetchComments,
	fetchRelatedVideos,
} from '../../app/services/videoDetails';
import { Loader } from '../../shared/ui/Loader/Loader';
import { videoType } from '../../shared/lib/videoType/videoType';
import VideoItem, { VideoItemStyle } from '../../widgets/VideoItem/VideoItem';
import { getTimeDifference } from '../../shared/lib/getTimeDifference/getTimeDifference';
import { useLocation } from 'react-router-dom';

interface VideoPageProps {
	className?: string;
}

const VideoPage = ({ className }: VideoPageProps) => {
	const dispatch = useAppDispatch();
	const { video, chanel, comments, related, isLoading } = useAppSelector(
		(state) => state.video
	);
	const location = useLocation();
	const currentUrl = location.pathname;
	const [type, videoId] = currentUrl.split('/').slice(-2);
	const channelId = video?.snippet?.channelId as string;
	const typeRewriten = videoType(type);

	useEffect(() => {
		if (videoId) {
			dispatch(fetchVideoDetails(videoId));
			dispatch(fetchComments(videoId));
		}
		if (channelId) {
			dispatch(fetchChannelData(channelId));
		}
		if (typeRewriten) {
			dispatch(fetchRelatedVideos(typeRewriten));
		}
	}, [location.pathname]);

	return (
		<div className={classNames(cls.VideoPage, {}, [className])}>
			{isLoading ? (
				<Loader />
			) : (
				video &&
				chanel &&
				comments &&
				related && (
					<>
						<div className={cls.VideoPage__contenct}>
							<VideoPlayer
								className={cls.VideoPage__player}
								id={videoId}
							/>
							<VideoInfo
								className={cls.VideoPage__info}
								title={video?.snippet?.title}
								image={chanel?.snippet?.thumbnails?.default.url}
								name={video?.snippet?.channelTitle}
								subscribersCount={chanel?.statistics?.subscriberCount}
								likesCount={video?.statistics?.likeCount}
								videoId={videoId}
							/>
							<VideoDescription
								className={cls.VideoPage__description}
								views={video?.statistics?.viewCount}
								date={video?.snippet?.publishedAt}
								text={video?.snippet?.description}
							/>
							{comments.map((comment: any, index: number) => (
								<Comment
									key={index}
									className={cls.VideoPage__comment}
									image={
										comment?.snippet.topLevelComment.snippet
											.authorProfileImageUrl
									}
									name={
										comment?.snippet.topLevelComment.snippet
											.authorDisplayName
									}
									likeCount={
										comment?.snippet.topLevelComment.snippet.likeCount
									}
									date={'2 years ago'}
									text={
										comment?.snippet.topLevelComment.snippet
											.textDisplay
									}
								/>
							))}
						</div>
						<div className={cls.VideoPage__recommendations}>
							{related.map((videoRelated: any) => (
								<VideoItem
									name={videoRelated.snippet.channelTitle}
									type={type}
									image={videoRelated.snippet.thumbnails.medium.url}
									style={VideoItemStyle.HORIZONTAL}
									key={videoRelated.id}
									id={videoRelated.id}
									className={cls.VideoPage__sideVideo}
									title={videoRelated.snippet.title}
									viewCount={videoRelated.statistics?.viewCount}
									date={getTimeDifference(
										videoRelated.snippet.publishedAt
									)}
								/>
							))}
						</div>
					</>
				)
			)}
		</div>
	);
};

export default VideoPage;
