import React, {Component} from 'react';

class Resume extends Component {
	render() {

		if (this.props.data) {
			var name = this.props.data.name;
			var description = this.props.data.description;

			var education = this.props.data.education.map( (edu, index) => {
				return (
					<div key={index} className="row item">
						<div className="twelve columns">
							<h3>{edu.school}</h3>
							<p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
							<p>{edu.description}</p>
						</div>
					</div>
				)
			});

			var works = this.props.data.works.map( (work, index) => {
				return (
					<div key={index} className="row item">

						<div className="twelve columns">

							<h3>{work.company}</h3>
							<p className="info">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>

							<p>{work.description}</p>

						</div>

					</div>
				)
			});

			var skills = this.props.data.skills.map( (skill, index) => {
				let className = `bar-expand ${skill.name.toLowerCase()}`;
				return (
					<li key={index}><span style={{width: skill.level}} className={className}></span><em>{skill.name}</em></li>
				)
			});
		}

		return (
			<section id="resume">

				<div className="row education">

					<div className="three columns header-col">
						<h1><span>Education</span></h1>
					</div>

					<div className="nine columns main-col">
						{education}
					</div>

				</div>

				<div className="row work">

					<div className="three columns header-col">
						<h1><span>Work</span></h1>
					</div>

					<div className="nine columns main-col">
						{works}
					</div>

				</div>

				<div className="row skill">

					<div className="three columns header-col">
						<h1><span>Skills</span></h1>
					</div>

					<div className="nine columns main-col">

						<p>Worked primarily with JavaScript, PHP, with frameworks such as Vue,js, React.js, .

							Interested in functional programming and serverless architectures, exploring with Erlang and AWS Lambda respectively.
						</p>

						<div className="bars">

							<ul className="skills">
								{skills}
							</ul>

						</div>

					</div>

				</div>

			</section>
		);
	}
}

export default Resume;
