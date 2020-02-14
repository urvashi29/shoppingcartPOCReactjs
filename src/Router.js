import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./module/Product_List/container/Dashboard";
import Cart from "./module/Cart/container/Cart";
import ProductList from "./module/Product_List/components/ProductList";
import Mockup from "./module/Mockup/Mockup";
import Checkout from "./module/Cart/components/Checkout/Checkout"
import Order from "./module/Cart/components/OrderHistory/Order"
import {connect} from "react-redux";
class Router extends Component {
	render() {
		return (
			<BrowserRouter>
					<Dashboard />
					<Route exact path="/" component={Mockup} />
					<Route exact path="/product_details" component={ProductList} />
					<Route exact path="/checkout" auth={this.props.isAuthenticated} component={Checkout}/> 
					<Route exact path="/cart" component={Cart} />
				<Route exact path="/yourorder" component={Order}/>
				</BrowserRouter>
		);
	}
}
// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={(props) =>
// 			rest.auth !== false ? (
// 				<Component {...props} />
// 			) : (
// 				<Redirect to={{ pathname: "/" }} />
// 			)
// 		}
// 	/>
// );

// const ProtectedRoute = ({ component: Component, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={props =>
// 			rest.auth !== false ? (
// 				<Component {...props} />
// 			) : (
// 					<Redirect to={{ pathname: '/' }} />
// 				)
// 		}
// 	/>
// )
  
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.isAuthenticated
	}
}
export default connect(mapStateToProps,null)(Router);
