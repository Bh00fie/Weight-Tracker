import React from 'react';
import '../Hero.css';
import ReactPlayer from 'react-player';
import Container from '@mui/material/Container';
import heroVideo from './HeroVideo.mp4';

function Hero() {
	return (
		<>
			<header className='header__section'>
				<p className='header__text'>Have a sneak peak!</p>
			</header>
			<Container maxWidth="md">
				<div className='playerDiv'>
				<ReactPlayer className='width=100%'
				url={heroVideo}
				playing={false}
				muted={true}
				controls={true}
				/>

				</div>
      		</Container>
		</>		
	);
};

export default Hero;