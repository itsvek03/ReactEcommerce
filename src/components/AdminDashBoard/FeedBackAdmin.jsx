import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deletefeeedbackAction, getfeedbackActions } from '../../actions/feedback/feedback.actions'

function FeedBackAdmin() {

    const dispatch = useDispatch();
    const feeddetails = useSelector(state => state.getfeedreducer);
    const delfeeddetails = useSelector(state => state.deletefeedreducer);
    console.log("del", delfeeddetails)
    console.log("FEEDBACK COmpO", feeddetails);
    let { message, error } = feeddetails;

    useEffect(() => {
        dispatch(getfeedbackActions())
    }, [dispatch])

    return (
        <>
            {
                !message ? <h1> Loading data</h1> : <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                message.map((item) => {
                                    return (
                                        <div className="card shadow-lg m-3" key={item._id}>
                                            <div className="card-body">
                                                <div className="row">

                                                    <div className="col-md-8">
                                                        <blockquote className="blockquote">
                                                            <p className="mb-0">{item.FeedBack}</p>
                                                            <footer className="blockquote-footer">{item.Name}</footer>
                                                        </blockquote>

                                                    </div>

                                                    <div className="col-md-2 mt-4">
                                                        <div className="sub-row">
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm btn-block rounded"
                                                                onClick={() => dispatch(deletefeeedbackAction(item._id))}
                                                            >Delete</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            }

        </>
    )
}





export default FeedBackAdmin;
