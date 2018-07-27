import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {main} from './resumeData'
import Header from './components/Header';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        main: main
      }
    }
  }

  componentDidMount(){
    document.title = "Thomas Nguyen"
  }

  render() {
    return (
      <div className="App">
        <Header data={main} />
        {/* <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
