import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks/redux';
import { classNames } from '../../shared/lib/classNames/classNames';
import VideoItem from '../../widgets/VideoItem/VideoItem';
import cls from './MainPage.module.scss';
import { Loader } from '../../shared/ui/Loader/Loader';
import { fetchVideos } from '../../app/services/videosService';
import { videoType } from '../../shared/lib/videoType/videoType';
import { sortVideosByQuery } from '../../app/store/slices/videosSlice';

interface MainPageProps {
	className?: string;
	type: string;
}

const MainPage = (props: MainPageProps) => {
	const { className, type } = props;
	const dispatch = useAppDispatch();
	const { videos, isLoading, sortedVideos, query } = useAppSelector(
		(state) => state.videos
	);

	const typeRewriten = videoType(type);

	useEffect(() => {
		dispatch(fetchVideos(typeRewriten));
	}, [typeRewriten]);

	useEffect(() => {
		dispatch(sortVideosByQuery({ videos, query }));
	}, [videos]);

	return (
		<div className={classNames(cls.MainPage, {}, [className])}>
			{isLoading ? (
				<Loader className={cls.MainPageLoader} />
			) : sortedVideos && sortedVideos.length === 0 ? (
				<p className={cls.MainPage__label}>No videos found</p>
			) : (
				sortedVideos &&
				sortedVideos.map((video) => (
					<VideoItem
						type={type}
						key={video.id}
						id={video.id}
						className={cls.item}
						image={
							video.snippet.thumbnails.maxres?.url ||
							video.snippet.thumbnails.high?.url
						}
						name={video.snippet.channelTitle}
						title={video.snippet.title}
						viewCount={video.statistics.viewCount}
						date={video.snippet.publishedAt}
					/>
				))
			)}
		</div>
	);
};

export default MainPage;
