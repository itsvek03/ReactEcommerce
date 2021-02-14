import React from 'react'
import { NavLink } from 'react-router-dom'


export const CheckOutSteps = ({ step1, step2, step3 }) => {
    console.log(step1);
    console.log(step2);
    console.log(step3);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light center">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {step1 ? <NavLink className="nav-link" to="/shipping">Shipping</NavLink> : <NavLink className="nav-link disabled" to="#">Shipping</NavLink>}
                        </li>

                        <li className="nav-item">
                            {step2 ? <NavLink className="nav-link" to="/payment">Payment</NavLink> : <NavLink className="nav-link disabled" to="#">Payment</NavLink>}
                        </li>

                        <li className="nav-item">
                            {step3 ? <NavLink className="nav-link" to="/placeorder">Place Order</NavLink> : <NavLink className="nav-link disabled" to="#">Place order</NavLink>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
