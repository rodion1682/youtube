import { Link } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';
import Button from '../Button/Button';
import cls from './SignIn.module.scss';
import { useContext } from 'react';
import { IsOpenContext } from '../../../app/context/IsOpenContext/IsOpenContext';
import useWindowWidth from '../../lib/useWindowWidth/useWindowWidth';

interface SignInProps {
	className?: string;
	to: string;
}

const SignIn = ({ className, to }: SignInProps) => {
	const windowWidth = useWindowWidth();
	const isMobileView = windowWidth <= 767.98;
	const context = useContext(IsOpenContext);
	if (!context) {
		return null;
	}

	const { setIsOpen } = context;

	const handleClick = () => {
		if (isMobileView) {
			setIsOpen(false);
		}
	};
	return (
		<Link to={to}>
			<Button
				className={classNames(cls.SignIn, {}, [className])}
				onClick={handleClick}
			>
				Sign in
			</Button>
		</Link>
	);
};

export default SignIn;
