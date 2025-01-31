import React, { useState } from "react";
import img1 from "./img/home4-image1 (1).png";
import img2 from "./img/home4-image1 (2).png";
import img3 from "./img/home4-image1 (3).png";
import style from "./Portfolio.module.css";
export default function Portfolio() {
  const [openImg, setOpenImg] = useState(false);
  const [src, setSrc] = useState(img1);

  function getSrc(params) {
    setOpenImg(true);
    setSrc(params);
  }
  return (
    <>
      <div onClick={() => setOpenImg(false)} className={` ${style.wrapper}  ${openImg?'d-flex':'d-none'}`}>
        <img className="w-50 "onClick={(e)=> e.stopPropagation()} src={src} alt="house" />
      </div>
      <div className="container pt-5 my-4">
        <div className=" text-center pt-5">
          <h2 className="darkColor text-uppercase fw-bolder">
            portfolio component
          </h2>
          <div className="d-flex justify-content-center align-items-center m-3 darkColor">
            <div className=" darkline me-3 "></div>
            <i className="fa-solid fa-star" />
            <div className=" darkline ms-3 "></div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div
              className={` ${style.rLayer} position-relative overflow-hidden rounded-3`}
            >
              <div
              onClick={function(){ getSrc(img1)}}
                className={` ${style.layer} d-flex justify-content-center align-items-center`}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <img className="w-100" src={img1} alt="house" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className={` ${style.rLayer} position-relative overflow-hidden rounded-3`}
            >
              <div onClick={() => getSrc(img2)}
                className={` ${style.layer} d-flex justify-content-center align-items-center`}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <img className="w-100" src={img2} alt="house" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className={` ${style.rLayer} position-relative overflow-hidden rounded-3`}
            >
              <div
              onClick={function(){ getSrc(img3)}}
                className={` ${style.layer} d-flex justify-content-center align-items-center`}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <img className="w-100" src={img3} alt="house" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
            onClick={ ()=> getSrc(img1)}
              className={` ${style.rLayer} position-relative overflow-hidden rounded-3`}
            >
              <div
                className={` ${style.layer} d-flex justify-content-center align-items-center`}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <img className="w-100" src={img1} alt="house" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
            onClick={ ()=> getSrc(img2)}
              className={` ${style.rLayer} position-relative overflow-hidden rounded-3`}
            >
              <div
                className={` ${style.layer} d-flex justify-content-center align-items-center`}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <img className="w-100" src={img2} alt="house" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
            onClick={ ()=> getSrc(img3)}
              className={` ${style.rLayer} position-relative overflow-hidden rounded-3`}
            >
              <div
                className={` ${style.layer} d-flex justify-content-center align-items-center`}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <img className="w-100" src={img3} alt="house" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
