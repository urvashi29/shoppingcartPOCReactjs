import React, { Component } from "react";
import "./product.css";
import { connect } from "react-redux";
import ProductDetail from "./Product_detail_card";
import DisplayDescription from "./DisplayDescription";
class ProductList extends Component {
	render() {
		const { product_data } = this.props;
		const description_window = <DisplayDescription />;
		const product_list = product_data.map((product) => {
			return (
				<div key={product.id}>
					<ProductDetail detail={product} />
				</div>
			);
		});
		return (
			<React.Fragment>
				{this.props.isshowData ? (
					<div>{description_window}</div>
				) : (
					<div>{product_list}</div>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isshowData: state.isshowData,
		product_data: state.product_data
	};
};

export default connect(
	mapStateToProps,
	null
)(ProductList);
