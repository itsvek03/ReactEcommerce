import React, { Component } from 'react'
import Rating from 'material-ui-rating'
import { productInfoById } from '../../actions/product/product.action'
import { postcartAction } from '../../actions/cart/cart.actions'
import { postReviewAction } from '../../actions/reviews/reviews.action'
import Spinner from '../Spinner/Spinner'
import { connect } from 'react-redux'
import { isAuthenticated } from '../../shared/helper/auth'
import Swal from 'sweetalert2'



class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quantity: 1,
            rating: 1,
            review: '',
            user: { id: '' }
        }
    }

    componentDidMount() {
        console.log("PRODUCT ID", this.props)
        this.props.productInfoById(this.props.match.params.id);

        let userdata = JSON.parse(localStorage.getItem("currentuser"));
        if (userdata) {
            let { data: { data: { user } } } = userdata
            this.state.user = user
            // console.log("UserDetails", userDetails.user.data.data.user.id)
            console.log("USerDetails", user.id)
        }

    }



    handleSubmit = (e) => {
        e.preventDefault();
        if (isAuthenticated()) {
            let d = {
                rating: this.state.rating,
                review: this.state.review,
                product: this.props.match.params.id,
            }
            console.log(d);
            this.props.postReviewAction(d, d.product);
            this.setState({ rating: '', review: '' })
        }
        else {

            Swal.fire({
                title: "Alert",
                text: `Please Login First`,
                icon: "warning",
                timer: 2000,
            })

        }
        this.setState({ rating: '', review: '' })
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    onpostCart = () => {
        this.props.postcartAction({ Quantity: this.state.Quantity }, this.props.match.params.id, this.state.user.id);
    }

    onrating = (event) => {
        console.log(event)
        this.setState({ rating: event })
    }



    render() {
        const formatCurrency = (value) => {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR', currencyDisplay: 'narrowSymbol' }).format(value)
        }
        if (this.props.loading) { return <Spinner /> }
        if (!this.props.productInfo) { return null };
        //console.log("DATA", this.props.productInfo);
        //console.log("ERROR Reducer", this.props.postCartReducerError)
        return (
            <>
                <div className="card container-fluid shadow-lg mt-4 p-3">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid img-responsive border rounded" src={this.props.productInfo.PImage} alt="Loading...." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{this.props.productInfo.PName} </h4>
                                    <p className="card-text">
                                        {this.props.productInfo.Description}
                                    </p>

                                    <h4>{formatCurrency(this.props.productInfo.Price)}</h4>

                                    <div className="d-flex m-3 p-2">
                                        <Rating
                                            value={this.props.productInfo.ratingsAverage}
                                        />
                                        <span className="h5">({this.props.productInfo.ratingsQuantity})</span>
                                    </div>

                                    <div className="d-flex">
                                        <button type="button" className="btn btn-lg btn-danger" onClick={() => this.setState((prevstate, props) => ({ Quantity: prevstate.Quantity - 1 }))}>
                                            <i
                                                className="fal fa-minus-circle" ></i>
                                        </button>
                                        <div className="p-3">
                                            <h1>{this.state.Quantity}</h1>
                                        </div>

                                        <button type="button" className="btn btn-lg rounded btn-success" onClick={() => this.setState((prevstate, props) => ({ Quantity: prevstate.Quantity + 1 }))}>
                                            <i className="fas fa-plus-circle"></i>
                                        </button>
                                    </div>
                                    <div className="m-2">
                                        <button
                                            type="button"
                                            className="btn btn-lg btn-primary"
                                            onClick={() => this.onpostCart()}
                                        >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="col-md-12">
                        <h1 className="h1 text-muted text-center">Reviews</h1>
                        <div className="col-md-12">
                            {
                                this.props.productInfo.review.map((rev) => {
                                    return (
                                        <div className="card mt-2 p-3 shadow-lg" key={rev.id}>
                                            <div className="card-text">
                                                <Rating
                                                    value={rev.rating}

                                                />

                                                <blockquote className="blockquote">
                                                    <p className="mb-0">{rev.review}</p>
                                                    <footer className="blockquote-footer">{rev.user.Email}</footer>
                                                </blockquote>

                                                <span></span>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>

                    <hr />

                    <div className="col-md-12">
                        <h1 className="h1 text-muted text-center">Give Your Review</h1>
                        <div className="col-md-12 d-flex">
                            <span className="h3">Ratings </span>
                            <Rating
                                name="rating"
                                value={this.state.rating}
                                onChange={(e) => this.onrating(e)}
                                max={5} />
                        </div>

                        <div className="col-md-12 m-2">
                            <div className="input-group">
                                <textarea
                                    className="form-control"
                                    name="review"
                                    value={this.state.review}
                                    aria-label="With textarea"
                                    onChange={this.handleInput}>
                                </textarea>
                            </div>
                        </div>

                        <div className="col-md-12 d-flex m-2 p-3">
                            <button
                                type="button"
                                className="btn btn-success btn-lg btn-block"
                                onClick={this.handleSubmit}
                            >Submit</button>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("PRODUCT DETAIL MAP", state)
    return {
        productInfo: state.ShowProductDetailsId.item,
        loading: state.ShowProductDetailsId.loading,
        postCartReducer: state.postCartReducer.cartdata,
        postCartReducerError: state.postCartReducer.error,
        postReviewReducer: state.postReviewReducer.reviewdata,
        loginuserdata: state.loginuserdata
    }
}

export default connect(mapStateToProps, { productInfoById, postcartAction, postReviewAction })(ProductDetail)
