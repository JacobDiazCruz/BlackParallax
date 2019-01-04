import React, { Component } from 'react';
import '../App.css';
import { Wave, Random } from 'react-animated-text';
import {Fade, Roll} from 'react-reveal';

class AboutThird extends Component {
  
  render() {
    return (
    	<React.Fragment>
    		<section className="about-third">
          <div>
            <Fade bottom duration={1500}>
            <h2>SOCIAL LINKS</h2>
            <div>
            <a href="https://www.facebook.com/LykosKeyAh" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-f" id="fb-logo"></i>
            </a>
          </div>
          <div>
            <a href="https://github.com/JacobDiazCruz" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github" id="git-logo"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/jacob-cruz-b3404b165/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in" id="linkedin-logo"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/jacob-cruz-b3404b165/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram" id="instagram-logo"></i>
            </a>
          </div>
          </Fade>
          </div>
        </section>
    	</React.Fragment>
      );  
  }
}

export default AboutThird;
