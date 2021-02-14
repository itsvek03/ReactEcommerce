import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { postProductAction } from '../../actions/product/product.action'
import { getCatActions } from '../../actions/category/category.action'
import { getSubCatActions } from '../../actions/subcategory/subcategory.action'
import * as Yup from 'yup'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const formSchema = Yup.object().shape({
    PName: Yup.string()
        .min(5, "It must contain 5 characters")
        .required('This field is required'),

    Description: Yup.string()
        .min(30, "It must contain 30 characters")
        .required('This field is required'),

    Price: Yup.number()
        .required('This field is required'),

    Quantity: Yup.number()
        .required('This field is required'),

    Category: Yup.string()
        .required('This field is required'),

    SubCategory: Yup.string()
        .required('This field is required'),

    PImage: Yup.mixed()
        .required('This field is required'),
})


class ProductAdmin extends Component {
    componentDidMount() {
        this.props.getCatActions();
        this.props.getSubCatActions()
        console.log("PRODUCT ADMIN", this.props.getCatActions())
        console.log("PRODUCT ADMIN SUBCATEGORY", this.props.getSubCatActions())
    }
    render() {
        console.log("CART REDUCER", this.props.getCatreducer);
        if (!this.props.getCatreducer) {
            return <h1>LOADING....</h1>
        }

        if (!this.props.getSubCatreducer) {
            return <h1>LOADING....</h1>
        }
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Formik
                                initialValues={
                                    {
                                        PName: '',
                                        Description: '',
                                        Price: '',
                                        Quantity: '',
                                        Category: '',
                                        SubCategory: '',
                                        PImage: ''
                                    }
                                }
                                validationSchema={formSchema}
                                onSubmit={async (values, actions) => {
                                    await sleep(500);
                                    console.log(values)
                                    console.log(values.Price)

                                    let d = new FormData();
                                    d.append('PName', values.PName)
                                    d.append('Description', values.Description)
                                    d.append('Price', values.Price)
                                    d.append('Quantity', values.Quantity)
                                    d.append('Category', values.Category)
                                    d.append('SubCategory', values.SubCategory)
                                    d.append('PImage', values.PImage)

                                    this.props.postProductAction(d)
                                    //props.UserRegisterAction(values)
                                    setTimeout(() => {
                                        actions.setSubmitting(false)
                                        actions.resetForm()
                                    }, 1000)
                                }}
                            >
                                {({ isSubmitting, touched, errors, values, formProps, setFieldValue }) => (
                                    <Form>
                                        <div className="form-group">
                                            <Field
                                                id="PName"
                                                type="text"
                                                name="PName"
                                                placeholder="Enter the Product Name"
                                                autoComplete="off"
                                                values={values.PName}
                                                className={`form-control  ${(touched.PName && errors.PName) ? 'border border-danger' : ''}`}
                                            />
                                            <ErrorMessage name="PName" />
                                        </div>

                                        <div className="form-group">
                                            <Field
                                                id="Description"
                                                type="text"
                                                name="Description"
                                                placeholder="Description"
                                                values={values.Description}
                                                autoComplete="off"
                                                className={`form-control  ${(touched.Description && errors.Description) ? 'border border-danger' : ''}`}
                                            />
                                            <ErrorMessage name="Description" />
                                        </div>


                                        <div className="form-group">
                                            <Field
                                                id="Price"
                                                type="number"
                                                name="Price"
                                                values={values.Price}
                                                placeholder="Price"
                                                autoComplete="off"
                                                className={`form-control  ${(touched.Price && errors.Price) ? 'border border-danger' : ''}`}
                                            />
                                            <ErrorMessage name="Price" />
                                        </div>



                                        <div className="form-group">
                                            <Field
                                                id="Quantity"
                                                type="number"
                                                name="Quantity"
                                                placeholder="Quantuty"
                                                autoComplete="off"
                                                values={values.Quantity}
                                                className={`form-control  ${(touched.Quantity && errors.Quantity) ? 'border border-danger' : ''}`}
                                            />
                                            <ErrorMessage name="Quantity" />
                                        </div>

                                        <div className="form-group">
                                            <Field
                                                component="select"
                                                name="Category"
                                                className={`form-control  ${(touched.Category && errors.Category) ? 'border border-danger' : ''}`}
                                            >
                                                {
                                                    this.props.getCatreducer.map((catitem) => {
                                                        return (

                                                            <option key={catitem._id} value={catitem._id} label={catitem.cname} />
                                                        )
                                                    })
                                                }
                                            </Field>
                                            <ErrorMessage name="Category" />
                                        </div>

                                        <div className="form-group">
                                            <Field
                                                component="select"
                                                name="SubCategory"
                                                className={`form-control  ${(touched.SubCategory && errors.SubCategory) ? 'border border-danger' : ''}`}
                                            >
                                                {
                                                    this.props.getSubCatreducer.map((catitem) => {
                                                        return (

                                                            <option key={catitem._id} value={catitem._id} label={catitem.subname} />
                                                        )
                                                    })
                                                }
                                            </Field>
                                            <ErrorMessage name="SubCategory" />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                name="PImage"
                                                className={`form-control  ${(touched.PImage && errors.PImage) ? 'border border-danger' : ''}`}
                                                onChange={(event) => { setFieldValue("PImage", event.target.files[0]) }
                                                }
                                            />


                                            <ErrorMessage name="PImage" />
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Please Wait" : "Add Product"}
                                            </button >
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("PRODUCT ADMIN STATE", state);
    return {
        getSubCatreducer: state.getSubCatreducer.data,
        getCatreducer: state.getCatreducer.data,
    }
}


export default connect(mapStateToProps, { postProductAction, getCatActions, getSubCatActions })(ProductAdmin)