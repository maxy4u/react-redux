import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render (){
		return (
			<div className="jumbotron">
				<h1>Hey this is first react app Home Page</h1>
				<p> We are using React, Redux, ES6, React Router in this ultra response web app</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		);
	}
}

export default HomePage;