import { Link } from 'react-router-dom';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Logo.module.scss';
import { FC, ReactNode } from 'react';
import logo from '../../assets/logo.png';

interface LogoProps {
	className?: string;
	children?: ReactNode;
	to: string;
}

const Logo: FC<LogoProps> = (props) => {
	const { className, to } = props;
	return (
		<Link className={classNames(cls.Logo, {}, [className])} to={to}>
			<img src={logo} alt="" />
			<span>YouTube</span>
		</Link>
	);
};

export default Logo;
