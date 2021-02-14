import React from 'react'
import ProductCard from './ProductCard'

export default function ProductContainer(props) {
    console.log("PRODUCT CONTAINER", props)
    console.log("PRODUCT CONTAINER", props.product)
    if (!props.product) {
        return <h1>Loading</h1>
    }
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        {
                            props.product.map(item => <ProductCard key={item.id} items={item} add={props.history} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
