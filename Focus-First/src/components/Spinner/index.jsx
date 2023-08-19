import React from 'react'
import GridLoader from "react-spinners/GridLoader"

const Spinner = () => {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <GridLoader size={35} color="#000" />
        </div>
    )
}

export default Spinner
