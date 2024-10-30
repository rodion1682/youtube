import { FC, ReactNode } from 'react';
import cls from './SvgIcon.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export enum SvgSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface SvgIconProps {
	className?: string;
	children?: ReactNode;
	size?: SvgSize;
}

const SvgIcon: FC<SvgIconProps> = (props) => {
	const { className, children, size = SvgSize.M } = props;
	return (
		<div className={classNames(cls.SvgIcon, {}, [className, cls[size]])}>
			{children}
		</div>
	);
};

export default SvgIcon;
