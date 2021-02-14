import React, { useEffect, useState } from 'react'
import Login from '../src/components/Login/App.jsx'
import SignUp from '../src/components/SignUp//App.jsx'
import ForgotPassword from '../src/components/forgotPassword/App'
import ResetPassword from '../src/components/resetPassword/App'
import FeedBack from '../src/components/FeedBack/App.jsx'
import Header from '../src/components/Header/Header.jsx'
import Footer from '../src/components/Footer/Footer'
import Home from '../src/components/Home/App'
import ProductDetail from '../src/components/ProductDetails/ProductDetail'
import { Route, Switch } from 'react-router-dom'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard'
import AdminRoute from '../src/shared/Routes/AdminRoute'
import UserRoute from '../src/shared/Routes/UserRoute'
import Cart from './components/Cart/Cart'
import { ShippingScreen } from './components/orderShipping/ShippingScreen'
import Payment from './components/orderShipping/Payment'
import PlaceOrder from './components/orderShipping/PlaceOrder'
import OrderData from './components/OrdersDashBoard/App'
import OrderDetail from './components/OrdersDashBoard/OrderDetail'
import '../src/style/loader.css'




export default function App() {
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);


    return (
        <div className="conatiner-fluid">
            {
                loading ? (
                    <div className="loader">
                        <ClimbingBoxLoader size={40} color={'#F37A24'} loading={loading} />
                    </div>

                ) :

                    (
                        <div className="container-fluid">
                            < Header />
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/signup' component={SignUp} />
                                <Route exact path='/login' component={Login} />
                                <Route exact path='/forgotPassword' component={ForgotPassword} />
                                <Route exact path='/resetPassword/:token' component={ResetPassword} />
                                <Route exact path='/feedback' component={FeedBack} />
                                <Route exact path="/productdetails/:id" component={ProductDetail} />
                                <AdminRoute exact path="/admin/adminDashboard" component={AdminDashBoard} />
                                <UserRoute exact path="/cart" component={Cart} />
                                <UserRoute exact path="/shipping" component={ShippingScreen} />
                                <UserRoute exact path="/placeorder" component={PlaceOrder} />
                                <UserRoute exact path="/payment" component={Payment} />
                                <UserRoute exact path="/orders" component={OrderData} />
                                <UserRoute exact path="/orders/:orderid" component={OrderDetail} />
                            </Switch>
                            <Footer />
                        </div>
                    )
            }
        </div>
    )
}
