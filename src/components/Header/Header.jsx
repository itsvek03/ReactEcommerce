import React, { Component } from 'react'
import '../../style/style.css'
import img1 from './logo.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated } from '../../shared/helper/auth'
import { logOutAction } from '../../actions/user.actions'

class Header extends Component {

    render() {

        return (
            <>
                <header className="container-fluid navmy_style mx-auto">
                    <div className="row">
                        <div className="col-md-10 col-11 mx-auto">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <NavLink className="navbar-brand" to="/">
                                        <img src={img1} className="img img-fluid" alt="Loading.." />
                                    </NavLink>



                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>



                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">


                                            <li className="nav-item ">
                                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                            </li>


                                            {
                                                !isAuthenticated() && (
                                                    <>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/feedback">FeedBack</NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/signup">SIGNUP</NavLink>
                                                        </li>
                                                    </>
                                                )
                                            }


                                            {
                                                isAuthenticated() && isAuthenticated().data.data.user.role === "Visitor" && (
                                                    <>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/">{isAuthenticated().data.data.user.FirstName}</NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/feedback">FeedBack</NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/cart">CART</NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/orders">ORDERS</NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/login" onClick={() => this.props.logOutAction()}>LOG OUT</NavLink>
                                                        </li>
                                                    </>
                                                )
                                            }


                                            {
                                                isAuthenticated() && isAuthenticated().data.data.user.role === "Admin" && (
                                                    <>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/admin/adminDashBoard">{isAuthenticated().data.data.user.FirstName}</NavLink>
                                                        </li>


                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" to="/login" onClick={() => this.props.logOutAction()} >LOG OUT</NavLink>
                                                        </li>
                                                    </>
                                                )
                                            }

                                        </ul>
                                    </div>
                                </div>

                            </nav>


                        </div>
                    </div>

                </header>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("HEADER MAP", state)
    return {}
}


export default connect(mapStateToProps, { isAuthenticated, logOutAction })(Header)
