import React from 'react'
import course from './data';  // Update the path


const All = () => {
    return (
        <div className='container mt-5 pt-5'>
            <h1>All courses</h1>
            <div className='row'>
                {
                    course.map((item, index) => {
                        return <div className='col-lg-4 pt-5' key={index}>
                            <img style={{ height: "350px", width: "350px" }} src={item.img} alt="" />
                            <h2 className="">{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default All