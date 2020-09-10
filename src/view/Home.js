import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Hello</h1>
				<button onClick={this.props.logOut}>LogOut</button>
			</div>
		);
	}
}

export default Home;
