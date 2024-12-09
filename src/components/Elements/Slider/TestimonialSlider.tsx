"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import img1 from "../../../../public/assets/img/testimonial/home-3/testi-1.jpg";
import img2 from "../../../../public/assets/img/testimonial/home-3/testi-2.jpg";
import img3 from "../../../../public/assets/img/testimonial/home-3/testi-3.jpg";
import img4 from "../../../../public/assets/img/testimonial/home-3/testi-4.jpg";

const TestimonialSlider = () => {
  return (
    <section
      className="testimonial__area pt-145 pb-150"
      style={{
        backgroundImage: `url(${"assets/img/testimonial/home-3/testimonial-bg-3.jpg"})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__slider-3">
              <h3 className="testimonial__title">
                Student <br /> Community Feedback
              </h3>
              <div className="testimonial__slider-wrapper testimonial-text mb-35">
                <div>
                  <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={true}
                    loop={true}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with BR-TUTORS,
                          I realized that my skills had improved significantly.
                          Even though I am still in 10th class,
                          I have been able to create designs and earn some extra pocket money.
                          I am confident that I can pursue this professionally in the future.”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>Meera Jain,</h4>
                          <span>Student @BR-TUTORS</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img1}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “Thanks to BR-TUTORS, I have improved my skills a lot. As an 8th class student, my favorite subjects are Science and History. Now, I can create amazing science diagrams and historical timelines for my projects.”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4> Anjali Gupta,</h4>
                          <span>Student @BR-TUTORS</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img2}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning with BR-TUTORS, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>James Lee,</h4>
                          <span>Student @BR-TUTORS</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img3}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “Thanks to BR-TUTORS, I enjoy English and Social Studies, and now I can create educational posters and presentations for my school projects..”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>Arav patel,</h4>
                          <span>Student @BR-TUTORS</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img4}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__video ml-70 fix">
              <div className="testimonial__thumb-3">
                <iframe
                  src="https://www.youtube.com/embed/rCXvZLQahsA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="testimonial__video-content d-sm-flex">
                <div className="testimonial__video-icon mr-20 mb-20">
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                </div>
                <div className="testimonial__video-text">
                  <h4>Course Outcome</h4>
                  <p>
                    According to BR Tutors, our courses equip students with essential problem-solving and analytical skills across various subjects, preparing them for advanced studies and practical applications in numerous fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
