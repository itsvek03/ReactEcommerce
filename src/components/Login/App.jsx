import React, { Component } from 'react'
import SideImages from '../SideImages/Sideimg'
import img1 from '../../images/signup.svg'
import Login from '../Login/Login'
export default class App extends Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-white">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <SideImages img={img1} />
                        </div>
                        <div className="col-md-4 mt-5">
                            <Login />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
