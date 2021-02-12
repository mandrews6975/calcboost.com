import { useState } from 'react';
import {
	Button,
	Typography,
	withTheme,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	withWidth,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { Menu, Close, Code, Policy } from '@material-ui/icons/';
import { useHistory } from 'react-router-dom';
import '../assets/styles/global.css';
import '../assets/styles/components/AppBar.css';
import icon from '../assets/img/icon.png';

interface Props {
	theme: Theme;
	width: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function AppBar(props: Props) {
	const [listOpen, setListOpen] = useState(false);
	const history = useHistory();
	return (
		<div>
			<div className='app-bar'>
				<div className='tool-bar'>
					<div className='icon-div'>
						<img className='icon' src={icon} alt='CalcBoost icon' />
						<Typography variant='h5'>CalcBoost</Typography>
					</div>
					{props.width != 'xs' && props.width != 'sm' && (
						<div className='app-bar-menu-div'>
							<Button
								style={{ marginRight: '16px' }}
								color='inherit'
								startIcon={<Code />}
								onClick={() =>
									window.open('https://michaelandrews.dev', '_blank')
								}
							>
								The Developer
							</Button>
							<Button
								color='inherit'
								startIcon={<Policy />}
								onClick={() => history.push('/app/privacy')}
							>
								Privacy Policy
							</Button>
						</div>
					)}
					{(props.width == 'xs' || props.width == 'sm') && (
						<IconButton color='inherit' onClick={() => setListOpen(!listOpen)}>
							{listOpen ? <Close /> : <Menu />}
						</IconButton>
					)}
				</div>
			</div>
			{listOpen && (props.width == 'xs' || props.width == 'sm') && (
				<List className='app-bar-list'>
					<ListItem
						button
						onClick={() => window.open('https://michaelandrews.dev', '_blank')}
					>
						<ListItemIcon>
							<Code style={{ color: 'hsl(0, 0%, 13%)' }} />
						</ListItemIcon>
						<ListItemText>The Developer</ListItemText>
					</ListItem>
					<ListItem button onClick={() => history.push('/app/privacy')}>
						<ListItemIcon>
							<Policy style={{ color: 'hsl(0, 0%, 13%)' }} />
						</ListItemIcon>
						<ListItemText>Privacy Policy</ListItemText>
					</ListItem>
				</List>
			)}
		</div>
	);
}

export default withWidth()(withTheme(AppBar));
