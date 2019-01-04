import React, { Component } from 'react';
import '../App.css';
import { Wave, Random } from 'react-animated-text';
import {Fade, Roll} from 'react-reveal';
import {NavLink} from 'react-router-dom';
import ParallaxImage from 'react-image-parallax2';
import { Parallax } from "react-parallax";

const image1 = "clouds1.png";
const image2 = "building.png";
const image3 = "lines.png";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class About extends Component {
  
  render() {
    return (
    	<React.Fragment>
            <Parallax bgImage={image1} strength={350} className="abstract-img">
                <div style={{ height: 400, width: 600}}>
                </div>
            </Parallax>
            <Parallax bgImage={image2} strength={500} className="water-img">
                <div style={{ height: 400, width: 500}}>
                </div>
            </Parallax>
            <Parallax bgImage={image3} strength={500} className="lines-img">
                <div style={{ height: 300, width: 400}}>
                </div>
            </Parallax>
                <section className="about-second">
                    <div>
                    <Fade bottom duration={1500}>
        				<p id="technologies-header">TECHNOLOGIES</p>
        				<ul id="technologies-ul">
        					<li>ReactJS</li>
        					<li>NodeJS</li>
        					<li>PHP</li>
        					<li>Laravel</li>
        				</ul>
                    </Fade>
        			</div>
        			<div id="border"></div>
        			<div>
                    <Fade bottom duration={1500}>
        				<p id="expertise-header">EXPERTISE</p>
        				<ul id="expertise-ul">
        					<li>UI/UX</li>
        					<li>Front End</li>
        					<li>Back End</li>	
        					<li>Web Design</li>
        				</ul>
        				<p>
        				</p>
                    </Fade>
                    </div>
                </section>
    	</React.Fragment>
      );
  }
}

export default About;
