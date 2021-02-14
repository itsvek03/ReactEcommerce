import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { CheckOutSteps } from './CheckOutSteps'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const formSchema = Yup.object().shape({
    Payment: Yup.string()
        .required('This field is required')
})

export default function Payment({ history }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <CheckOutSteps step1 step2 />
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <Formik
                                initialValues={
                                    {
                                        Payment: 'Cash On Delivery'
                                    }
                                }
                                validationSchema={formSchema}
                                onSubmit={async (values, actions) => {
                                    await sleep(500);
                                    console.log(values)
                                    //props.UserRegisterAction(values)
                                    localStorage.setItem("payment", JSON.stringify(values))
                                    setTimeout(() => {
                                        actions.setSubmitting(false)
                                        actions.resetForm()
                                    }, 1000)
                                    history.push('/placeorder')
                                }}>

                                {({ isSubmitting, touched, errors, values }) => (
                                    <Form >
                                        <div className="form-group">
                                            <Field
                                                component="select"
                                                name="Payment"
                                                className={`form-control  ${(touched.SubCategory && errors.SubCategory) ? 'border border-danger' : ''}`}
                                            >
                                                <option value="Cash on Delivery" label="Cash On Delivery" />
                                                <option value="Credit Card" label="Credit Card" />
                                            </Field>
                                            <ErrorMessage name="Payment" />
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
