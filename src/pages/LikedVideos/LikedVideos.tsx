import { useEffect } from 'react';
import { classNames } from '../../shared/lib/classNames/classNames';
import cls from './LikedVideos.module.scss';
import { fetchLikedVideos } from '../../app/services/videosService';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks/redux';
import VideoItem, { VideoItemStyle } from '../../widgets/VideoItem/VideoItem';
import { Loader } from '../../shared/ui/Loader/Loader';

interface LikedVideosProps {
	className?: string;
}

const LikedVideos = ({ className }: LikedVideosProps) => {
	const dispatch = useAppDispatch();
	const { likedVideos, isLoading } = useAppSelector((state) => state.videos);

	useEffect(() => {
		dispatch(fetchLikedVideos());
	}, []);

	return (
		<div className={classNames(cls.LikedVideos, {}, [className])}>
			{isLoading ? (
				<Loader className={cls.LikedVideos__loader} />
			) : likedVideos && likedVideos.length === 0 ? (
				<p className={cls.LikedVideos__label}>No liked videos</p>
			) : (
				likedVideos &&
				likedVideos.map((video, index) => (
					<div key={video.id} className={cls.LikedVideos__wrapper}>
						<div className={cls.LikedVideos__counter}>
							{index + 1 + '.'}
						</div>
						<VideoItem
							style={VideoItemStyle.HORIZONTAL}
							type={'random'}
							key={video.id}
							id={video.id}
							className={cls.LikedVideos__video}
							image={video.snippet.thumbnails.medium.url}
							name={video.snippet.channelTitle}
							title={video.snippet.title}
							viewCount={video.statistics.viewCount}
							date={video.snippet.publishedAt}
						/>
					</div>
				))
			)}
		</div>
	);
};

export default LikedVideos;
