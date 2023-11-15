import React from 'react'
import course from './data';  // Update the path


const CyberSecurity = () => {
    const cyberSecurity = course.filter(item => item.id === 'Cyber security');
    return (
        <div className='container mt-5 pt-5'>
            <h1>Full Stack Courses</h1>
            <div className='row'>

                {cyberSecurity.map((item, index) => (
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

export default CyberSecurity