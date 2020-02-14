import React, { Component } from "react"
import { connect } from "react-redux"
import * as action from "../../action";
import Modal from "./Modal"
import {Link} from "react-router-dom"
class CartInfo extends Component {
    state = {
		id:""
	}
	handleAddQuantity = (id,price) => {
		this.props.onAddQuantity(id,price);
	};
	handleDeleteQuantity = (id,price) => {
		this.props.onDeleteQuantity(id,price);
	};
	handleRemoveItem = (id) => {
			this.setState({
				id:id
			})
	};
	
    render() {
        const { addedItems } = this.props;
		let addedItemsList = addedItems.length
			? addedItems.map((addedItem) => {
				return (
					<div key={addedItem.id} className="row" id="cart-card">
							<div className="col-md-3 text-center">
								<img
									src={addedItem.img}
									alt={addedItem.name}
									className="cart-image"
								/>
							</div>

							<div className="col-md-4">
								<div className="card-body">
									<div className="card-title" id="card-text">
										{addedItem.name}
									</div>
									<div>
										'₹{addedItem.currentPrice}
										<p className="savings">
											You are saving {addedItem.discount} on this.
										</p>
									</div>
									{addedItem.selectedSize ? (
										<p> Selected Size: [{addedItem.selectedSize}]</p>
									) : (
										null
									)}
										<button className="btn" id="inc-button"
											onClick={() => {
												this.handleAddQuantity(addedItem.id,addedItem.currentPrice);
											}}>
											+
										</button>
									&nbsp;
									<span>{addedItem.quantity}</span>
									&nbsp;
										<button className="btn" id="dec-button"
											onClick={() => {
												this.handleDeleteQuantity(addedItem.id,addedItem.currentPrice);
											}}>
											-
										</button>
									<div>
										<br />
									<button
										id="remove-button" type="button" className="btn btn-primary" data-toggle="modal" data-target="#Modal"
											onClick={() => this.handleRemoveItem(addedItem.id)}>
											Remove
										</button>
									</div>
								</div>
							</div>
						</div>
					);
			  })
			: null;
    return (
        	<div className="container">
			<div>
				<span className="empty-cart text-center">
					Your Cart</span>
					{addedItems.length ? (
						<div>
							{addedItemsList}
							<Modal  id={this.state.id} />
						</div>
				) : (
						<React.Fragment>
						<p className="empty-cart text-center">is Empty</p>
							<Link to="/">
								<button id="checkout-button" type="button" className="btn btn-primary">Click here to Shop</button>
							</Link>
						</React.Fragment>
					)}
				</div>
			</div>
        )
    }
}
 

const mapStateToProps = (state) => {
	return {
		addedItems: state.addedItems,
		totalPrice: state.totalPrice,
		isAuthenticated: state.isAuthenticated
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAddQuantity: (id,price) => dispatch(action.onAddQuantityActionCreator(id,price)),
		onDeleteQuantity: (id,price) =>
			dispatch(action.onDeleteQuantityActionCreator(id, price))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(CartInfo)