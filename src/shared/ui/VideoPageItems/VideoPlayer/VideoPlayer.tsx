import { classNames } from '../../../lib/classNames/classNames';
import cls from './VideoPlayer.module.scss';

interface VideoPlayerProps {
	className?: string;
	id?: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
	const { className, id } = props;
	return (
		<div className={classNames(cls.VideoPlayer, {}, [className])}>
			{/*<iframe
				className={cls.VideoPlayer__frame_ibg}
				src={src}
				title="Youtube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>*/}
			<iframe
				className={cls.VideoPlayer__frame_ibg}
				src={`https://www.youtube.com/embed/${id}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoPlayer;
