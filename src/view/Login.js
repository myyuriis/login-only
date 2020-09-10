import React, { Component } from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBBtn,
	MDBIcon,
	MDBModalFooter
} from 'mdbreact';
import { login } from '../api/APIEnigma';

class Login extends Component {
	state = {
		username: '',
		password: '',
		token: ''
	};

	handleChange = (event) => {
		const namenyaInputan = event.target.name;
		this.setState({ ...this.state, [namenyaInputan]: event.target.value });
	};

	onSubmit = () => {
		const newBody = {
			username: this.state.username,
			password: this.state.password
		};

		login(newBody)
			.then((res) => {
				this.setState({
					token: res
				});
				this.props.token(res);
			})
			.catch((error) => {
				alert(error);
			});
	};

	render() {
		return (
			<div className="LoginBg">
				<div className="Login">
					<MDBContainer>
						<MDBRow className="justify-content-center">
							<MDBCol md="5">
								<MDBCard>
									<MDBCardBody className="mx-3">
										<div className="text-center">
											<h3 className="dark-grey-text mb-5">
												<strong>Sign in</strong>
											</h3>
										</div>
										<MDBInput
											label="Your username"
											group
											validate
											error="wrong"
											success="right"
											type="text"
											name="username"
											value={this.state.username}
											onChange={this.handleChange}
										/>
										<MDBInput
											label="Your password"
											group
											validate
											containerClass="mb-0"
											name="password"
											type="password"
											value={this.state.password}
											onChange={this.handleChange}
										/>
										<p className="font-small blue-text d-flex justify-content-center pb-3">
											Forgot
											<a href="#!" className="blue-text ml-1">
												Password?
											</a>
										</p>
										<div className="text-center mb-3">
											<MDBBtn
												type="button"
												gradient="blue"
												rounded
												className="btn-block z-depth-1a"
												onClick={this.onSubmit}
											>
												Sign in
											</MDBBtn>
										</div>
										<p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
											or Sign in with:
										</p>
										<div className="row my-3 d-flex justify-content-center">
											<MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a">
												<MDBIcon fab icon="facebook-f" className="blue-text text-center" />
											</MDBBtn>
											<MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a">
												<MDBIcon fab icon="twitter" className="blue-text" />
											</MDBBtn>
											<MDBBtn type="button" color="white" rounded className="z-depth-1a">
												<MDBIcon fab icon="google-plus-g" className="blue-text" />
											</MDBBtn>
										</div>
									</MDBCardBody>
									<MDBModalFooter className="mx-5 pt-3 mb-1">
										<p className="font-small grey-text d-flex justify-content-end">
											Not a member?
											<a href="#!" className="blue-text ml-1">
												Sign Up
											</a>
										</p>
									</MDBModalFooter>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</div>
			</div>
		);
	}
}

export default Login;
