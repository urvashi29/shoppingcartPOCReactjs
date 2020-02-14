import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
import { compose } from "redux"
import CartInfo from "./CartInfo"
import * as actions from "../../action"
import "./cart.css";
import Login from "../../Login/Login"
class Cart extends Component {
	handleCheckout = (e) => {
		if (this.props.isAuthenticated) {
			this.props.onModal("modal")
			this.props.history.push("/checkout")
		}
		this.props.flag("false")
	}
	render() {
		const { addedItems } = this.props;
		let totalPrice = this.props.totalPrice
		return (
			<div className="container">
				<div className="text-center">
					<CartInfo />
					{addedItems.length ? (
						<div>
							<div className="totalPrice">Total Price:{totalPrice}</div>
							<div><button type="button" className="btn btn-primary" data-toggle="modal" onClick={this.handleCheckout} value={this.props.flag} data-target="#myModal" id="checkout-button">
								Checkout
  							</button>
							<Login /></div>
						</div>
					) : (
						null
					)} 
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		addedItems: state.addedItems,
		totalPrice: state.totalPrice,
		isAuthenticated: state.isAuthenticated,
		flag: state.flag
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onModal: (dismiss) => dispatch(actions.onModalActionCreator(dismiss)),
		flag: (flag) => dispatch(actions.onFlagActionCreator(flag))
	}
}

export default compose(
	withRouter,
	connect(
		mapStateToProps,mapDispatchToProps
	)
)(Cart)