import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { CheckOutSteps } from './CheckOutSteps'
import { Link } from 'react-router-dom'




const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const formSchema = Yup.object().shape({
    Address: Yup.string()
        .min(3, 'Address atleast have 3 characters')
        .required('This field is required')
        .trim(),

    City: Yup.string()
        .min(2, 'City atleast have 2 characters')
        .required('This field is required')
        .trim(),

    PostalCode: Yup.number()
        .required('This field is required'),


    Country: Yup.string()
        .min(3, "Minimum 3 characters is required ")
        .required('This field is required'),
})



export const ShippingScreen = ({ history }) => {
    console.log(history)
    const getItems = JSON.parse(localStorage.getItem("shipping"));
    console.log(getItems)
    //console.log(getItems.Address);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <CheckOutSteps step1 />
                        <div className="card shadow-lg">
                            <div className="card-body">
                                <h1 className="text-center text-muted">Shipping Details</h1>
                                <hr />

                                <Formik
                                    initialValues={
                                        {
                                            Address: (getItems === null ? '' : getItems.Address),
                                            City: (getItems === null ? '' : getItems.City),
                                            PostalCode: (getItems === null ? '' : getItems.PostalCode),
                                            Country: (getItems === null ? '' : getItems.Country)
                                        }
                                    }

                                    validationSchema={formSchema}
                                    onSubmit={async (values, actions) => {
                                        await sleep(500);
                                        // console.log({ shippingAddress: values })
                                        localStorage.setItem("shipping", JSON.stringify(values))
                                        setTimeout(() => {
                                            actions.setSubmitting(false)
                                            actions.resetForm()
                                        }, 1000)
                                        history.push('/payment')

                                    }}>

                                    {({ isSubmitting, touched, errors, values }) => (
                                        <Form >
                                            <div className="m-4">
                                                <Field
                                                    id="Address"
                                                    type="text"
                                                    name="Address"
                                                    placeholder="Enter your Address"
                                                    autoComplete="off"
                                                    value={values.Address}
                                                    className={`form-control  ${(touched.Address && errors.Address) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="Address" />
                                            </div>

                                            <div className="m-4">
                                                <Field
                                                    id="City"
                                                    type="text"
                                                    name="City"
                                                    placeholder="Enter your City"
                                                    autoComplete="off"
                                                    className={`form-control  ${(touched.City && errors.City) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="City" />
                                            </div>

                                            <div className="m-4">
                                                <Field
                                                    id="PostalCode"
                                                    type="number"
                                                    name="PostalCode"
                                                    placeholder="Enter your PostalCode"
                                                    autoComplete="off"
                                                    className={`form-control  ${(touched.PostalCode && errors.PostalCode) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="PostalCode" />
                                            </div>

                                            <div className="m-4">
                                                <Field
                                                    id="country"
                                                    type="Country"
                                                    name="Country"
                                                    placeholder="Enter your Country"
                                                    autoComplete="off"
                                                    className={`form-control ${(touched.Country && errors.Country) ? 'border border-danger' : 'is-valid'}`}
                                                />
                                                <ErrorMessage name="Country" />
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

        </>
    )
}
