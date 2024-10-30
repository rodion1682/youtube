import { classNames } from '../../../lib/classNames/classNames';
import { AvatarIcon } from '../../AvatarIcon/AvatarIcon';
import Button, { ButtonTheme } from '../../Button/Button';
import SvgIcon, { SvgSize } from '../../SvgIcon/SvgIcon';
import { ReactComponent as LikeIcon } from '../../../assets/like.svg';
import cls from './VideoInfo.module.scss';
import { roundNumber } from '../../../lib/roundNumber/roundNumber';
import { SetLikedVideos } from '../../../../app/services/localStorage/likedVideos.service';

interface VideoInfoProps {
	className?: string;
	title?: string;
	image?: string;
	name?: string;
	subscribersCount: string;
	likesCount: string;
	videoId: string;
}

const VideoInfo = (props: VideoInfoProps) => {
	const {
		className,
		title,
		image,
		name,
		subscribersCount,
		likesCount,
		videoId,
	} = props;

	const handleLike = () => {
		SetLikedVideos(videoId);
	};

	const handleSubscribe = () => {};

	return (
		<div className={classNames(cls.VideoInfo, {}, [className])}>
			<div className={cls.VideoInfo__title}>{title}</div>
			<div className={cls.VideoInfo__bottom}>
				<div className={cls.VideoInfo__chanel}>
					<div className={cls.VideoInfo__info}>
						<AvatarIcon image={image} />
						<div className={cls.VideoInfo__detail}>
							<div className={cls.VideoInfo__name}>{name}</div>
							<div className={cls.VideoInfo__counter}>
								<span>{roundNumber(subscribersCount)}</span>
								<span>subscribers</span>
							</div>
						</div>
					</div>
					<Button
						className={cls.VideoInfo__subscribe}
						theme={ButtonTheme.SUBSCRIBE}
					>
						Subscribe
					</Button>
				</div>
				<div className={cls.VideoInfo__buttons}>
					<Button
						className={cls.VideoInfo__button}
						theme={ButtonTheme.SUBSCRIBE}
						onClick={handleLike}
					>
						<SvgIcon size={SvgSize.XL}>
							<LikeIcon />
						</SvgIcon>
						<span>{roundNumber(likesCount)}</span>
					</Button>
					<Button
						className={classNames(cls.VideoInfo__button, {}, [
							cls.VideoInfo__button_dislike,
						])}
						onClick={handleSubscribe}
						theme={ButtonTheme.SUBSCRIBE}
					>
						<SvgIcon size={SvgSize.XL}>
							<LikeIcon />
						</SvgIcon>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default VideoInfo;
