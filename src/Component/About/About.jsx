import React from 'react'

export default function About() {
  return <>
  <div className="bgGreen p-5 text-center customH d-flex flex-column justify-content-center align-items-center">
 <h2 className="text-light text-uppercase fw-bolder">about component</h2>
        <div className="d-flex justify-content-center align-items-center m-3 text-light">
          <div className="line me-3 "></div>
          <i className="fa-solid fa-star" />
          <div className="line ms-3 "></div>
        </div>
        <div className="row px-5">
          <div className="col-md-6 ps-md-5 text-light text-start">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6 pe-5 text-light text-start">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
  </div>
  
  </>
}
