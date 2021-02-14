import React, { useEffect } from 'react';
import { CheckOutSteps } from './CheckOutSteps'
import { useDispatch, useSelector } from 'react-redux'

import { getCartActions } from '../../actions/cart/cart.actions'
import { postOrderAction } from '../../actions/ordershipping/order.action'
import { CREATE_DETAILS_RESET } from '../../actions/ordershipping/order.type'

export default function PlaceOrder() {
    const ship = JSON.parse(localStorage.getItem("shipping"));
    const pay = JSON.parse(localStorage.getItem("payment"));
    const dispatch = useDispatch();
    const getcartDetail = useSelector(state => state.getCartReducer)
    const { loading, cartdata, error } = getcartDetail

    const { loading: postOrederLoading, error: postOrederError, success } = useSelector(state => state.postOrderReducer)

    var { user: { data: { data: { user } } } } = useSelector(state => state.loginuserdata)
    // console.log("UserDetails", userDetails.user.data.data.user.id)
    console.log("USerDetails", user.id)
    useEffect(() => {
        if (success) {
            dispatch({ type: CREATE_DETAILS_RESET })
        }
        dispatch(getCartActions(user.id))
    }, [dispatch, user, success])

    console.log("cartDetails ", cartdata)

    const totalValue = cartdata.reduce((t, { totalPrice }) => t + totalPrice, 0).toFixed(2)
    console.log(totalValue)
    const shippingPrice = totalValue > 1000 ? 0 : totalValue + 500;
    const taxPrice = (0.18 * totalValue).toFixed(2);

    const finalPrice = (Number(totalValue) + Number(shippingPrice) + Number(taxPrice)).toFixed(2);

    const placeHolder = () => {
        let body = {
            total: finalPrice,
            shippingAddress: ship,
            paymentMethod: pay.Payment,
            shippingPrice: shippingPrice,
            taxPrice: taxPrice,

        }
        dispatch(postOrderAction(body))
    }

    return (

        <>
            {error && (<h1 className="text-danger">{error}</h1>)}
            {(loading) && <h1>LOADING</h1>}
            { ship && (
                <div className="container-fluid mt-5">
                    <div className="row">
                        <CheckOutSteps step1 step2 step3 />
                        <div className="col-md-12">
                            <div className="card text-left">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h1 className="h1 text-muted">SHIPPING</h1>
                                            <span className="lead">{ship.Address},{ship.City},{ship.PostalCode},{ship.Country}</span>

                                            <hr />

                                            <h1 className="h1 text-muted">PAYMENT METHOD</h1>
                                            <span className="lead">Method : {pay.Payment}</span>
                                            <hr />

                                            <h1 className="h1 text-muted">ORDER ITEMS</h1>

                                            <ul className="list-group">

                                                {

                                                    cartdata.map((i) => {
                                                        return (
                                                            <li className="list-group-item" key={i.id}>
                                                                {i.totalPrice}
                                                                <br />
                                                                {i.Quantity}

                                                            </li>
                                                        )
                                                    })
                                                }

                                                <hr />
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-md-4 m-2">
                                        <div className="card text-left">
                                            <div className="card-body">
                                                <h3 className="h3 text-center bold">ORDER SUMMARY</h3>
                                                <hr />
                                                <h5>Items:{cartdata.reduce((t, p) => (t + p.Quantity), 0)}</h5>

                                                <hr />
                                                <h5>Shipping:{shippingPrice}</h5>
                                                <hr />
                                                <h5>Tax:{taxPrice}</h5>
                                                <hr />
                                                <h5>Total:{finalPrice}</h5>
                                                <hr />
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-lg btn-block"
                                                    onClick={() => placeHolder()}>Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
