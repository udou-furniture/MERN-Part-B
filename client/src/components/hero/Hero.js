import React from 'react';
import './Hero.css';


// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
	return(
		<div id="hero" >
			<div className="grid">
				<div className="hero-text">
					<h1>Shelves to fit any home</h1>
					<a className="button-hero">Get yours</a>
					{/* <FontAwesomeIcon color="white" size="2x" icon={faHome} /> */}
				</div>
			</div>
		</div> 
	)
}

export default Hero;