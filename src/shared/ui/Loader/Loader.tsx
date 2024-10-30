import { classNames } from '../../lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export function Loader({ className }: LoaderProps) {
	return <span className={classNames(cls.Loader, {}, [className])} />;
}
