import { RoutePath } from '../../app/router/routeConfix';
import { classNames } from '../../shared/lib/classNames/classNames';
import Logo from '../../shared/ui/Logo/Logo';
import Search from '../../shared/ui/Search/Search';
import cls from './Navbar.module.scss';
import DisplayUserIcon from '../../shared/ui/DisplayUserIcon/DisplayUserIcon';
import useWindowWidth from '../../shared/lib/useWindowWidth/useWindowWidth';
import BurgerIcon from '../../shared/ui/BurgerIcon/BurgerIcon';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	const windowWidth = useWindowWidth();
	const isMobileView = windowWidth <= 767.98;
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			{isMobileView && <BurgerIcon />}
			<Logo className={cls.Navbar__logo} to={RoutePath.main_random} />
			<div className={cls.Navbar__search}>
				<Search />
			</div>
			{!isMobileView && <DisplayUserIcon />}
		</div>
	);
};

export default Navbar;
