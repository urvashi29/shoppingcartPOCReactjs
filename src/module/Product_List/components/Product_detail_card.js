import React, { Component } from "react";
import * as action from "../../action";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
class ProductDetail extends Component {
	state = {
		quantity: 1,
		selectedSize: ""
	};
	handleChangeQuantity = (e) => {
		const quantity = e.target.value;
		this.setState({
			quantity
		});
	};
	handleChangeSize = (e) => {
		const selectedSize = e.target.value;
		this.setState({
			selectedSize
		});
	};
	handleSubmit = (id, price) => {
		let disabled= this.props.disabled
		disabled = true
		this.props.onAdd(id,price,disabled,this.state.quantity, this.state.selectedSize);
		this.setState({
			quantity: 0,
			selectedSize: ""
		});
	};
	handleProductDetail = (id) => {
		let isshowData = this.props.isshowData;
		isshowData = true;
		this.props.onAboutProduct(id, isshowData);
	};

	render() {
		const product = this.props.detail;
		return (
			<div>
				{product ? (
					<div className="card" id="cards">
						<img
							src={product.img}
							onClick={() => this.handleProductDetail(product.id)}
							className="mob-img"
							alt={product.name}
						/>
						<div className="card-body">
							<div className="card-title" id="card-text">
								{product.name}
							</div>
							<div className="card-text">
								₹{product.currentPrice}
								<p>
									<del>₹{product.originalPrice}</del>&nbsp;
									<span className="discount-val">{product.discount} off</span>
								</p>
							</div>
							<select
								onChange={this.handleChangeQuantity}
								value={this.state.quantity}
								disabled={product.disabled} 
								className="formInput">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
							</select>
							&nbsp;
							{product.size ? (
								<select
									onChange={this.handleChangeSize}
									value={this.state.selectedSize}
									className="formInput">
									{product.size.map((info) => {
										return (
											<option key={info} value={info}>
												{info}
											</option>
										);
									})}
								</select>
							) : null}
						</div>
							{!product.quantity ? (
							<span onClick={() => this.handleSubmit(product.id, product.currentPrice)}>
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
				) : (
					<p>Loading...</p>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isshowData: state.isshowData
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAboutProduct: (id,isshowData) =>
			dispatch(action.onAboutProductActionCreator(id, isshowData)),

		onAdd: (id, price,disabled,quantity, size) =>
			dispatch(action.onAddProductActioncreator(id,price,disabled, quantity, size))
	
	};
};

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(ProductDetail);
