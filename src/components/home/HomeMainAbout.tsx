import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";

const HomeMainAbout = () => {
    return (
        <section className="category__area pt-120">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
                        <div className="section__title-wrapper mb-45">
                            <h2 className="section__title">
                                What{" "}
                                <span className="yellow-bg">
                                    We{" "}
                                    <Image
                                        src={YellowBg} style={{ width: 'auto', height: "auto" }}
                                        alt="img not found"
                                    />{" "}
                                </span>
                                Do
                            </h2>
                            <h4>IB-Focused Services Overview</h4>
                            <p style={{ fontStyle: "italic" }}>
                                Welcome to BRTutors! We’re here to turn your International Baccalaureate (IB) journey
                                into a success story. Worried about where to get the perfect assistance and courses? BR tutors
                                is your solution where we are dedicated to help students thrive in the International Baccalaureate
                                (IB) program. Our mission is to provide tailored support that addresses every aspect of the IB journey,
                                ensuring that students not only meet but exceed their academic goals. Take a look on what students will
                                get in our IB program.
                            </p>
                        </div>
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Personalized Tutoring:
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Individual Attention:</strong>{" "}We understand that each student learns differently. Our personalized tutoring sessions are designed to cater to individual learning styles and needs, ensuring that every student receives the support that’s right for them.
                                </div>
                                <div className="accordion-body">
                                    <strong>Expert Tutors:</strong>{" "}Our team consists of highly qualified tutors with extensive experience in the IB curriculum. They bring a deep understanding of the subject matter and the examination process to help students grasp complex concepts and excel in their coursework.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Targeted Revision Courses:
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Focused Learning:</strong>Our revision courses are meticulously planned to address the key areas of the IB syllabus. We focus on areas where students may need additional help, reinforcing their knowledge and preparing them for exams.
                                </div>
                                <div className="accordion-body">
                                    <strong>Mock Exams and Feedback:</strong>We offer practice exams that simulate real test conditions to ensure thorough preparation. Students receive detailed feedback and strategies to improve their performance.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Comprehensive IB Academic Support:
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Coursework Assistance:</strong>Our support extends beyond exam preparation. We help students with their internal assessments, projects, and extended essays, guiding them through the requirements and helping them achieve high standards.
                                </div>
                                <div className="accordion-body">
                                    <strong>Study Skills Development:</strong>We provide strategies to enhance study habits, time management, and exam techniques, equipping students with essential skills for academic success.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                    Exclusive IB Resources:
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Study Guides and Materials:</strong>Access our exclusive study guides, notes, and resources tailored specifically to the IB curriculum. These materials are designed to complement classroom learning and provide additional insights.
                                </div>
                                <div className="accordion-body">
                                    <strong>Practice Papers:</strong>Our library of past papers and practice questions helps students familiarize themselves with the exam format and question types, building confidence and reducing exam anxiety.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                Holistic Approach:
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Well-being and Motivation:</strong> We recognize the importance of mental and emotional well-being in academic performance. Our holistic approach includes motivational support and guidance to help students stay focused and positive throughout their IB journey.
                                </div>
                                <div className="accordion-body">
                                    <strong>Parent Involvement:</strong> We also offer resources and guidance for parents, helping them understand the IB program and how they can best support their child’s academic progress
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HomeMainAbout