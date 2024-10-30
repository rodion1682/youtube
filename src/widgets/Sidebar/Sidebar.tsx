import cls from './Sidebar.module.scss';
import { ReactComponent as HomeIcon } from '../../shared/assets/home.svg';
import { ReactComponent as LikeIcon } from '../../shared/assets/like.svg';
import { ReactComponent as TrendingIcon } from '../../shared/assets/trend.svg';
import { ReactComponent as GamingIcon } from '../../shared/assets/gaming.svg';
import { classNames } from '../../shared/lib/classNames/classNames';
import SidebarLink from '../../shared/ui/SidebarLink/SidebarLink';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { FC, useContext, useEffect, useState } from 'react';
import { SvgSize } from '../../shared/ui/SvgIcon/SvgIcon';
import { IsOpenContext } from '../../app/context/IsOpenContext/IsOpenContext';
import SignIn from '../../shared/ui/SignIn/SignIn';
import BurgerIcon from '../../shared/ui/BurgerIcon/BurgerIcon';
import { RoutePath } from '../../app/router/routeConfix';
import { useAppSelector } from '../../app/store/hooks/redux';
import useWindowWidth from '../../shared/lib/useWindowWidth/useWindowWidth';
import DisplayUserIcon from '../../shared/ui/DisplayUserIcon/DisplayUserIcon';

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
	const windowWidth = useWindowWidth();
	const isMobileView = windowWidth <= 767.98;
	const { currentUser } = useAppSelector((state) => state.user);
	const context = useContext(IsOpenContext);
	const [isActive, setIsActive] = useState('Home');

	if (!context) {
		return null;
	}

	const { isOpen, setIsOpen } = context;

	const handleActive = (text: string) => {
		setIsActive(text);
		if (isMobileView) {
			setIsOpen(false);
		}
	};

	const sidebarLinks = [
		{ to: RoutePath.main_random, text: 'Home', icon: <HomeIcon /> },
		{ to: RoutePath.liked_videos, text: 'Liked videos', icon: <LikeIcon /> },
		{ to: RoutePath.main_trend, text: 'Trending', icon: <TrendingIcon /> },
		{ to: RoutePath.main_gaming, text: 'Gaming', icon: <GamingIcon /> },
	];

	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: isOpen }, [
				className,
			])}
		>
			{!isMobileView && (
				<div className={cls.Burger}>
					<BurgerIcon />
				</div>
			)}

			<div className={cls.Sidebar__content}>
				{sidebarLinks.map((link) => (
					<SidebarLink
						key={link.text}
						to={link.to}
						className={classNames(cls.hoverIcon, {
							[cls.hoverIcon__active]: isActive === link.text,
						})}
						icon={link.icon}
						text={link.text}
						size={SvgSize.XL}
						onClick={() => handleActive(link.text)}
					/>
				))}
			</div>
			<div className={cls.Bottom}>
				{!currentUser && !isMobileView && (
					<SignIn to={RoutePath.login} className={cls.Bottom__signIn} />
				)}
				{isMobileView && <DisplayUserIcon />}
				<div>
					<ThemeSwitcher className={cls.hoverIcon} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
