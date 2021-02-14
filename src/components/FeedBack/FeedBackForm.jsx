import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { postfedbackAction } from '../../actions/feedback/feedback.actions'

const formSchema = Yup.object().shape({
    Name: Yup.string()
        .min(3, "Atleast 3 characters are required")
        .required('This field is required')
        .trim(),

    Email: Yup.string()
        .email('Invalid Email address format')
        .required('This field is required')
        .trim(),

    FeedBack: Yup.string()
        .min(15, "Password must be 15 chararcters atleast")
        .required('This field is required')
        .trim()
})

function FeedBackForm(props) {
    console.log("FEEDBACK_FORM", props)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <Formik
                                    initialValues={
                                        {
                                            Name: '',
                                            Email: '',
                                            FeedBack: '',
                                        }
                                    }
                                    validationSchema={formSchema}
                                    onSubmit={(values, actions) => {
                                        console.log(values)
                                        props.postfedbackAction(values)
                                        setTimeout(() => {

                                            //alert(JSON.stringify(values, null, 3));
                                            actions.setSubmitting(false)
                                            actions.resetForm()
                                        }, 1000)
                                    }}>

                                    {({ isSubmitting, touched, errors }) => (
                                        <Form >
                                            <div className="m-4">
                                                <Field
                                                    id="name"
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Please enter your name"
                                                    autoComplete="off"
                                                    className={`form-control ${(touched.Name && errors.Name) ? 'border border-danger' : ''}`}
                                                />
                                                <ErrorMessage name="Name" />
                                            </div>

                                            <div className="m-4">
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

                                            <div className="m-4 mb-5">
                                                <Field
                                                    as="textarea"
                                                    id="feed"
                                                    type="text"
                                                    name="FeedBack"
                                                    placeholder="Give your FeedBack ....."
                                                    rows="4"
                                                    autoComplete="off"
                                                    className={`form-control ${(touched.FeedBack && errors.FeedBack) ? 'border border-danger' : ''}`}
                                                />
                                                <ErrorMessage name="FeedBack" />
                                            </div>

                                            <div className="d-flex justify-content-center mb-5">
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
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("FEEDBACK MAP", state)
    return {
        postbackfeeddata: state.postfeedbackdat
    }
}


export default connect(mapStateToProps, { postfedbackAction })(FeedBackForm)