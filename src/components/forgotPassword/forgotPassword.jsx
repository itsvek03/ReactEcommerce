import React, { Component } from 'react'
import { forgotPasswordActions } from '../../actions/forgot/forgot.action'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const formSchema = Yup.object().shape({
    Email: Yup.string()
        .email('Invalid Email address format')
        .required('This field is required'),
})



class ForgotPassword extends Component {
    render() {
        return (
            <>
                <Formik
                    initialValues={
                        {
                            Email: '',
                        }
                    }
                    validationSchema={formSchema}
                    onSubmit={(values, actions) => {
                        console.log(values)
                        this.props.forgotPasswordActions(values);
                        setTimeout(() => {
                            //alert(JSON.stringify(values, null, 3));
                            actions.setSubmitting(false)
                            actions.resetForm()
                        }, 1000)
                    }}>
                    {({ isSubmitting, touched, errors }) => (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-4">
                                    <div className="card mt-5">
                                        <div className="card-body">
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <div className="text-center">
                                                        <h3><i className="fa fa-lock fa-4x"></i></h3>
                                                        <h2 className="text-center">Forgot Password?</h2>
                                                        <p>You can reset your password here.</p>
                                                        <div className="panel-body">
                                                            <Form >
                                                                <div className="form-group">
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

                                                                <div className="d-flex m-3 justify-content-center">
                                                                    <button
                                                                        type="submit"
                                                                        className="btn btn-primary btn-lg col-6"
                                                                        disabled={isSubmitting}
                                                                    >
                                                                        {isSubmitting ? "Please Wait" : "Reset"}
                                                                    </button >
                                                                </div>
                                                            </Form>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Formik>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forgotpassReducer: state.forgotpassReducer
    }
}

export default connect(mapStateToProps, { forgotPasswordActions })(ForgotPassword)
