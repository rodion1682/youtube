import { useEffect, useState } from 'react';
import { classNames } from '../../shared/lib/classNames/classNames';
import Button, { ButtonTheme } from '../../shared/ui/Button/Button';
import cls from './LogInPage.module.scss';
import LogInInput from '../../shared/ui/LogInInput/LogInInput';
import { useAppDispatch } from '../../app/store/hooks/redux';
import { userFetching } from '../../app/store/slices/userSlice';

interface LogInPageProps {
	className?: string;
}

export const LOGIN_USER = 'login_user';

export const LogInPage = (props: LogInPageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [activeInput, setActiveInput] = useState<string | null>(null);

	const [signinName, setSignInName] = useState('');
	const [signinPassword, setSignInPassword] = useState('');

	const handleActive = (inputName: string) => {
		setActiveInput(inputName);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			!event.target ||
			!(event.target as HTMLElement).closest(`.${cls.LogInPage__input}`)
		) {
			setActiveInput(null);
		}
	};

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(userFetching(signinName));
		localStorage.setItem(LOGIN_USER, signinName);
	};
	useEffect(() => {
		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className={classNames(cls.LogInPage, {}, [className])}>
			<div className={cls.LogInPage__content}>
				<div className={cls.LogInPage__title}>Log in</div>
				<form className={cls.LogInPage__signIn} onSubmit={handleLogin}>
					<LogInInput
						className={classNames(
							cls.LogInPage__input,
							{
								[cls.LogInPage__input_active]:
									activeInput === 'username_signin',
							},
							[]
						)}
						value={signinName}
						onChange={(e) => setSignInName(e.target.value)}
						onClick={() => handleActive('username_signin')}
						placeholder="Username"
					/>
					<LogInInput
						className={classNames(
							cls.LogInPage__input,
							{
								[cls.LogInPage__input_active]:
									activeInput === 'password_signin',
							},
							[]
						)}
						value={signinPassword}
						onChange={(e) => setSignInPassword(e.target.value)}
						onClick={() => handleActive('password_signin')}
						placeholder="Password"
						type="password"
						autoComplete="current-password"
					/>
					<Button
						theme={ButtonTheme.SUBSCRIBE}
						className={cls.LogInPage__button}
						type="submit"
					>
						Log in
					</Button>
				</form>
			</div>
		</div>
	);
};
