import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCatActions, deleteCatActions, postCatActions, UpdateCatActions } from '../../actions/category/category.action'
import Swal from 'sweetalert2';


export default function CategoryAdmin() {
    const [cname, setCat] = useState([])
    const dispatch = useDispatch();

    const getsubdtl = useSelector(state => state.getCatreducer);
    console.log("Category data", getsubdtl);

    const postsubt = useSelector(state => state.postCatreducer)
    console.log("CATEGORY", postsubt)

    const { data, error, loading } = getsubdtl;


    const handleSubmit = (e) => {
        let d = {
            cname: cname
        }
        console.log("data ----", d)
        dispatch(postCatActions(d))
    }
    useEffect(() => {
        dispatch(getCatActions())
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
                dispatch(UpdateCatActions(id, { "cname": result.value }))
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
                                <button type="button" className="btn btn-dark btn-block" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">CATEGORY</button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Category</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="recipient-name" className="col-form-label">Category:</label>
                                                        <input
                                                            type="text"
                                                            name="cname"
                                                            className="form-control"
                                                            id="recipient-name"
                                                            value={cname}
                                                            onChange={e => setCat(e.target.value)}
                                                        />
                                                    </div>

                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => handleSubmit(e)}>Submit</button>
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
                                                            <li className="list-group-item d-flex justify-content-between">{item.cname}
                                                                <span>
                                                                    <button type="button" className="btn-sm btn-warning"
                                                                        onClick={() => updateCat(item._id)}>
                                                                        <i className="fas fa-pen-square"></i>
                                                                    </button>
                                                                </span>
                                                                <span>
                                                                    <button type="button" className="btn-sm btn-danger"
                                                                        onClick={() => dispatch(deleteCatActions(item._id))}>
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
            </div>
        </>
    )
}
