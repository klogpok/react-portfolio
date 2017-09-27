import React, { Component } from 'react';

class Header extends Component {
	render() {

		if (this.props.data) {
			var name = this.props.data.name;
			var description = this.props.data.description;

			var socials = this.props.data.social.map( (social, index) => {
				return <li key={index}><a href={social.url} target="_blank"><i className={social.className}></i></a></li>;
			})
 		}

		return (
			<header id="home">

				<nav id="nav-wrap">

					<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
					<a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

					<ul id="nav" className="nav">
						<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
						<li><a className="smoothscroll" href="#about">About</a></li>
						<li><a className="smoothscroll" href="#resume">Resume</a></li>
						<li><a className="smoothscroll" href="#portfolio">Works</a></li>
						{/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
						{/*<li><a className="smoothscroll" href="#contact">Contact</a></li>*/}
					</ul>

				</nav>

				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">Hi, i'm {name}.</h1>
						{/*<h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and*/}
							{/*effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>*/}
							{/*and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>*/}
						<h3>{description}</h3>
						<hr />
						<ul className="social">
							{socials}
						</ul>
					</div>
				</div>

				<p className="scrolldown">
					<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
				</p>

			</header>
		);
	}
}

export default Header;
