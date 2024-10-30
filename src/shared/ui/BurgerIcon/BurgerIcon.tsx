import { useContext, useEffect } from 'react';
import cls from './BurgerIcon.module.scss';
import Button from '../Button/Button';
import { classNames } from '../../lib/classNames/classNames';
import { IsOpenContext } from '../../../app/context/IsOpenContext/IsOpenContext';

interface BurgerIconProps {
	className?: string | undefined;
}

const BurgerIcon = ({ className }: BurgerIconProps) => {
	const context = useContext(IsOpenContext);

	useEffect(() => {
		if (context?.isOpen) {
			document.documentElement.classList.add('active');
		} else {
			document.documentElement.classList.remove('active');
		}

		return () => {
			document.documentElement.classList.remove('active');
		};
	}, [context?.isOpen]);

	if (!context) {
		return null;
	}

	const { isOpen, setIsOpen } = context;

	const openHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Button
			className={classNames(cls.BurgerIcon, {}, [className])}
			onClick={openHandler}
		>
			<div
				className={classNames(cls.Icon, { [cls.iconOpen]: isOpen }, [
					className,
				])}
			>
				<span></span>
			</div>
		</Button>
	);
};

export default BurgerIcon;
