import React, { Component } from 'react';

class Footer extends Component {
	render() {

		if (this.props.data) {
			var name = this.props.data.name;
			var socials = this.props.data.social.map( (social, index) => {
				return <li key={index}><a href={social.url} target="_blank"><i className={social.className}></i></a></li>;
			})
		}

		return (
			<footer>

				<div className="row">

					<div className="twelve columns">

						<ul className="social-links">
							{socials}
						</ul>

						<ul className="copyright">
							{/*<li>&copy; Copyright 2014 CeeVee</li>*/}
							{/*<li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>*/}
							{/*<li>{name} 2017</li>*/}
							<li>This site is developed in React.js by {name} from the original design of Ceevee from
								 <a title="Styleshout" href="http://www.styleshout.com/"> Styleshout</a>
							</li>
						</ul>

					</div>

					<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

				</div>

			</footer>
		);
	}
}

export default Footer;
