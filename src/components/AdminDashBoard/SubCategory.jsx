import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Swal from 'sweetalert2';
import { getSubCatActions, deleteSubCatActions, postSubCatActions, UpdateSubCatActions } from '../../actions/subcategory/subcategory.action'

export default function SubCategory() {
    const [subname, setsub] = useState([])
    //const [updsub,setupdsub] =useState(false);
    const dispatch = useDispatch();

    const getsubdtl = useSelector(state => state.getSubCatreducer);
    console.log(getsubdtl);

    const postsubt = useSelector(state => state.postSubCatreducer)
    console.log("SUBCATEGORY", postsubt)

    const updatereducer = useSelector(state => state.updateSubCatreducer)
    console.log("UPDATE SUBCAT", updatereducer);

    const { data, error, loading } = getsubdtl;


    const handleSubmit = (e) => {
        let d = {
            subname: subname
        }
        console.log("data ----", d)
        dispatch(postSubCatActions(d))
    }

    useEffect(() => {
        dispatch(getSubCatActions())
    }, [dispatch])

    const updateCat = (id) => {
        Swal.fire({
            title: "Category Name",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Update",
            showLoaderOnConfirm: true,
            preConfirm: (text) => {
                if (!text.trim().length) {
                    Swal.showValidationMessage(`Required!`);
                } else if (text.trim().length < 3) {
                    Swal.showValidationMessage(`Too Small Name!`);
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(UpdateSubCatActions(id, { "subname": result.value }))
            }
        });
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">


                            <div className="card-body">
                                <button type="button" className="btn btn-dark btn-block" data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo">ADD SUBCATEGORY</button>
                                <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Sub Category</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="recipient-name" className="col-form-label">Sub Category:</label>
                                                        <input
                                                            type="text"
                                                            name="subname"
                                                            className="form-control"
                                                            id="recipient-name"
                                                            value={subname}
                                                            onChange={e => setsub(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => handleSubmit(e)}>Submit</button>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                            {
                                !data ? <h1>LOADING DATA</h1> : (
                                    <div className="card-body m-3">
                                        {
                                            data.map((item) => {
                                                return (
                                                    <div className="card m-2 p-3" key={item._id}>
                                                        <ul className="list-group">
                                                            <li className="list-group-item d-flex justify-content-between">{item.subname}
                                                                <span>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-sm btn-warning"
                                                                        onClick={() => updateCat(item._id)}
                                                                    >
                                                                        <i className="fas fa-pen-square"></i>
                                                                    </button>
                                                                </span>
                                                                <span>
                                                                    <button type="button" className="btn-sm btn-danger"
                                                                        onClick={() => dispatch(deleteSubCatActions(item._id))}>
                                                                        <i className="far fa-trash-alt"></i>
                                                                    </button>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


