import React, { useEffect } from 'react'
import { isAuthenticated } from '../../shared/helper/auth'
import { DeleteProductAction, UpdateProductAction, productInfoById } from '../../actions/product/product.action'
import { useDispatch, useSelector } from "react-redux"
import { getCatActions } from '../../actions/category/category.action'
import { getSubCatActions } from '../../actions/subcategory/subcategory.action'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const formSchema = Yup.object().shape({
    PName: Yup.string()
        .min(5, "It must contain 5 characters"),

    Description: Yup.string()
        .min(30, "It must contain 30 characters"),

    Price: Yup.number(),

    Quantity: Yup.number(),

    Category: Yup.string(),

    SubCategory: Yup.string(),

    PImage: Yup.mixed(),
})

export default function ProductCard(props) {

    const dispatch = useDispatch();


    const getProductDetails = useSelector(state => state.ShowProductDetailsId)


    const { loading, item, error } = getProductDetails;
    useEffect(() => {
        dispatch(getCatActions())
        dispatch(getSubCatActions())
    }, [dispatch])

    const getCatDetails = useSelector(state => state.getCatreducer)
    const getSubCatDetails = useSelector(state => state.getSubCatreducer)

    const { data, loading: postOrederLoading, error: postOrederError } = getCatDetails;
    console.log("DATA CAT", data)

    const { data: datacat, loading: postSubLoading, error: postSubError } = getSubCatDetails;
    console.log("DATA SUBCAT", datacat)


    const productIDdata = (id) => {
        dispatch(productInfoById(id))
    }



    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR', currencyDisplay: 'narrowSymbol' }).format(value)
    }

    const formatDescription = (value) => {
        if (!value) {
            return null
        }
        return value.substring(1, 60) + "................";
    }

    return (

        <div className="col-md-4">
            <div className="card-deck shadow-lg m-2">
                <div className="p-2">
                    <img className="img img-responsive img-fluid img-thumbnail" src={props.items.PImage} alt="Loading..." style={{ width: 300, height: 300 }} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.items.PName}</h4>
                    <p className="card-text">{formatCurrency(props.items.Price)}</p>
                    <p className="card-text">{formatDescription(props.items.Description)}</p>
                    <div className="align-self-center">
                        <button
                            type="button"
                            className="btn btn-primary w-100 m-2"
                            onClick={() => props.add.push(`/productdetails/${props.items._id}`)}
                        >
                            Check Product
                    </button>

                        {
                            isAuthenticated() && isAuthenticated().data.data.user.role === "Admin" && (
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-warning w-100 m-2"
                                        data-toggle="modal" data-target="#exampleModal3"
                                        onClick={() => productIDdata(props.items.id)}
                                    >
                                        Edit Product
                                    </button>
                                    <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Product Info</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">

                                                    {(!item) ? <h1>LOADING..</h1> : <Formik
                                                        initialValues={
                                                            {
                                                                PName: item.PName,
                                                                Description: item.Description,
                                                                Price: item.Price,
                                                                Quantity: item.Quantity,
                                                                Category: '',
                                                                SubCategory: '',
                                                                PImage: item.PImage
                                                            }
                                                        }
                                                        validationSchema={formSchema}
                                                        onSubmit={async (values, actions) => {
                                                            await sleep(500);
                                                            console.log(values)
                                                            let d = new FormData();
                                                            d.append('PName', values.PName)
                                                            d.append('Description', values.Description)
                                                            d.append('Price', values.Price)
                                                            d.append('Quantity', values.Quantity)
                                                            d.append('Category', values.Category)
                                                            d.append('SubCategory', values.SubCategory)
                                                            d.append('PImage', values.PImage)
                                                            dispatch(UpdateProductAction(item.id, d))
                                                            setTimeout(() => {
                                                                actions.setSubmitting(false)
                                                                actions.resetForm()
                                                            }, 1000)
                                                        }}
                                                    >
                                                        {({ isSubmitting, touched, errors, values, setFieldValue }) => (
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


                                                                        {(!data) ? <h1>LOADING..</h1> : data.map((catitem) => {
                                                                            return (

                                                                                <option key={catitem._id} value={catitem._id} label={catitem.cname} />
                                                                            )
                                                                        })}


                                                                    </Field>
                                                                    <ErrorMessage name="Category" />
                                                                </div>

                                                                <div className="form-group">
                                                                    <Field
                                                                        component="select"
                                                                        name="SubCategory"
                                                                        values={values.PImage}
                                                                        className={`form-control  ${(touched.SubCategory && errors.SubCategory) ? 'border border-danger' : ''}`}
                                                                    >
                                                                        {
                                                                            (!datacat) ? <h1>LOADING</h1> : datacat.map((catitem) => {
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
                                                                        values={values.PImage}
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
                                                                        {isSubmitting ? "Please Wait" : "Update Product"}
                                                                    </button >
                                                                </div>
                                                            </Form>
                                                        )}
                                                    </Formik>}


                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-danger w-100 m-2"
                                        onClick={() => dispatch(DeleteProductAction(props.items._id))}
                                    >
                                        Delete Product
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
