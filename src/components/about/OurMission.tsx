import React from 'react'

const OurMission = () => {
    return (
        <section className="about__area pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12" style={{ maxHeight: "500px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                        <div
                            className="banner__item p-relative mb-40 gap-4"
                            style={{
                                backgroundImage: `url(${"assets/img/banner/banner-bg-1.jpg"})`,
                            }}
                        >
                            <div className="banner__content" style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                                <div className='d-flex justify-content-center'>
                                    <p style={{fontSize:"30px", fontStyle:"italic",fontWeight:"600"}}>Our Mission</p>
                                </div>
                                <ul typeof="circle">
                                    <li>
                                        To empower students with the knowledge, skills, and confidence they need to succeed in the International Baccalaureate (IB) program and beyond. We are dedicated to providing tailored educational support that meets each student's unique needs, fostering a deep understanding of subjects and a passion for learning.
                                    </li>
                                </ul>
                            </div>
                            <div className="banner__content mt-20" style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                                <div className='d-flex justify-content-center'>
                                    <p style={{fontSize:"30px", fontStyle:"italic",fontWeight:"600"}}>Our Vision</p>
                                </div>
                                <ul typeof="circle">
                                    <li>
                                        We envision a world where every student has the opportunity to reach their full potential, no matter their starting point. Our goal is to be the leading global provider of IB-focused tutoring, recognized for our innovative approach, exceptional tutors, and our unwavering commitment to student success. We strive to create an environment where students not only achieve academic excellence but also develop critical thinking, creativity, and a lifelong love of learning.
                                    </li>
                                </ul>
                            </div>
                            <div className="banner__content mt-20" style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }} >
                                <div className='d-flex justify-content-center'>
                                    <p style={{fontSize:"30px", fontStyle:"italic",fontWeight:"600"}}>Our Values</p>
                                </div>
                                <ul typeof="circle">
                                    <li>
                                        <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                                            - Personalized Learning:{" "}
                                        </span>
                                        {" "}We believe that every student is unique, and so is their learning journey. Our tailored approach ensures that each student receives the specific support they need to thrive.
                                    </li>
                                    <li style={{ marginTop: "6px" }}>
                                        <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                                            - Excellence in Education:{" "}
                                        </span>
                                        {" "} We are committed to providing the highest quality tutoring, driven by our passion for education and our desire to help students achieve their best.
                                    </li>
                                    <li style={{ marginTop: "6px" }}>
                                        <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                                            - Integrity & Trust:{" "}
                                        </span>
                                        {" "}We build lasting relationships with our students and their families, founded on trust, honesty, and mutual respect.
                                    </li>
                                    <li style={{ marginTop: "6px" }}>
                                        <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                                            - Passion for Teaching:{" "}
                                        </span>
                                        {" "}Our tutors are not just experts in their fields; they are passionate educators who inspire and motivate students to love learning
                                    </li>
                                    <li style={{ marginTop: "6px" }}>
                                        <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                                            - Global Perspective:{" "}
                                        </span>
                                        {" "}We embrace the diverse backgrounds and perspectives of our students, preparing them to succeed in a globalized world, particularly within the IB framework.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission
