import React, { Component } from 'react';
import '../App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageTransition from 'react-router-page-transition';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import VelocityTransitionGroup from 'velocity-react';

class Template extends Component {
  render() {
    return (
    	<BrowserRouter>
	    	<React.Fragment>
	    		<Route render={({location}) => (
					<Switch location={location}>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/projects" component={Projects}/>
					</Switch>
		    	)} />
	    	</React.Fragment>
    	</BrowserRouter>
    );
  }
}

export default Template;
