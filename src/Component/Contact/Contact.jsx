import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container pt-5">
        <div className=" text-center pt-5">
          <h2 className="darkColor text-uppercase fw-bolder">
            Contact Section
          </h2>
          <div className="d-flex justify-content-center align-items-center m-3 darkColor">
            <div className=" darkline me-3 "></div>
            <i className="fa-solid fa-star" />
            <div className=" darkline ms-3 "></div>
          </div>
        </div>
        <form className="customW mx-auto mt-5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="UserName"
            />
            <label htmlFor="floatingName">UserName</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingAge"
              placeholder="UserAge"
            />
            <label htmlFor="floatingAge">UserAge</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">UserEmail</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">UserPassword</label>
          </div>
          <button
            type="button"
            className="bgGreen rounded-2 px-3 py-1 border-0 mb-5 text-light"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
