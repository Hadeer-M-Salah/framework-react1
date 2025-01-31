import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-around py-5 test">
        <div className="row">
          <div className="col-md-4 card-body text-center ">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className=" col-md-4 card-body text-center ">
            <h3>AROUND THE WEB</h3>
            <ul className="d-flex justify-content-center list-unstyled">
              <li className="border-1 p-1 circle mx-1">
                <i className=" mx-1 fa-brands fa-facebook" />
              </li>
              <li className="border-1 p-1 circle mx-1">
                <i className="mx-1 fa-brands fa-twitter" />
              </li>
              <li className="border-1 p-1 circle mx-1">
                <i className="mx-1 fa-brands fa-linkedin" />
              </li>
              <li className="border-1 p-1 circle mx-1">
                <i className="mx-1 fa-solid fa-globe" />
              </li>
            </ul>
          </div>
          <div className=" col-md-4 card-body text-center ">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-2 test2">
        <p>Copyright © Your Website 2025</p>{" "}
      </div>
    </>
  );
}
