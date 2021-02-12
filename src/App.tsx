import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/themes/theme';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import AppPrivacy from './pages/AppPrivacy';
import SitePrivacy from './pages/SitePrivacy';
import NotFound from './pages/NotFound';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<AppBar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/site/privacy'>
						<SitePrivacy />
					</Route>
					<Route path='/app/privacy'>
						<AppPrivacy />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
