import React, { Component } from "react"
import "./checkout.css"
import {connect} from "react-redux"
class PriceDetails extends Component {
    render()
    {  
        let totalPrice = this.props.totalPrice
        let addedItems = this.props.addedItems
        return (
            <div>
                    <div className="card" id="price-card">
                    <div className="card-header"  id="pricedetails-card">
                        PRICE DETAILS
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-7"> 
                                Price({addedItems.length} items)
                            </div>
                            <div className="col-md-5"> 
                                 {totalPrice}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-7"> 
                                Delivery
                            </div>
                            <div className="col-md-5" id="delivery"> 
                                 FREE
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="row">
                            <div className="col-md-7" id="totalpayable"> 
                                Total Payable
                            </div>
                            <div className="col-md-5" id="totalpayable"> 
                                {totalPrice}
                            </div>
                        </div>
                    </div>
                   
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        totalPrice: state.totalPrice
    }
}
export default connect(mapStateToProps,null)(PriceDetails)