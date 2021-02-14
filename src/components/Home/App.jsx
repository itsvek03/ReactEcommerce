import React, { Component } from 'react'
import Filter from './Filter'
import ProductContainer from './ProductContainer'
import { productInfo } from '../../actions/product/product.action'
import { connect } from 'react-redux'
import Spinner from '../Spinner/Spinner'

class App extends Component {
    componentDidMount() {
        //console.log("APP PROPS", this.props)
        this.props.productInfo()
        //console.log(this.props.productInfo)
    }
    render() {
        if (this.props.loading) { return <Spinner /> }
        if (!this.props.ShowProductDetails) { return null };
        return (
            <>
                <div className="container-fluid card shadow-lg mt-4">
                    <div className="row">
                        {/* <div className="col-md-3 mt-2" style={{ height: 1000 }}>
                            <Filter />
                        </div> */}
                        <div className="col-md-12 mt-2">
                            <ProductContainer
                                product={this.props.ShowProductDetails}
                                {...this.props}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log("PRODUCT  MAP", state)
    return {
        ShowProductDetails: state.ShowProductDetails.item,
        loading: state.ShowProductDetails.loading
    }
}

export default connect(mapStateToProps, { productInfo })(App)