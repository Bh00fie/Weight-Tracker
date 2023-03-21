import React from 'react';
import '../Hero/Hero.css';
import ReactPlayer from 'react-player';
import Container from '@mui/material/Container';
import heroVideo from './HeroVideo.mp4';

function Hero() {
	return (
		<>
			<header className='header__section'>
				<p className='header__text'>FitVid - role model!</p>
			</header>
			<Container maxWidth="md">
				<div className='playerDiv'>
				<ReactPlayer 
					className='playerDiv'
					fluid={true}
					width='100%'
					height='100%'
					url={heroVideo}
					playing={false}
					muted={false}
					controls={true}
				/>

				
				</div>
      		</Container>
		</>		
	);
};

export default Hero;