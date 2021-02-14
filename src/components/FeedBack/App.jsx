import React from 'react';
import FeedBackForm from './FeedBackForm';
import SideImages from '../SideImages/Sideimg'
import img1 from '../../images/feedback.svg'
import FeedWrite from './FeedWrite';

export default function App() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <SideImages img={img1} />
                    </div>
                    <div className="col-md-6 mt-5">
                        <FeedWrite />
                    </div>
                </div>
            </div>

            <hr />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <FeedBackForm />
                    </div>
                </div>
            </div>
        </>
    );
}
