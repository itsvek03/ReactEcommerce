import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { UpdateUserAction } from '../../actions/user.actions'
import { useDispatch, useSelector } from 'react-redux'

const formSchema = Yup.object().shape({
    Email: Yup.string()
        .email('Invalid Email address format'),
    LastName: Yup.string()
        .min(3, "Minimum 3 Characters"),
    FirstName: Yup.string()
        .min(3, "Minimum 3 characters")
})


export default function UserProfile() {
    const dispatch = useDispatch();
    var { user: { data: { data: { user } } } } = useSelector(state => state.loginuserdata)
    // console.log("UserDetails", userDetails.user.data.data.user.id)
    console.log("USerDetails", user)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title text-center text-muted">PROFILE</h4>
                                <hr />
                                <Formik
                                    initialValues={
                                        {
                                            Email: user.Email,
                                            FirstName: user.FirstName,
                                            LastName: user.LastName
                                        }
                                    }
                                    validationSchema={formSchema}
                                    onSubmit={(values, actions) => {
                                        console.log(values)
                                        dispatch(UpdateUserAction(values));
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

                                                    autoComplete="off"
                                                    className={`form-control  ${(touched.Email && errors.Email) ? 'border border-danger' : ''}`}
                                                />
                                                <ErrorMessage name="Email" />

                                            </div>

                                            <div className="m-3">
                                                <Field
                                                    id="FirstName"
                                                    type="text"
                                                    name="FirstName"

                                                    autoComplete="off"
                                                    className={`form-control ${(touched.FirstName && errors.FirstName) ? 'border border-danger' : ''}`}
                                                />
                                                <ErrorMessage name="FirstName" />
                                            </div>

                                            <div className="m-3">
                                                <Field
                                                    id="LastName"
                                                    type="text"
                                                    name="LastName"
                                                    autoComplete="off"
                                                    className={`form-control ${(touched.LastName && errors.LastName) ? 'border border-danger' : ''}`}
                                                />
                                                <ErrorMessage name="LastName" />
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
        </div>
    )
}
