import React from 'react'
import { useSelector } from "react-redux"

export const CartBill = ({ history }) => {

    console.log("history", history)



    const getcart = useSelector(state => state.getCartReducer)


    const { cartdata } = getcart
    console.log("CartBill", getcart)

    const totalValue = Object.values(getcart).reduce((t, { totalPrice }) => t + totalPrice, 0)
    console.log(totalValue)


    return (
        <>
            {!cartdata ? <h1>Nodata</h1> :
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Total Amount</h3>
                                    <div className="d-flex align-items-end flex-column">
                                        <h5 className="h5 ">{Object.values(cartdata).reduce((t, { totalPrice }) => t + totalPrice, 0)}</h5>
                                        <hr />
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg btn-block m-2 p-1"
                                        onClick={() => history.push('/shipping')}
                                    >Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
