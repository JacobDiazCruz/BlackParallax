import React, { Component } from 'react';
import '../App.css';
import { Wave, Random } from 'react-animated-text';
import {Fade, Roll, Slide, Bounce} from 'react-reveal';
import {NavLink} from 'react-router-dom';
import AboutSecond from './AboutSecond';
import AboutThird from './AboutThird';
import AboutFourth from './AboutFourth';

class About extends Component {
  render() {
    return (
    	<React.Fragment>
        <Fade left duration={1500}>
    		<div className="about">
          <NavLink exact to="/" className="link" id="logo">
            <Random 
                    text="BLACK PARALLAX"
                    effect="verticalFadeIn"
                    effectDirection="up"
                    iterations={1}
            >
            </Random>
          </NavLink>
	    		<NavLink exact to="/about" className="link">
			    	<p id="about-tab-2">ABOUT</p>
			   	</NavLink>
			   	<NavLink exact to="/projects" className="link">
			    	<p id="projects-tab-2">PROJECTS</p>
			   	</NavLink>
          <Fade bottom duration={1000}>
      			<h6 id="about-us">
                About Us
            </h6>
          </Fade>
    			<div id="half-underline"></div>
    			<p align="left" id="about-p">Black Parallax is a web development studio in Manila.
    			We specialize in UI/UX design and front-end web applications with mobile responsiveness.
    			We are committed towards creating modish designs to build relationship with clients and to attract potential clients.</p>
    			<AboutSecond/>
          <AboutThird/>
          <AboutFourth/>
    		</div>
        </Fade>
    	</React.Fragment>
      );
  }
}

export default About;
