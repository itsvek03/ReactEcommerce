import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../shared/helper/auth'

const AdminRoute = ({ component: Componet, ...rest }) => {
    //console.log(...rest)
    return (

        <Route
            {...rest}

            render={(props) =>
                isAuthenticated() && isAuthenticated().data.data.user.role === "Admin" ?
                    (<Componet {...props} />) :

                    (<Redirect to="/login" />)
            }
        />

    )
}
export default AdminRoute;
