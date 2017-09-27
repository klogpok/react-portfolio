import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {resumeData: {}};
	}

	componentDidMount() {
		this.getResumeData();
	}

	getResumeData() {
		$.ajax({
			url: "http://localhost:3000/resumeData.json",
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({resumeData: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(err);
		}
		});
	}

  render() {
    return (
      <div>
				<Header data={this.state.resumeData.main} />
		    <About data={this.state.resumeData.main} />
		    <Resume data={this.state.resumeData.resume}/>
		    <Portfolio data={this.state.resumeData.portfolio}/>
		    <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
