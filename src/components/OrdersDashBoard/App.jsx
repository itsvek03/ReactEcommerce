import React from 'react'
import UserProfile from './UserProfile'
import OrderList from './OrderList'

export default function App() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <UserProfile />
                    </div>
                    <div className="col-md-8">
                        <OrderList />
                    </div>
                </div>
            </div>
        </>
    )
}
