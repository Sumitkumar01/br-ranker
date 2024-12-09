import React from 'react'
// import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import Image from 'next/image';
const Faqs = () => {
    return (
        <section className="banner__area pb-110">
            <div className="container">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
                    <div className="section__title-wrapper mb-45">
                        <h2 className="section__title">

                            <span className="yellow-bg">
                                FAQS{" "}
                                <Image
                                    src={YellowBg} style={{ width: 'auto', height: "auto" }}
                                    alt="img not found"
                                />{" "}
                            </span>

                        </h2>
                    </div>
                </div>
                <div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How long does BR Tutors provide tutoring support?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We offer tutoring support for as long as it's needed. Whether it’s a few sessions to prepare for a specific exam or ongoing support throughout the academic year, our services are tailored to meet each student’s unique needs.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What qualifications do BR Tutors' educators hold?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our tutors are highly qualified professionals, with many holding advanced degrees in their subjects. They also have extensive experience in teaching and are well-versed in the specific curricula we support, including the International Baccalaureate (IB).
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do you help children who are facing particular challenges?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    We begin by thoroughly understanding the specific difficulties the child is facing. Our approach includes personalized learning plans, one-on-one attention, and continuous assessment to address and overcome these challenges, ensuring the student gains confidence and improves academically.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                    What kind of results can be expected, and what if a child doesn’t make progress?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Our students typically see significant improvements in their understanding, grades, and overall confidence. However, if progress isn’t as expected, we will reassess the tutoring approach and adjust the plan to better suit the student's needs. Our goal is to ensure every student succeeds.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                    Where do the tutoring sessions take place?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Tutoring sessions are flexible and can take place either online or in-person, depending on what works best for the student and their family. Our online sessions are conducted via a secure and interactive platform designed to enhance learning.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                                    How long is each tutoring session?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Each tutoring session typically lasts between 60 to 90 minutes, depending on the student's needs and the subject being taught. We find this duration to be optimal for maintaining focus and achieving learning goals.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs