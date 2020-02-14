import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import CartInfo from "../../container/CartInfo"
import PriceDetails from "./PriceDetails"
class Checkout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row"  id="checkout-page">
                <div className="col-md-8">
                 <div id="accordion">
                <div className="card">
                    <div className="card-header">
                        <a href="#collapseTwo" className="card-link" data-toggle="collapse">
                            {/* check authentucated or not for disability */}
                            Address Details
                        </a>
                    </div>
                    <div id="collapseTwo" className="collapse show" data-parent="#accordion">
                        <div className="card-body">
                        {/* enter address details */}
                        1636 Sector-15, Panchkula
                        </div>
                   </div>
                </div>
        
                <div className="card">
                    <div className="card-header">
                        <a href="#collapseThree" className="collapsed card-link" data-toggle="collapse">
                        Order Summary
                        </a>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                        {/* details of the product in adedItems */}
                        <CartInfo />
                        </div>
                   </div>
                </div> 

                </div>
                </div>
                <div className="col-md-2">
                   <PriceDetails />
                </div>
                </div>
                <div className="row">
                    <Link to="/yourorder"  id="place-order">
                        <button className="btn btn-primary" id="placeorder-button"type="button">place order</button>
                    </Link>    
                </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        addedItems: state.addedItems
    }
}
export default connect(mapStateToProps)(Checkout)