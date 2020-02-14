import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mockup.css";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";
import megasale1 from "../../images/megasale1.jpg";
import megasale2 from "../../images/megasale2.jpg";
import megasale3 from "../../images/megasale3.jpg";
import Footer from "../Footer";
class Mockup extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div clas="row">
					<div id="demo" className="carousel slide" data-ride="carousel">
						<ul className="carousel-indicators">
							<li data-target="#demo" data-slide-to="0" className="active"></li>
							<li data-target="#demo" data-slide-to="1"></li>
							<li data-target="#demo" data-slide-to="2"></li>
						</ul>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src={carousel1} alt="carousel" />
							</div>
							<div className="carousel-item">
								<img src={carousel2} alt="carousel" />
							</div>
							<div className="carousel-item">
								<img src={carousel3} alt="carousel" />
							</div>
						</div>
						<Link
							className="caraousel-control-prev"
							to="#demo"
							data-slide="prev">
							<span className="carousel-control-prev-icon"></span>
						</Link>
						<Link
							className="caraousel-control-next"
							to="#demo"
							data-slide="next">
							<span className="carousel-control-next-icon"></span>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<img src={megasale1} className="megasale-image" alt="megasale" />
					</div>
					<div className="col-md-4">
						<img src={megasale2} className="megasale-image" alt="megasale" />
					</div>
					<div className="col-md-4">
						<img src={megasale3} className="megasale-image" alt="megasale" />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Mockup;
