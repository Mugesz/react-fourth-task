import React from 'react'
import course from './data';  // Update the path


const Career = () => {
    const career = course.filter(item => item.id === 'Career');

    return (
        <div className='contaner mt-5 pt-5'>
            <h1>Career</h1>
            <div className='row'>
                
                    {career.map((item, index) => (
                        <div className='col-lg-4 pt-5' key={index}>
                            <img style={{ height: "350px", width: "350px" }} src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

    )
}

export default Career