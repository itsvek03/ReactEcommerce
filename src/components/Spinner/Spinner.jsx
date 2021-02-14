import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import '../../style/loader.css'
export default function Spinner() {
    return (
        <div className="loader">
            <PacmanLoader size={40} color={'#F37A24'} />
        </div>
    )
}
