import './styles/index.scss';
import Sidebar from '../widgets/Sidebar/Sidebar';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/useTheme';
import { AppRouter } from './router/AppRouter';
import Navbar from '../widgets/Navbar/Navbar';
import { IsOpenContext } from './context/IsOpenContext/IsOpenContext';
import { useEffect, useState } from 'react';
import { LOGIN_USER } from '../pages/LogInPage/LogInPage';
import { userFetching } from './store/slices/userSlice';
import { useAppDispatch } from './store/hooks/redux';
import ScrollToTop from '../shared/lib/scrollToTop/scrollToTop';
import useWindowWidth from '../shared/lib/useWindowWidth/useWindowWidth';

function App() {
	const windowWidth = useWindowWidth();
	const isMobileView = windowWidth <= 767.98;
	const { theme } = useTheme();
	const dispatch = useAppDispatch();

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem(LOGIN_USER);
		if (user) {
			dispatch(userFetching(user));
		}
	}, []);

	useEffect(() => {
		setIsOpen(false);
	}, [isMobileView]);

	return (
		<IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
			<div className={classNames('app', {}, [theme])}>
				<Sidebar />
				<div
					className={classNames('main', { ['main__reduced']: isOpen }, [])}
				>
					<Navbar />
					<ScrollToTop />
					<AppRouter />
				</div>
			</div>
		</IsOpenContext.Provider>
	);
}

export default App;
