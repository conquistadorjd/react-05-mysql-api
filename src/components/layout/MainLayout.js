import React, { Component } from 'react'
var axios = require('axios');


class MainLayout extends Component {
	constructor(){
		super()

		this.state = { 
				family : ['one','two']
			};

		this.handleMouseEnterFamily = this.handleMouseEnterFamily.bind(this);
		this.handleMouseEnterClan =this.handleMouseEnterClan.bind(this);
	};


	handleMouseEnterFamily(event, value) {
		console.log( "***Event invoked : handleMouseEnter");

		axios.get('/api/family')
		    .then(response => {
		    console.log(response);
		    console.log(response.data);
		    console.log(response.data[0]);

	        this.setState({
	          family: response.data
	        });

	        console.log("family :" + this.state.family);

		    })
		  .catch(function (error) {
		    console.log(error);
		  })
	};

	handleMouseEnterClan(event, value) {
		console.log( "***Event invoked : handleonClick");

		axios.get('/api/clan')
		    .then(response => {
		    console.log(response);
		    console.log(response.data);
		    console.log(response.data[0]);

	        this.setState({
	          family: response.data
	        });

	        console.log("family :" + this.state.family);

		    })
		  .catch(function (error) {
		    console.log(error);
		  })
	}

  render(){
    return(
        <div>
          <div>
              This is MainLayout <br/>
              Data is fetched from publicly accessible database of rfam. please check following link <br/>
              <a href="http://rfam.readthedocs.io/en/latest/database.html">http://rfam.readthedocs.io/en/latest/database.html</a><br/>
              <button type="button" className="btn btn-success"
              		onMouseEnter={this.handleMouseEnterFamily} 
              		onClick={this.handleMouseEnterFamily} >Hover for Family details</button>
              <button type="button" className="btn btn-primary"
              		onMouseEnter={this.handleMouseEnterClan} 
              		onClick={this.handleMouseEnterClan} >Hover for Clan details</button>
	          <br/><b>Below table will change dynamically based on Hover action</b>
	          <table className="pure-table pure-table-horizontal">
	          <tr><td>Description</td><td>Author</td><td>Created TS</td></tr>
	          {this.state.family.map(item => <tr><td>{item.description}</td><td> {item.author}</td><td> {item.created}</td></tr>)}
	          </table>
          </div>       
        </div>
      )
  }
}

export default MainLayout