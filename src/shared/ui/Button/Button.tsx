import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: string;
	children?: ReactNode;
}

export enum ButtonTheme {
	CLEAR = 'clear',
	SUBSCRIBE = 'subscribe',
	THEME = 'theme',
}

const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ButtonTheme.CLEAR,
		...otherProps
	} = props;
	return (
		<button
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
