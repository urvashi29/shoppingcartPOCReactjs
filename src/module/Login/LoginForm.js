import React, { Component } from "react"
import "./Login.css"
import {connect} from "react-redux"
import * as actions from "../action"
import {withRouter} from "react-router-dom"
import { compose } from "redux";
class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			formIsValid: false,
			emailError: "",
			passwordError: ""
		};
	}

	handleChangeEmail = (e) => {
		const email = e.target.value;
		this.validateEmail(email);
	};

	handleChangePassword = (e) => {
		const password = e.target.value;
		this.validatePassword(password);
	}; 

    handleCloseButton = () => {
        this.setState({
            email: "",
			password: "",
			formIsValid: false,
			emailError: "",
			passwordError: ""
       })
    }
	validateEmail = (email) => {
		let emailError = this.state.emailError;
		let formIsValid = this.state.formIsValid;
		if (String(email).trim() === "") {
			emailError = "*Please enter your email-ID.";
			formIsValid = false;
		} else {
			//regular expression for email validation
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (pattern.test(email)) {
				formIsValid = true;
				emailError = "";
			} else {
				emailError = "*Please enter valid email-ID.";
				formIsValid = false;
			}
		}
		this.setState({
			email: email,
			emailError: emailError,
			formIsValid: formIsValid
		});
		return formIsValid;
	};

	validatePassword = (password) => {
		let formIsValid = this.state.formIsValid;
		this.setState({
			password: password,
			formIsValid: formIsValid
		});
		return formIsValid;
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (
			this.validateEmail(this.state.email) &&
			this.validatePassword(this.state.password) &&
			this.state.email === "admin@gslab.com" &&
			this.state.password === "Urvashi29@"
		) {
			let isAuthenticated = this.props.isAuthenticated
			isAuthenticated = true
			this.props.onAuth(isAuthenticated)
			this.props.onModal("modal")
			this.props.history.push("/checkout")
			let email = "";
			let password = "";
			let emailError = "";
			let passwordError = "";
			this.setState({
				email: email,
				password: password,
				emailError: emailError,
				passwordError: passwordError
			});
		} else {
			let passwordError = this.state.passwordError;
			let password = this.state.password;
			if (String(password).trim() === "") {
				passwordError = "*Please enter password.";
			} else {
				passwordError = "Enter Correct Credentials";
			}
			this.setState({
				passwordError: passwordError,
				password: password
			});
		}
	}
	render() {
        return (
                <form className="form-style">
						<div className="form-row justify-content-center">
							<div className="form-group">
								<input
									type="email"
									value={this.state.email}
									onChange={this.handleChangeEmail}
									className="authInput"
									placeholder="Enter Email"
									required
								/>
								<div className="error-message">{this.state.emailError}</div>
							</div>
						</div>
						<div className="form-row justify-content-center">
							<div className="form-group">
								<input
									type="password"
									value={this.state.password}
									onChange={this.handleChangePassword}
									className="authInput"
									placeholder="Enter Password"
									required
								/>
								<div className="error-message">{this.state.passwordError}</div>
							</div>
						</div>
						<button
					className="btn btn-primary btn-lg"
					// modal updated value is not reaching here
							data-dismiss={this.props.dismiss}
							onClick={this.handleSubmit}
							id="auth-button"
							type="button">
							Submit
			    		</button>
						<div className="modal-footer" id="close-button">
							<button type="button" className="btn btn-danger" onClick={this.handleCloseButton} data-dismiss="modal">Close</button>
                        </div>
			</form>
		)
    }
}
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.isAuthenticated,
		dismiss: state.dismiss
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
		onAuth: (isAuthenticated) => dispatch(actions.onAuthActionCreator(isAuthenticated)),
		onModal: (dismiss) => dispatch(actions.onModalActionCreator(dismiss))
    }
}

export default compose(
    withRouter,
	connect(
		mapStateToProps,mapDispatchToProps)
)(LoginForm);

	