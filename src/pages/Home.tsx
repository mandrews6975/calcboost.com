import { withTheme, withWidth, Typography, Button } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { Shop } from '@material-ui/icons/';
import '../assets/styles/pages/Home.css';
import headerUI from '../assets/img/ui/hero_header_ui.png';

interface Props {
	theme: Theme;
	width: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function Home(props: Props) {
	return (
		<div>
			<div
				className='hero-header content-width'
				style={{
					display: 'flex',
					flexDirection:
						props.width != 'xs' && props.width != 'sm' ? 'row' : 'column',
					alignItems: 'center',
					justifyContent:
						props.width != 'xs' && props.width != 'sm'
							? 'space-between'
							: 'center',
				}}
			>
				<div className='hero-header-title-div'>
					<Typography
						className='hero-header-title'
						variant='h1'
						style={{
							textAlign:
								props.width != 'xs' && props.width != 'sm' ? 'left' : 'center',
							fontFamily: 'Roboto',
							fontWeight: 900,
							fontSize:
								props.width != 'xs' && props.width != 'sm' ? '3rem' : '2.5rem',
						}}
					>
						Powerful mathematics in a clean, efficient interface
					</Typography>
					{props.width != 'xs' && props.width != 'sm' && (
						<a href='https://play.google.com/store/apps/details?id=dev.michaelandrews.calcboost&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
							<img
								className='gp-button'
								alt='Get it on Google Play'
								src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
							/>
						</a>
					)}
				</div>
				<img
					className='header-ui'
					style={{ width: '500px', maxWidth: window.innerWidth * 0.9 }}
					src={headerUI}
					alt='header UI screenshots'
				/>
				{(props.width == 'xs' || props.width == 'sm') && (
					<a href='https://play.google.com/store/apps/details?id=dev.michaelandrews.calcboost&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
						<img
							className='gp-button'
							alt='Get it on Google Play'
							src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
						/>
					</a>
				)}
			</div>
			<div className='overview-pane'>
				<div className='overview-div'></div>
			</div>
		</div>
	);
}

export default withWidth()(withTheme(Home));
