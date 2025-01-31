import React from "react";
import face from "./img/home4-image1.svg";
export default function Start() {
  return (
    <>
      <div className="bgGreen text-center pt-5">
        <img className="p-5" src={face} width={400} alt="happy face" />
        <h2 className="text-light text-uppercase fw-bolder">Start Framework</h2>
        <div className="d-flex justify-content-center align-items-center m-3 text-light">
          <div className="line me-3 "></div>
          <i className="fa-solid fa-star" />
          <div className="line ms-3 "></div>
        </div>
        <div className="pb-5 text-light">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </>
  );
}
