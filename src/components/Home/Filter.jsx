import React, { useEffect, useState } from 'react'
import Slider from '@material-ui/core/Slider';
import { useDispatch } from 'react-redux'
import { productInfo } from '../../actions/product/product.action'
export default function Filter() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
        dispatch(productInfo(newValue))
    };

    console.log("New Value of v", value)
    return (
        <>
            <div className="container mt-5" style={{ height: 900 }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-center" style={{ height: 700 }}>
                            <div className="card-body" style={{ outline: 'none' }}>
                                <h4 className="card-title text-center bold">Price</h4>
                                <hr />
                                <Slider
                                    defaultValue={value}
                                    min={200}
                                    orientation="vertical"
                                    aria-labelledby="vertical-slider"
                                    step={1000}
                                    max={100000}
                                    value={value}
                                    valueLabelDisplay="on"
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}
