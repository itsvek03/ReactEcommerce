import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import CategoryAdmin from './CategoryAdmin'
import SubCategory from './SubCategory'
import FeedBackAdmin from './FeedBackAdmin'
import ProductAdmin from './ProductAdmin'
import OrderAdmin from './OrderAdmin'



export default function AdminDashBoard() {
    return (
        <>
            <div className="container-fluid mt-4 p-2 ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-lg text-white bg-primary">
                            <div className="card-body ">
                                <h1 className="h1 text-center">ADMIN DASHBOARD</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Router>
                <div className="conatiner-fluid m-4">
                    <div className="row">

                        <div className="col-md-3">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <div className="list-group" id="list-tab" role="tablist">
                                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Product</a>
                                        <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Category</a>
                                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Sub Category</a>
                                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">FeedBack</a>
                                        <a className="list-group-item list-group-item-action" id="list-deliver-list" data-toggle="list" href="#list-deliver" role="tab" aria-controls="deliver">Orders</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 m-2 p-2">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><ProductAdmin /></div>
                                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><CategoryAdmin /></div>
                                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><SubCategory /></div>
                                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><FeedBackAdmin /></div>
                                        <div className="tab-pane fade" id="list-deliver" role="tabpanel" aria-labelledby="list-deliver-list"><OrderAdmin /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    )
}
