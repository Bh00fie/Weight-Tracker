import React from 'react';
import '../Hero.css';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import Container from '@mui/material/Container';
import heroVideo from './HeroVideo.mp4';
import ControlIcons from '../ControlIcons.jsx';

function Hero() {
	return (
		<>
			<hero className='hero__section'>
				<p className='hero__text'>Video</p>
			</hero>
			<Container maxWidth="md">
				<div className='playerDiv'>
				<ReactPlayer 
				width={'100%'} 
				height='100%' 
				url={heroVideo}
				playing
				muted
				controls
				/>
				<ControlIcons/>
				</div>
      		</Container>
		</>		
	);
};

export default Hero;