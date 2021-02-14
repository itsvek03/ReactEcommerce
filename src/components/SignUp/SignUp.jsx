import React from 'react'
import img1 from '../Header/logo.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
//import Swal from 'sweetalert2';
import { UserRegisterAction } from '../../actions/user.actions'
import { connect } from 'react-redux'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const formSchema = Yup.object().shape({
    FirstName: Yup.string()
        .min(3, 'FirstName atleast have 3 characters')
        .required('This field is required')
        .trim(),

    LastName: Yup.string()
        .min(3, 'FirstName atleast have 3 characters')
        .required('This field is required')
        .trim(),

    Email: Yup.string()
        .email('Invalid Email address format')
        .required('This field is required')
        .trim(),

    Password: Yup.string()
        .min(8, "Password must be 8 chararcters atleast")
        .required('This field is required'),

    ConfirmPassword: Yup.string()
        .required('This field is required')
        .when("Password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("Password")],
                "Both password need to be the same"
            )
        }),
    termsAccepted: Yup.string()
        .required('Please tick mark the field')

})

function SignUp(props) {
    console.log("SIGNUP COMPONENTS", props)
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
                                        <h1 className="h1 text-uppercase text-muted" style={{ letterSpacing: 10, fontSize: 40, fontFamily: 'Hanalei Fill' }}>Sign up</h1>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="card-body">
                                <Formik
                                    initialValues={
                                        {
                                            FirstName: '',
                                            LastName: '',
                                            Email: '',
                                            Password: '',
                                            ConfirmPassword: '',
                                            termsAccepted: ''
                                        }
                                    }

                                    validationSchema={formSchema}
                                    onSubmit={async (values, actions) => {
                                        await sleep(500);
                                        console.log(values)
                                        props.UserRegisterAction(values)
                                        setTimeout(() => {
                                            // Swal.fire({
                                            //     title: "Done!",
                                            //     text: values.Email + "Register Successfully",
                                            //     icon: "success",
                                            //     timer: 2000,

                                            // })
                                            //alert(JSON.stringify(values, null, 3));
                                            actions.setSubmitting(false)
                                            actions.resetForm()
                                        }, 1000)
                                    }}>

                                    {({ isSubmitting, touched, errors, values }) => (
                                        <Form >
                                            <div className="m-4">
                                                <Field
                                                    id="firstname"
                                                    type="text"
                                                    name="FirstName"
                                                    placeholder="Enter your FirstName"
                                                    autoComplete="off"
                                                    value={values.FirstName}
                                                    className={`form-control  ${(touched.FirstName && errors.FirstName) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="FirstName" />
                                            </div>

                                            <div className="m-4">
                                                <Field
                                                    id="lastname"
                                                    type="text"
                                                    name="LastName"
                                                    placeholder="Enter your LastName"
                                                    autoComplete="off"
                                                    className={`form-control  ${(touched.LastName && errors.LastName) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="LastName" />
                                            </div>

                                            <div className="m-4">
                                                <Field
                                                    id="email"
                                                    type="text"
                                                    name="Email"
                                                    placeholder="Enter your email"
                                                    autoComplete="off"
                                                    className={`form-control  ${(touched.Email && errors.Email) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="Email" />
                                            </div>

                                            <div className="m-4">
                                                <Field
                                                    id="pass"
                                                    type="password"
                                                    name="Password"
                                                    placeholder="Enter your password"
                                                    autoComplete="off"
                                                    className={`form-control ${(touched.Password && errors.Password) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="Password" />
                                            </div>

                                            <div className="m-4">
                                                <Field
                                                    id="conpass"
                                                    type="password"
                                                    name="ConfirmPassword"
                                                    placeholder="Retype your password again"
                                                    autoComplete="off"
                                                    className={`form-control ${(touched.ConfirmPassword && errors.ConfirmPassword) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="ConfirmPassword" />
                                            </div>

                                            <div>
                                                <label>
                                                    <Field
                                                        type="checkbox"
                                                        name="termsAccepted"
                                                        className={`ml-4`}
                                                    />
                                                    <span className="ml-3">Accept the terms and conditions</span>
                                                    <span
                                                        className={`m-5 ${(touched.termsAccepted && errors.termsAccepted) ? '' : 'is-valid'}`}
                                                        style={{ color: 'red' }}>
                                                        {errors.ErrorMessage}
                                                    </span>
                                                </label>
                                                <ErrorMessage name="termsAccepted" />
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
        </div >
    )
}

const mapStateToProps = (state) => {
    console.log("SIGNUP MAP STATE", state);
    return { errorMessage: state.userlogindata }
}

export default connect(mapStateToProps, { UserRegisterAction })(SignUp)




