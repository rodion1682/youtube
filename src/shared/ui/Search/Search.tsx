import { classNames } from '../../lib/classNames/classNames';
import cls from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import SvgIcon, { SvgSize } from '../SvgIcon/SvgIcon';
import { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks/redux';
import {
	setQuery,
	sortVideosByQuery,
} from '../../../app/store/slices/videosSlice';

interface SearchProps {
	className?: string;
}

const Search = ({ className }: SearchProps) => {
	const dispatch = useAppDispatch();
	const { videos } = useAppSelector((state) => state.videos);
	const [isActive, setIsActive] = useState(false);
	const searchWrapperRef = useRef<HTMLDivElement>(null);
	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		dispatch(sortVideosByQuery({ videos: videos, query: inputValue }));
		dispatch(setQuery(inputValue));
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			searchWrapperRef.current &&
			!searchWrapperRef.current.contains(event.target as Node)
		) {
			setIsActive(false);
		}
	};
	window.addEventListener('click', handleClickOutside);

	if (!isActive) {
		window.removeEventListener('click', handleClickOutside);
	}

	return (
		<div
			className={classNames(cls.Search, {}, [className])}
			ref={searchWrapperRef}
		>
			<div
				className={classNames(
					cls.Search__wrapper,
					{ [cls.active]: isActive },
					[className]
				)}
			>
				<div className={cls.Search__icon}>
					<SvgIcon size={SvgSize.M}>
						<SearchIcon />
					</SvgIcon>
				</div>
				<input
					onClick={() => setIsActive(true)}
					type="text"
					placeholder="Search"
					className={cls.Search__input}
					value={inputValue}
					onChange={handleInputValue}
				/>
				<Button onClick={handleSubmit} className={cls.Search__button}>
					<SvgIcon size={SvgSize.M}>
						<SearchIcon />
					</SvgIcon>
				</Button>
			</div>
		</div>
	);
};
export default Search;
