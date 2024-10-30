import { Link } from 'react-router-dom';
import { classNames } from '../../shared/lib/classNames/classNames';
import cls from './VideoItem.module.scss';
import { FC } from 'react';
import { RoutePath } from '../../app/router/routeConfix';
import { getTimeDifference } from '../../shared/lib/getTimeDifference/getTimeDifference';
import { roundNumber } from '../../shared/lib/roundNumber/roundNumber';
interface VideoItemProps {
	className?: string;
	id: string;
	image?: string;
	avatar?: string;
	title?: string;
	viewCount: string;
	date: string;
	style?: VideoItemStyle;
	type: string;
	name?: string;
}

export enum VideoItemStyle {
	VERTICAL = 'vertical',
	HORIZONTAL = 'horizontal',
}

const VideoItem: FC<VideoItemProps> = (props) => {
	const {
		className,
		id,
		image,
		name,
		title,
		viewCount,
		date,
		type,
		style = VideoItemStyle.VERTICAL,
	} = props;

	return (
		<Link
			className={classNames(cls.VideoItem, {}, [className, cls[style]])}
			to={RoutePath.video + `/${type}` + `/${id}`}
		>
			<div className={cls.VideoItem__image_ibg}>
				<img src={image} />
			</div>
			<div className={cls.VideoItem__bottom}>
				<div className={cls.VideoItem__description}>
					<div className={cls.VideoItem__title}>{title}</div>
					<div className={cls.VideoItem__name}>{name}</div>
					<div className={cls.VideoItem__info}>
						<div className={cls.VideoItem__views}>
							{roundNumber(viewCount)} views
						</div>
						<div className={cls.VideoItem__date}>
							{getTimeDifference(date)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default VideoItem;
