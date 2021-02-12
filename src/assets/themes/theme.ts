import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from './colors';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: colors.primary['200'],
			light: colors.primary['100'],
			dark: colors.primary['400'],
		},
		secondary: {
			main: colors.secondary['50'],
			light: colors.secondary['50'],
			dark: colors.secondary['900'],
		},
		error: {
			main: colors.error['300'],
			light: colors.error['200'],
			dark: colors.error['500'],
		},
		warning: {
			main: colors.warning['200'],
			light: colors.warning['100'],
			dark: colors.warning['400'],
		},
		info: {
			main: colors.info['200'],
			light: colors.info['100'],
			dark: colors.info['400'],
		},
		success: {
			main: colors.success['200'],
			light: colors.success['100'],
			dark: colors.success['400'],
		},
		grey: {
			50: colors.grays['50'],
			100: colors.grays['100'],
			200: colors.grays['200'],
			300: colors.grays['300'],
			400: colors.grays['400'],
			500: colors.grays['500'],
			600: colors.grays['600'],
			700: colors.grays['700'],
			800: colors.grays['800'],
			900: colors.grays['900'],
		},
		background: {
			paper: colors.grays['50'],
			default: colors.grays['100'],
		},
	},
	typography: {
		fontFamily: ['Nunito', 'sans-serif'].join(','),
	},
	shape: {
		borderRadius: 8,
	},
});

export default theme;
