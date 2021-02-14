import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllOrdersAction } from '../../actions/ordershipping/order.action'
import { NavLink } from 'react-router-dom'

export default function OrderList() {
    const dispatch = useDispatch();
    const orderlist = useSelector(state => state.getOrderByIdReducer);
    console.log("ORDER LIST COMPO", orderlist)

    const { loading, error, orderdata } = orderlist;
    useEffect(() => {
        dispatch(getAllOrdersAction());
    }, [dispatch])

    return (
        <>
            {(error) && (<h1 className="text-danger">{error}</h1>)}
            {(loading) && <h1>LOADING</h1>}

            <div>
                <div className="container-fluid mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="text-center text-muted">ORDERS</h3>
                                    <hr />
                                    {
                                        (!orderdata) ? <h1>No data</h1> : (
                                            <div>
                                                {
                                                    orderdata.map((i) => {
                                                        return (
                                                            <ul className="list-inline" key={i._id}>
                                                                <li className="list-inline-item d-flex justify-content-between align-items-center">
                                                                    <NavLink className="h5" to={`/orders/${i._id}`}>
                                                                        <h5 className="h5 text-muted">{i._id}</h5>
                                                                    </NavLink>
                                                                    <span className="lead">{i.total}</span>
                                                                </li>
                                                                <hr />
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
