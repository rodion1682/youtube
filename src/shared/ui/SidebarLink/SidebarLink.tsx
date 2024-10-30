import { FC, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import AppLink from '../AppLink/AppLink';
import SvgIcon, { SvgSize } from '../SvgIcon/SvgIcon';

interface SidebarLinkProps {
	className?: string;
	to: string;
	icon?: ReactNode;
	text?: ReactNode;
	size?: SvgSize;
	onClick?: () => void;
	likeCount?: number;
}

const SidebarLink: FC<SidebarLinkProps> = (props) => {
	const { to, icon, text, size, className, onClick, likeCount } = props;

	return (
		<AppLink
			onClick={onClick}
			to={to}
			className={classNames('', {}, [className])}
		>
			<SvgIcon size={size}>{icon}</SvgIcon>
			<span>{text}</span>
		</AppLink>
	);
};

export default SidebarLink;
