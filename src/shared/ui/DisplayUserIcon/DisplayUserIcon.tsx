import { RoutePath } from '../../../app/router/routeConfix';
import { useAppSelector } from '../../../app/store/hooks/redux';
import { classNames } from '../../lib/classNames/classNames';
import { AvatarIcon } from '../AvatarIcon/AvatarIcon';
import SignIn from '../SignIn/SignIn';
import cls from './DisplayUserIcon.module.scss';

interface DisplayUserIconProps {
	className?: string;
	onClick?: () => void;
}

const DisplayUserIcon = ({ className }: DisplayUserIconProps) => {
	const { currentUser } = useAppSelector((state) => state.user);
	return (
		<div className={classNames(cls.DisplayUserIcon, {}, [className])}>
			{currentUser ? (
				<div className={cls.DisplayUserIcon__user}>
					<div className={cls.DisplayUserIcon__name}>{currentUser}</div>
				</div>
			) : (
				<SignIn
					to={RoutePath.login}
					className={cls.DisplayUserIcon__signin}
				/>
			)}
		</div>
	);
};

export default DisplayUserIcon;
