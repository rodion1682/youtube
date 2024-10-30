import { useTheme } from '../../app/providers/ThemeProvider/useTheme';
import { classNames } from '../../shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '../../shared/ui/Button/Button';
import SvgIcon from '../../shared/ui/SvgIcon/SvgIcon';
import { ReactComponent as ThemeIcon } from '../../shared/assets/theme.svg';

interface ThemeSwitcherProps {
	className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
	const { toggleTheme } = useTheme();
	return (
		<Button
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
			theme={ButtonTheme.THEME}
		>
			<SvgIcon>
				<ThemeIcon />
			</SvgIcon>
		</Button>
	);
}
