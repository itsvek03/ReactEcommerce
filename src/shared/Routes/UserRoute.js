import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../shared/helper/auth'

export default function UserRoute({ component: Componet, ...rest }) {
    //console.log(...rest)
    return (

        <div>
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated() && isAuthenticated().data.data.user.role === "Visitor" ?
                        //localStorage.getItem("token") && localStorage.getItem("currentuser").data.data.user.role === "Visitor" ?
                        (<Componet {...props} />) :
                        (<Redirect to="/login" />)
                }
            />
        </div>
    )
}
