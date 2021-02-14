import React from 'react'
import img2 from '../../images/quotes.jpg'

export default function FeedWrite() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mt-2">
                            <div className="card shadow-lg">
                                <div className="card-body border-left border-success">
                                    <div className="mt-2">
                                        <blockquote className="blockquote text-right" style={{ fontSize: 40, fontFamily: '', }}>
                                            <p className="mb-0"> “We all need people who will give us feedback. That’s how we improve.”</p>
                                            <footer className="blockquote-footer">Salman <cite title="Source Title">Khan</cite></footer>
                                            <img src={img2} className="img img-responsive img-fluid rounded-circle" style={{ width: 150 }} alt="Loading..." />
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
