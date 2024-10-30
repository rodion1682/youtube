import { LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
	className?: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
	const { to, className, children, ...otherProps } = props;
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className])}
			{...otherProps}
		>
			{' '}
			{children}
		</Link>
	);
};

export default AppLink;
