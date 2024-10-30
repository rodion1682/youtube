import { classNames } from '../../../lib/classNames/classNames';
import { AvatarIcon } from '../../AvatarIcon/AvatarIcon';
import SvgIcon from '../../SvgIcon/SvgIcon';
import cls from './Comment.module.scss';
import { ReactComponent as LikeIcon } from '../../../assets/like.svg';
import { roundNumber } from '../../../lib/roundNumber/roundNumber';

interface CommentProps {
	className?: string;
	image?: string;
	name?: string;
	date?: string;
	text?: string;
	likeCount: string;
}

const Comment = (props: CommentProps) => {
	const { className, image, name, date, text, likeCount } = props;

	return (
		<div className={classNames(cls.Comment, {}, [className])}>
			<AvatarIcon image={image} />
			<div className={cls.Comment__content}>
				<div className={cls.Comment__info}>
					<div className={cls.Comment__name}>{name}</div>
					<div className={cls.Comment__date}>{date}</div>
				</div>
				<div className={cls.Comment__text}>
					<p>{text}</p>
				</div>
				<div className={cls.Comment__actions}>
					<span className={classNames(cls.Comment__like, {}, [])}>
						<SvgIcon>
							<LikeIcon />
						</SvgIcon>
						<p>{roundNumber(likeCount)}</p>
					</span>
					<span
						className={classNames(cls.Comment__like, {}, [
							cls.Comment__like_rotate,
						])}
					>
						<SvgIcon>
							<LikeIcon />
						</SvgIcon>
					</span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default Comment;
