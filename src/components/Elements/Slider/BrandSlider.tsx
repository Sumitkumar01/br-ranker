"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import brandSlideData from "@/data/brand-slider-data"
// Import Swiper styles
import "swiper/css/bundle";
// import Link from "next/link";
import Image from "next/image";

const BrandSlider = () => {
  return (
    <section className="brand__area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__content text-center">
              <h3 className="brand__title">
                Trusted by 100 {`world's`} countries
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__slider">
              <div className=" text-center">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  breakpoints={{
                    450: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                >{brandSlideData.map((elemnet, index) => {
                  return (
                    <SwiperSlide key={elemnet.id}>
                      <div className="d-flex align-items-center shadow-lg gap-3" style={{ width: "220px", height: "70px", backgroundColor: "#e5e7eb", borderRadius: "0.375rem 0 0 0.5rem" }}>
                        <Image
                          src={elemnet.img}
                          style={{
                            width: "100px",
                            height: "67px",
                            color: "transparent",
                            borderTopRightRadius: "1.5rem",
                            borderBottomRightRadius: "1.5rem"
                          }}
                          alt="img not found"
                        />
                        <p className="ms-3 text-xl fw-bold text-truncate" style={{ marginTop: "14px" }}>

                          {elemnet.place}
                        </p>
                      </div>
                    </SwiperSlide>
                  )
                })}
                  {/* <SwiperSlide>
                    <div className="d-flex align-items-center shadow-lg gap-3" style={{ width: "220px", height: "70px", backgroundColor: "#e5e7eb", borderRadius: "0.375rem 0 0 0.5rem" }}>
                      <Image
                        src={ImageOne}
                        style={{
                          width: "100px",
                          height: "auto",
                          color: "transparent",
                          borderTopRightRadius: "1.5rem",
                          borderBottomRightRadius: "1.5rem"
                        }}
                        alt="img not found"
                      />
                      <p className="ms-3 text-xl fw-bold text-truncate" style={{ marginTop: "14px" }}>

                        India
                      </p>
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide>
                    <div className="d-flex align-items-center shadow-lg gap-3" style={{ width: "220px", height: "70px", backgroundColor: "#e5e7eb", borderRadius: "0.375rem 0 0 0.5rem" }}>
                      <Image
                        src={ImageTwo}
                        style={{
                          width: "100px",
                          height: "67px",
                          color: "transparent",
                          borderTopRightRadius: "1.5rem",
                          borderBottomRightRadius: "1.5rem"
                        }}
                        alt="img not found"
                      />
                      <p className="ms-3 text-xl fw-bold text-truncate" style={{ marginTop: "14px" }}>

                        Australia
                      </p>
                    </div>-
                  </SwiperSlide> */}
                  {/* <SwiperSlide>
                    <div className="d-flex align-items-center shadow-lg gap-3" style={{ width: "220px", height: "70px", backgroundColor: "#e5e7eb", borderRadius: "0.375rem 0 0 0.5rem" }}>
                      <Image
                        src={ImageThree}
                        style={{
                          width: "100px",
                          height: "67px",
                          color: "transparent",
                          borderTopRightRadius: "1.5rem",
                          borderBottomRightRadius: "1.5rem"
                        }}
                        alt="img not found"
                      />
                      <p className="ms-3 text-xl fw-bold text-truncate" style={{ marginTop: "14px" }}>

                        Sri lanka
                      </p>
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide>
                    <div className="d-flex align-items-center shadow-lg gap-3" style={{ width: "220px", height: "70px", backgroundColor: "#e5e7eb", borderRadius: "0.375rem 0 0 0.5rem" }}>
                      <Image
                        src={ImageFour}
                        style={{
                          width: "100px",
                          height: "67px",
                          color: "transparent",
                          borderTopRightRadius: "1.5rem",
                          borderBottomRightRadius: "1.5rem"
                        }}
                        alt="img not found"
                      />
                      <p className="ms-3 text-xl fw-bold text-truncate" style={{ marginTop: "14px" }}>

                        New Zealand
                      </p>
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide>
                    <div className="d-flex align-items-center shadow-lg gap-3" style={{ width: "220px", height: "70px", backgroundColor: "#e5e7eb", borderRadius: "0.375rem 0 0 0.5rem" }}>
                      <Image
                        src={ImageFive}
                        style={{
                          width: "100px",
                          height: "auto",
                          color: "transparent",
                          borderTopRightRadius: "1.5rem",
                          borderBottomRightRadius: "1.5rem"
                        }}
                        alt="img not found"
                      />
                      <p className="ms-3 text-xl fw-bold text-truncate" style={{ marginTop: "14px" }}>

                        Russia
                      </p>
                    </div>
                  </SwiperSlide> */}
                  {/* <SwiperSlide>
                    <div className="d-flex align-items-center shadow-lg gap-3" style={{ width: "220px", height: "70px", backgroundColor: "#e5e7eb", borderRadius: "0.375rem 0 0 0.5rem" }}>
                      <Image
                        src={ImageSix}
                        style={{
                          width: "100px",
                          height: "auto",
                          color: "transparent",
                          borderTopRightRadius: "1.5rem",
                          borderBottomRightRadius: "1.5rem"
                        }}
                        alt="img not found"
                      />
                      <p className="ms-3 text-xl fw-bold text-truncate" style={{ marginTop: "14px" }}>

                        Singapore
                      </p>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-xxl-12">
            <div className="brand__more text-center">
              <Link href="/about" className="link-btn">
                View all partners
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BrandSlider;
