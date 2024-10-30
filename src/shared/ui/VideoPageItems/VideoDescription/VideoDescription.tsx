import { useRef, useState } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import { getTimeDifference } from '../../../lib/getTimeDifference/getTimeDifference';
import { roundNumber } from '../../../lib/roundNumber/roundNumber';
import { _slideToggle } from '../../../lib/spoller/spoller';
import cls from './VideoDescription.module.scss';
import Button from '../../Button/Button';

interface VideoDescriptionProps {
	className?: string;
	views: string;
	date: string;
	text?: string;
}

const VideoDescription = (props: VideoDescriptionProps) => {
	const { className, views, date, text } = props;
	const textRef = useRef<HTMLParagraphElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	const toggleTextVisibility = () => {
		if (textRef.current) {
			_slideToggle(textRef.current, 500);
			setIsOpen((prev) => !prev);
		}
	};
	return (
		<div className={classNames(cls.VideoDescription, {}, [className])}>
			<div className={cls.VideoDescription__info}>
				<div className={cls.VideoDescription__items}>
					<span>{roundNumber(views)} views</span>
					<span>{getTimeDifference(date)}</span>
				</div>
				<Button
					onClick={toggleTextVisibility}
					className={cls.VideoDescription__toggleButton}
				>
					{isOpen ? 'Hide' : '	Show'} description
				</Button>
			</div>

			<div className={cls.VideoDescription__text}>
				<p ref={textRef} hidden>
					{text}
				</p>
			</div>
		</div>
	);
};

export default VideoDescription;
