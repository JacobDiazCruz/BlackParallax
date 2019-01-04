import React, { Component } from 'react';
import '../App.css';
import { Wave, Random } from 'react-animated-text';
import {Fade, Bounce} from 'react-reveal';
import {NavLink} from 'react-router-dom';

class About extends Component {
  
  render() {
    return (
    	<React.Fragment>
        <Fade right duration={1500}>
    		<div className="projects">
          <NavLink exact to="/" className="link" id="white-logo">
            <Random
                    text="BLACK PARALLAX"
                    effect="verticalFadeIn"
                    effectDirection="up"
                    iterations={1}
            >
            </Random>
          </NavLink>
          <NavLink exact to="/about" className="link">
            <p id="about-tab-3">ABOUT</p>
          </NavLink>
          <NavLink exact to="/projects" className="link">
            <p id="projects-tab-3">PROJECTS</p>
          </NavLink>
          <div className="card-container">
            <div className="swelas">
              <p>Swelas</p>
            </div>
            <div className="twokbets">
              <img src="2kbets.png" id="twokbets-img"/>
            </div>
            <div className="healthycoder">
              <p>The Healthy Coder</p>
            </div>
            <div className="barako">
              <p>Barako Manila</p>
            </div>
            <div className="footwork-lab">
              <p>Footwork Lab.</p>
            </div>
          </div>
        </div>
        </Fade>
    	</React.Fragment>
      );
  }
}

export default About;
