import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import MainLayout from './components/layout/MainLayout';

class App extends Component {
	
	render(){
		return(
			<div>
				<Header />
				This is main file : app.js
				<MainLayout />
				<Footer />
			</div>
			)
	}
}


ReactDOM.render(<App/>,document.getElementById('root'))