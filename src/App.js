import React from 'react';
import './App.css';
import Login from './view/Login';
import Home from './view/Home';

class App extends React.Component {
	state = {
		token: '',
		isValid: false
	};
	token = (res) => {
		this.setState({
			token: res
		});
		if (this.state.token == res) {
			this.setState({
				isValid: true
			});
		} else {
			this.setState({
				isValid: false
			});
		}
	};
	logOut = () => {
		this.setState({
			isValid: false
		});
		sessionStorage.setItem('token', '');
	};
	render() {
		let currentScreen;
		if (this.state.isValid) {
			currentScreen = <Home logOut={this.logOut} />;
		} else {
			currentScreen = <Login token={this.token} />;
		}
		return <div className="App">{currentScreen}</div>;
	}
}

export default App;
