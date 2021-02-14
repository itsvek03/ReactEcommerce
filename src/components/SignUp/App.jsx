import React, { Component } from 'react'
import SideImages from '../SideImages/Sideimg'
import img1 from '../../images/login.svg'
import SignUp from '../SignUp/SignUp'
export default class App extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 mt-5 p-2 center">
                            <SideImages img={img1} />
                        </div>
                        <div className="col-md-4 mt-5">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
