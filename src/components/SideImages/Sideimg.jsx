import React from 'react';

export default function Sideimg(props) {
    return (
        <>
            <div className="container-fluid bg-white">
                <center>
                    <img src={props.img} className="img img-responsive img-fluid" alt="Loading" />
                </center>

            </div>
        </>
    );
}
