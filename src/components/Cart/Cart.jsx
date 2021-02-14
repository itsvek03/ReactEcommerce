import React from 'react'
import { CartBill } from './CartBill'
import CartDetail from './CartDetail'

export default function Cart({ history }) {
    console.log(history)
    return (
        <>
            <div className="container-fluid mt-4 p-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-lg text-white bg-success">
                            <div className="card-body ">
                                <h1 className="h1 text-center"> USER CART</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <CartDetail />
                    </div>

                    <div className="col-md-4">
                        <CartBill history={history} />
                    </div>
                </div>
            </div>
        </>
    )
}
