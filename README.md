# nodejs-01-mysql
nodejs-01-mysql

This is a sample project for using MySQL with Nodejs and express to create API based application

Installed  by using following command

```bash
npm install axios
```

Data is fetched from server using RESTful API.

A event handling function is created. API is called by using axios.get


```JavaScript
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
```
##### Use arrow function instead of old function statement. arrow function does not attach 'this' to current object and hense old this is preserved.