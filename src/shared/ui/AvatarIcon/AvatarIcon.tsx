import { classNames } from '../../lib/classNames/classNames';
import cls from './AvatarIcon.module.scss';

interface AvatarIconProps {
	className?: string;
	image?: string;
}

export const AvatarIcon = ({ className, image }: AvatarIconProps) => {
	return (
		<div className={classNames(cls.AvatarIcon_ibg, {}, [className])}>
			<img src={image} alt="" />
		</div>
	);
};
