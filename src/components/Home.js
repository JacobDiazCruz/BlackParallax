import React, { Component } from 'react';
import '../App.css';
import { Wave, Random } from 'react-animated-text';
import {Fade, Roll, Rotate} from 'react-reveal';
import {NavLink, Link} from 'react-router-dom';
import TextLoop from "react-text-loop";
import PageTransition from 'react-router-page-transition';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Home extends Component {
  
  render() {
    return (
    	<React.Fragment>
    		<Fade clear duration={1500}>
		    	<div className="home">
		    		<div id="left">
		    			<Link exact to="/" className="link" id="logo">
				            <Random 
				            	text="BLACK PARALLAX"
				            	effect="verticalFadeIn"
				            	effectDirection="up"
				            	iterations={1}
				            >
				            </Random>
				        </Link>
			    		<Link exact to="/about" className="link">
			    			<p id="about-tab">ABOUT</p>
			    		</Link>
		    		</div>
		    		<div id="center">
		    		<Fade bottom duration={2000}>
			    		<p className="main-text">Creative  
				    		<span className="span">Studio</span>
						</p>
					</Fade>
					<Fade clear duration={1000}>
						<img src="white-gif.gif" id="black-gif"/>
					</Fade>
					</div>
					<div id="left">
						<Link exact to="/projects" className="link">
				    		<p id="projects-tab">PROJECTS</p>
				   		</Link>
					</div>
				</div>
			</Fade>
		</React.Fragment>
      );
  }
}

export default Home;
