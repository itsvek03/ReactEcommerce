import React, { Component } from 'react'
import { ResetPasswordActions } from '../../actions/forgot/forgot.action'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const formSchema = Yup.object().shape({
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
})


class ResetPassword extends Component {
    componentDidMount() {
        console.log("NEAR BY", window.location.pathname.split("/")[2])
        //console.log("SpLIt", window.location.pathname.split("/"))
    }

    render() {
        return (
            <>
                <Formik
                    initialValues={
                        {
                            Password: '',
                            ConfirmPassword: '',
                        }
                    }

                    validationSchema={formSchema}
                    onSubmit={async (values, actions) => {
                        await sleep(500);
                        console.log(values)
                        this.props.ResetPasswordActions(window.location.pathname.split("/")[2],values)
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
                    }}
                >
                    {({ isSubmitting, touched, errors, values }) => (
                        <Form>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 col-md-offset-4">
                                        <div className="card mt-5">
                                            <div className="card-body">
                                                <div className="panel panel-default">
                                                    <div className="panel-body">
                                                        <div className="text-center">
                                                            <h3><i className="fa fa-lock fa-4x"></i></h3>
                                                            <h2 className="text-center">Reset Password</h2>

                                                            <div className="panel-body">

                                                                <div className="form-group">
                                                                    <Field
                                                                        id="email"
                                                                        type="text"
                                                                        name="Password"
                                                                        placeholder="Enter your email"
                                                                        autoComplete="off"
                                                                        className={`form-control  ${(touched.Password && errors.Password) ? 'border border-danger' : ''}`}
                                                                    />
                                                                    <ErrorMessage name="Password" />
                                                                </div>

                                                                <div className="form-group">
                                                                    <Field
                                                                        id="email"
                                                                        type="text"
                                                                        name="ConfirmPassword"
                                                                        placeholder="Enter your email"
                                                                        autoComplete="off"
                                                                        className={`form-control  ${(touched.ConfirmPassword && errors.ConfirmPassword) ? 'border border-danger' : ''}`}
                                                                    />
                                                                    <ErrorMessage name="ConfirmPassword" />
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        ResetpassReducer: state.ResetpassReducer.data
    }
}

export default connect(mapStateToProps, { ResetPasswordActions })(ResetPassword)