import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getOrdersAdmin, UpdateOrderAdminAction } from '../../actions/ordershipping/order.action'
import { ORDER_UPDATE_RESET } from '../../actions/ordershipping/order.type'

export default function OrderAdmin() {
    const dispatch = useDispatch();

    const orderdetails = useSelector(state => state.getOrderByIdAdminReducer)
    console.log("ORDER ADMIN", orderdetails)



    const updatedetails = useSelector(state => state.UpdateAdminReducer)

    const { success, loading, error } = updatedetails;
    console.log("UPDATE ORDER ADMIN", updatedetails)
    useEffect(() => {
        if (success) {
            dispatch({ type: ORDER_UPDATE_RESET })
        }
        dispatch(getOrdersAdmin())
    }, [dispatch, success])


    return (
        <>

            {
                !orderdetails.orderdata ? <h1>LOADING....</h1> : (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="list-group">
                                            {
                                                orderdetails.orderdata.map((i) => {
                                                    return (

                                                        <li className="list-group-item d-flex justify-content-between align-items-center" key={i._id}>
                                                            <span className="text-muted">Order ID- {i._id}</span>

                                                            <h5 className="mt-2">Status:{i.isPaid ? <span className="badge badge-success ">Paid</span> : <span className="badge badge-danger">Not Paid</span>}</h5>
                                                            {i.isDelivered ? <button className="btn btn-success" onClick={() => dispatch(UpdateOrderAdminAction(i._id))}>
                                                                Delivered
                                                            </button> : <button className="btn btn-danger" onClick={() => dispatch(UpdateOrderAdminAction(i._id))}>
                                                                    Not Delivered
                                                            </button>}

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
                )

            }

        </>
    );
}
