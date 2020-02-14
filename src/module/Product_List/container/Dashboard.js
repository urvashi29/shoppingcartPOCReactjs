import React, { Component } from "react";
import "./dashboard.css";
import * as actions from "../../action";
import { Tab, Tabs } from "react-tabs";
import { NavLink,withRouter,Link  } from "react-router-dom";
import Sale from "../../../images/Sale.png";
import Mobiles from "../../../images/Mobiles.png";
import Fashion from "../../../images/Fashion.png";
import Furniture from "../../../images/Furniture.png";
import BodyCare from "../../../images/BodyCare.png";
import Specials from "../../../images/Specials.png";
import Electronics from "../../../images/Electronics.png";
import logo from "../../../images/logo.png";
import { connect } from "react-redux";
import Login from "../../Login/Login"
import { compose } from "redux";
const links = [
	{ name: "Electronics", val: "electronics_details" },
	{ name: "Mens", val: "menclothes_details" },
	{ name: "Women", val: "womenclothes_details" },
	{ name: "TV and Appliances", val: "tvandappliances_details" },
	{ name: "Baby & Kids", val: "babyandkidclothes_details" },
	{ name: "Home & Furniture", val: "homeandfurniture_details" },
	{ name: "Sports, Books & More", val: "sportsandbooks_details" }
];
class Dashboard extends Component {
    handleClick = (name) => {
		let isshowData = this.props.isshowData;
		isshowData = false;
		this.props.onAddData(name, isshowData);
		this.props.history.push("./product_details");
	};

	handleLogout = () => {
		let isAuthenticated = this.props.isAuthenticated
		isAuthenticated = false
		this.props.onAuth(isAuthenticated)
	}
	
	handleFlag = () => {
		let flag = this.props.flag
		flag = true
		this.props.flag(flag)
	}

	render() {
		let Alllinks = links.map((info) => {
			return (
				<div key={info.name} className="container">
					<Tabs>
						<Tab id="tab" onClick={() => this.handleClick(info.val)}>{info.name}</Tab>
					</Tabs>
				</div>
			);
		});
		return (
			<div>
				<nav className="navbar navbar-expand-md bg-primary navbar-dark">
					<div className="container">
						<div className="navbar-brand">
							<img src={logo} alt="SC" className="logo-image" />
						</div>
						<form className="form-inline">
							<input
								className="form-control"
								type="text"
								id="searchInput"
								placeholder="Search.."
							/>
						</form>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavbar">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="collapsibleNavbar">
							<ul className="navbar-nav">
								{!this.props.isAuthenticated ? (<div><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleFlag}  id="modal-button">
										  Login & SignUp
  										</button>
									<Login /></div>) : (
										<div className="dropdown">
												<button className="btn btn-primary dropdown-toggle" type="button"  id="modal-button" data-toggle="dropdown">My Profile
												<span className="caret"></span></button>
												<ul className="dropdown-menu">
												<Link to="/" onClick={this.handleLogout}>Logout</Link>
												<li>Notification</li>
												</ul>
										</div>
								)}
								<NavLink to="/cart" className="nav-item">
									<li className="nav-link" id="navbarItem">
										<i className="fa fa-shopping-cart"></i> &nbsp; Cart
									</li>
								</NavLink>
							</ul>
						</div>
					</div>
				</nav>
				<nav
					className="navbar navbar-expand-md navbar-light"
					id="second-navbar">
					<div className="container">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#Navbar">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="Navbar">
							{Alllinks}
						</div>
					</div>
				</nav>
				<div className="sale-block">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3"  >
								<img id="sale-image" className="shake-slow shake-constant shake-constant--hover" src={Sale} alt={Sale} />
							</div>
							<div className="col-md-1">
								<img className="mobile-image" src={Mobiles} alt={Mobiles} />
								<p className="text-center" id="description">
									Mobiles
								</p>
							</div>
							<div className="col-md-1">
								<img
									className="mobile-image"
									src={Electronics}
									alt="electronics"
								/>
								<p className="text-center" id="description">
									Electronics
								</p>
							</div>
							<div className="col-md-1">
								<img className="mobile-image" src={Fashion} alt={Fashion} />
								<p className="text-center" id="description">
									Fashion
								</p>
							</div>
							<div className="col-md-1">
								<img className="mobile-image" src={BodyCare} alt={BodyCare} />
								<p className="text-center" id="description">
									BodyCare
								</p>
							</div>
							<div className="col-md-1">
								<img className="mobile-image" src={Furniture} alt={Furniture} />
								<p className="text-center" id="description">
									Home& Furniture
								</p>
							</div>
							<div className="col-md-1">
								<img className="mobile-image" src={Specials} alt="specials" />
								<p className="text-center" id="description">
									Specials
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isshowData: state.isshowData,
		isAuthenticated: state.isAuthenticated,
		flag: state.flag
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAddData: (name, isshowData) =>
			dispatch(actions.onAddDataActionCreator(name, isshowData)),
		onAuth: (isAuthenticated) => dispatch(actions.onAuthActionCreator(isAuthenticated)),
		flag: (flag) => dispatch(actions.onFlagActionCreator(flag))
	};
};

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		mapDispatchToProps
	)
)(Dashboard);
