import React from "react"
import "./order.css"
import { Link } from "react-router-dom"
const Order = () => {
    return (
        <div className="text-center" >
           <p className="empty-cart text-center">Your has been successfully placed.</p>
            <Link to ="/">
                <button className="btn btn-primary" id="shopping-button">Continue Shopping</button>
            </Link>
        </div>
    )
}

export default Order