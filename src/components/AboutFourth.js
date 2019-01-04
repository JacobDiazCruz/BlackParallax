import React, { Component } from 'react';
import '../App.css';
import {Fade} from 'react-reveal';

class AboutFourth extends Component {
  
  render() {
    return (
    	<React.Fragment>
        <Fade bottom duration={1500}>
    		<section className="about-fourth">
          <div>
            <p className="about-fourth-header">Case Study</p>
            <ul className="fourth-ul">
              <li>Abstract Designs</li>
              <li>Parallax Effects</li>
            </ul>
          </div>
          <div>
            <p className="about-fourth-header">Development & Design</p>
            <ul className="fourth-ul">
              <li>Pasig, Manila</li>
            </ul>
          </div>
          <div>
            <p className="about-fourth-header">Contact</p>
            <ul className="fourth-ul">
              <li>+63 9455061297</li>
              <li>carljacobdiazcruz@gmail.com</li>
            </ul>
          </div>
        </section>
        </Fade>
    	</React.Fragment>
      );  
  }
}

export default AboutFourth;
