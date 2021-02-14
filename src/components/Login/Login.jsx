import React from 'react'
import img1 from '../Header/logo.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { loginUserAction } from '../../actions/user.actions'

const formSchema = Yup.object().shape({
    Email: Yup.string()
        .email('Invalid Email address format')
        .required('This field is required'),

    Password: Yup.string()
        .min(8, "Password must be 8 chararcters atleast")
        .required('This field is required'),
})


function Login(props) {
    console.log("LOGIN PROPS", props)
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 d-flex justify-content-center">
                                        <img src={img1} className="img img-fluid m-4" style={{ width: 60 }} alt="Loading..." />
                                    </div>
                                    <div className="col-md-8 d-flex align-center mt-4">
                                        <center>
                                            <h1 className="h1 text-uppercase text-muted" style={{ letterSpacing: 10, fontSize: 50, fontFamily: 'Hanalei Fill' }}>Log in</h1>
                                        </center>

                                    </div>
                                </div>
                                <hr />
                            </div>

                            <Formik
                                initialValues={
                                    {
                                        Email: '',
                                        Password: '',
                                    }
                                }
                                validationSchema={formSchema}
                                onSubmit={(values, actions) => {
                                    console.log(values)
                                    props.loginUserAction(values);
                                    setTimeout(() => {
                                        //alert(JSON.stringify(values, null, 3));
                                        actions.setSubmitting(false)
                                        actions.resetForm()
                                    }, 1000)
                                }}>

                                {({ isSubmitting, touched, errors }) => (
                                    <Form >
                                        <div className="m-3">
                                            <Field
                                                id="email"
                                                type="text"
                                                name="Email"
                                                placeholder="Enter your email"
                                                autoComplete="off"
                                                className={`form-control  ${(touched.Email && errors.Email) ? 'border border-danger' : ''}`}
                                            />
                                            <ErrorMessage name="Email" />

                                        </div>

                                        <div className="m-3">
                                            <Field
                                                id="pass"
                                                type="password"
                                                name="Password"
                                                placeholder="Enter your password"
                                                autoComplete="off"
                                                className={`form-control ${(touched.Password && errors.Password) ? 'border border-danger' : ''}`}
                                            />
                                            <ErrorMessage name="Password" />
                                        </div>

                                        <div className="m-3">
                                            <NavLink className="text-primary" to="/forgotPassword">Forgot Password</NavLink>
                                        </div>


                                        <div className="d-flex justify-content-center m-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg col-6"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Please Wait" : "Submit"}
                                            </button >
                                        </div>


                                    </Form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("MAP LOGIN", state)
    return {}
}

export default connect(mapStateToProps, { loginUserAction })(Login)