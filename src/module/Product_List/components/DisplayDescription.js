import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../action";
import "./product.css";
import { Link } from "react-router-dom";
import Magnifier from "react-magnifier";
class DisplayDescription extends Component {
	state = {
		quantity: 1,
		selectedSize: ""
	};
	handleChangeQuantity = (e) => {
		let quantity = e.target.value;
		this.setState({
			quantity
		});
	};
	handleChangeSize = (e) => {
		let selectedSize = e.target.value;
		this.setState({
			selectedSize
		});
	};
	handleSubmit = (id, price) => {
		let disabled= this.props.disabled
		disabled = true
		this.props.onAdd(id,price, disabled,this.state.quantity, this.state.size);
		this.setState({
			quantity:1,
			selectedSize: ""
		});
	};
	render() {
		const { post } = this.props
		return (
			<div className="container" id="product-detail">
				<div className="row">
					<div className="col-md-6">
						<Magnifier src={post.img} alt={post.name} id="description-image" mgShowOverflow={false} zoomFactor={2} width={400} mgShape={"square"} />
					</div>
					<div className="col-md-6" id="description-detail">
						<div className="row">
							<div className="col-md-4">
								<p className="mobile-name">{post.name}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
							
									<del>₹{post.originalPrice}</del>
							
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								₹{post.currentPrice}
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<span className="savings">{post.discount} off</span>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4" id="selected-quantity">Selected Quantity:{post.quantity}</div>
						</div>
						<div className="row">
							<div className="col-md-1">
								<select
									onChange={this.handleChangeQuantity}
									value={this.state.quantity}
									disabled={post.disabled}
									className="formInput">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
								</select>
							</div>
							&nbsp; &nbsp;
							{post.size ? (
								<select
									onChange={this.handleChangeSize}
									disabled={post.disabled}
									value={post.selectedSize}
									className="formInput">
									{post.size.map((info) => {
										return (
											<option value={info} key={info}>
												{info}
											</option>
										);
									})}
								</select>
							) : null}
						</div>
						<br />
						<div className="row">
							{!post.quantity ? (
								<span onClick={() => this.handleSubmit(post.id, post.currentPrice)}>
								<button className="btn btn-primary" id="addtocart-button">
									    Add To Cart
								</button>
									</span>
								) : (
									<Link to="/cart" className="GoToCartlink">
									<button className="btn btn-primary" id="addtocart-button">
										Go to Cart
									</button> 
									</Link>
							    )}
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		post: state.post
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (id,price,disabled, quantity, size) =>
			dispatch(action.onAddProductActioncreator(id,price,disabled, quantity, size))
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DisplayDescription);
