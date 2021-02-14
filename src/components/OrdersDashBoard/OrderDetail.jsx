import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getOrdersBYIdAction } from '../../actions/ordershipping/order.action'

export default function OrderDetail() {

    const dispatch = useDispatch();
    const orderlist = useSelector(state => state.getOrderByIdReducer);
    console.log("ORDER DETAILS", orderlist)


    const { loading, error, orderdataId: orderdata } = orderlist;

    useEffect(() => {
        dispatch(getOrdersBYIdAction(window.location.pathname.split("/")[2]));
    }, [dispatch])





    return (
        <>
            {(error) && (<h1 className="text-danger">{error}</h1>)}
            {(loading) && <h1>LOADING</h1>}

            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    {
                        (!orderdata || !orderdata.shippingAddress) ? <h1>No Data</h1> :
                            (
                                <>
                                    <div className="col-md-7" key={orderdata._id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="h4 text-center text-muted">SHIPPING</h4>
                                                <span className="p-4 m-2 text-muted">ADDRESS:</span>{orderdata.shippingAddress.Address}<br />
                                                <span className="p-4 m-2 text-muted">CITY:</span>{orderdata.shippingAddress.City}<br />
                                                <span className="p-4 m-2 text-muted">COUNTRY:</span>{orderdata.shippingAddress.Country}<br />
                                                <span className="p-4 m-2 text-muted">POSTAL CODE:</span>{orderdata.shippingAddress.PostalCode}<br />


                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <h4 className="h4 text-center text-muted">PAYMENT METHOD</h4>
                                                    <h5 className="h4 text-center">{orderdata.paymentMethod}</h5>
                                                </div>

                                                <div className="col-md-4">
                                                    <h4 className="h4 text-center text-muted">PAYMENT STATUS</h4>
                                                    <div className="alert alert-success text-center" role="alert">
                                                        Paid
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <h4 className="h4 text-center text-muted">DELIVERY STATUS</h4>
                                                    {orderdata.isDelivered ? <h5 className="alert alert-success text-center">Delivered</h5> : <h5 className="alert alert-danger text-center">NOt delivered</h5>}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card">
                                                        <ul className="list-group">
                                                            {
                                                                orderdata.products.map((item) => {
                                                                    return (
                                                                        <li className="list-group-item d-flex justify-content-between align-items-center" key={item._id}>
                                                                            <img src={item.productId.PImage} className="img-thumbnail" style={{ width: 100 }} />
                                                                            <h5>{item.productId.PName}</h5>
                                                                            {item.Quantity}x
                                                                            {item.productId.Price}={item.Quantity * item.productId.Price}
                                                                        </li>
                                                                    )

                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card shadow-lg">
                                            <div className="card-body">
                                                <h3 className="h3 text-center bold">ORDER SUMMARY</h3>
                                                <hr />
                                                <h5 className="d-flex justify-content-between align-items-center">Items:<span>{Object.values(orderdata.products).reduce((t, { Quantity }) => t + Quantity, 0)}</span></h5>

                                                <hr />
                                                <h5 className="d-flex justify-content-between align-items-center">Shipping:<span>{orderdata.shippingPrice}</span></h5>
                                                <hr />
                                                <h5 className="d-flex justify-content-between align-items-center">Tax:<span>{orderdata.taxPrice}</span></h5>
                                                <hr />
                                                <h5 className="d-flex justify-content-between align-items-center">Total:<span>{orderdata.total}</span></h5>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>

                                </>

                            )
                    }

                </div>
            </div>
        </>
    )
}
