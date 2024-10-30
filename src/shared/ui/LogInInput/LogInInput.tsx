import { forwardRef } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './LogInInput.module.scss';

interface LogInInputProps {
	className?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: () => void;
	placeholder: string;
	type?: string;
	autoComplete?: string;
}

const LogInInput = forwardRef<HTMLInputElement, LogInInputProps>(
	(
		{
			className,
			value,
			onChange,
			onClick,
			placeholder,
			type = 'text',
			autoComplete = 'off',
		},
		ref
	) => {
		return (
			<input
				className={classNames(cls.LogInInput, {}, [className])}
				ref={ref}
				value={value}
				onClick={onClick}
				placeholder={placeholder}
				onChange={onChange}
				type={type}
				autoComplete={autoComplete}
			/>
		);
	}
);

export default LogInInput;
