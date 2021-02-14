import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCartActions, RemoveToCartAction, postcartAction } from "../../actions/cart/cart.actions"

function CartDetail() {
    const dispatch = useDispatch()
    const cartDetails = useSelector(state => state.getCartReducer)
    console.log("card details", cartDetails)
    //const { loading, cartdata, error } = cartDetails
    const { cartdata } = cartDetails


    const deleteCart = useSelector(state => state.deleteCartReducer)
    console.log(deleteCart)

    const postcart = useSelector(state => state.postCartReducer)
    console.log(postcart)

    var { user: { data: { data: { user } } } } = useSelector(state => state.loginuserdata)
    // console.log("UserDetails", userDetails.user.data.data.user.id)
    console.log("USerDetails", user.id)



    var userDetails = useSelector(state => state.loginuserdata)
    console.log(userDetails)
    useEffect(() => {
        dispatch(getCartActions(user.id))
    }, [dispatch, user])

    return (
        <>
            {
                !cartdata ? <h1>No Data!</h1> :
                    (<div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    cartdata.map((item) => {
                                        return (
                                            <div className="card shadow-lg m-2" key={item._id}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <img className="img img-responsive img-thumbnail m-3" src={item.ProductId.PImage} style={{ width: 200 }} alt="Loading..." />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h1 className="h1">{item.ProductId.PName}</h1>
                                                            <div className="card-text">

                                                                <div className="d-flex p-2">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-lg btn-danger m-2"
                                                                        onClick={() => dispatch(postcartAction({ Quantity: -1 }, item.ProductId.id, userDetails.user.data.data.user.id, false))}
                                                                    >
                                                                        <i
                                                                            className="fal fa-minus-circle" ></i>
                                                                    </button>
                                                                    <span className="h2 text-muted m-2">{item.Quantity}</span>
                                                                    <button type="button"
                                                                        className="btn btn-lg rounded btn-success m-2"
                                                                        onClick={() => dispatch(postcartAction({ Quantity: 1 }, item.ProductId.id, userDetails.user.data.data.user.id, false))}
                                                                    >
                                                                        <i className="fas fa-plus-circle"></i>
                                                                    </button>
                                                                </div>


                                                            </div>
                                                            <p className="card-text">
                                                                <span className="h2">Total Price: {item.totalPrice}</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-3 align-self-center">
                                                            <button
                                                                type="button"
                                                                className="btn btn-lg btn-danger"
                                                                onClick={() => dispatch(RemoveToCartAction(item._id, userDetails.user.data.data.user.id))}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>)
            }
        </>
    )
}

export default CartDetail;
