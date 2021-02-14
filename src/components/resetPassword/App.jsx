import React, { Component } from 'react'
import ResetPassword from './ResetPassword'
import img1 from '../../images/reset.svg'
import SideImages from '../SideImages/Sideimg'

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
                            <ResetPassword />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
