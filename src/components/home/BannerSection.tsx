import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import BannerImage from "../../../public/assets/img/banner/banner-img-1.png";
import BannerImageTwo from "../../../public/assets/img/banner/banner-img-2.png";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="banner__area pb-110">
      <div className="container">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
          <div className="section__title-wrapper mb-45">
            <h2 className="section__title">
              Why{" "}
              <span className="yellow-bg">
                Choose{" "}
                <Image
                  src={YellowBg} style={{ width: 'auto', height: "auto" }}
                  alt="img not found"
                />{" "}
              </span>
              Us
            </h2>
            <h4>Experience the BRTutors Difference: Why IB Students and Parents Choose Us</h4>
            <p style={{ fontStyle: "italic" }}>At BRTutors, we’re not just another tutoring service—we’re your dedicated partner in the IB journey. Thinking why choose us?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-1.jpg"})`,
              }}
            >
              <div className="banner__content" style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                <span>Expertise That Makes a Difference:</span>
                <ul typeof="circle">
                  <li>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - IB Specialists:
                    </span>
                    Our tutors aren’t just educators—they’re IB experts with years of experience navigating the nuances of the IB curriculum. They bring a wealth of knowledge and practical insights that go beyond textbook learning.
                  </li>
                  <li style={{ marginTop: "6px" }}>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Subject Mastery:
                    </span>
                    Whether it’s Theory of Knowledge, Extended Essay, or any other aspect of the IB, our team’s deep understanding of each subject ensures that students receive the highest quality support tailored to their specific needs.
                  </li>
                </ul>
              </div>
              {/* <div className="banner__thumb d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImage}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div> */}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-2.jpg"})`,
              }}
            >
              <div className="banner__content"
                style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                <span>Personalized Learning Experience:</span>
                <ul typeof="circle">
                  <li>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Tailored Tutoring:
                    </span>
                    We believe in personalized education. Each student’s learning journey is unique, and we craft customized tutoring plans that address their strengths, weaknesses, and learning styles.
                  </li>
                  <li style={{ marginTop: "6px" }}>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - One-on-One Attention:
                    </span>
                    With a focus on personalized sessions, students receive undivided attention, allowing them to delve deeper into subjects, ask questions, and gain clarity in a supportive environment.
                  </li>
                </ul>
              </div>
              {/* <div className="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImageTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div> */}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-2.jpg"})`,
              }}
            >
              <div className="banner__content"
                style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                <span>Proven Success:</span>
                <ul typeof="circle">
                  <li>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Track Record of Excellence:
                    </span>
                    Our students consistently achieve top scores and secure places in prestigious universities worldwide. Our proven track record speaks volumes about the effectiveness of our approach.
                  </li>
                  <li style={{ marginTop: "6px" }}>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Success Stories:
                    </span>
                    From improving grades to achieving personal best, our success stories highlight the tangible impact of our tutoring. Read about our students’ journeys and how they’ve excelled with our support.
                  </li>
                </ul>
              </div>
              {/* <div className="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImageTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div> */}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-1.jpg"})`,
              }}
            >
              <div className="banner__content"
                style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                <span>Comprehensive Resources:</span>
                <ul typeof="circle">
                  <li>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Exclusive Study Materials:
                    </span>
                    Gain access to our extensive library of IB-specific study guides, practice papers, and revision notes. These resources are designed to complement classroom learning and provide additional insights and practice.
                  </li>
                  <li style={{ marginTop: "6px" }}>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Innovative Learning Tools{" "}:
                    </span>
                    We incorporate the latest educational technology and tools to enhance the learning experience, making study sessions interactive and engaging.
                  </li>
                </ul>
              </div>
              {/* <div className="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImageTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div> */}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-1.jpg"})`,
              }}
            >
              <div className="banner__content"
                style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                <span>Holistic Support:</span>
                <ul typeof="circle">
                  <li>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Beyond Academics:
                    </span>
                    We understand that success in the IB program involves more than just academic excellence. Our holistic approach includes strategies for time management, stress relief, and motivational support to help students stay balanced and focused.
                  </li>
                  <li style={{ marginTop: "6px" }}>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Parent Engagement:
                    </span>
                    We believe in the power of collaboration. Our communication with parents ensures that you’re always in the loop regarding your child’s progress and how you can support their journey.
                  </li>
                </ul>
              </div>
              {/* <div className="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImageTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div> */}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-2.jpg"})`,
              }}
            >
              <div className="banner__content"
                style={{ maxHeight: "200px", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", }}>
                <span>Flexible and Convenient Options:</span>
                <ul typeof="circle">
                  <li>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Online and In-Person:
                    </span>
                    Whether you prefer online sessions or face-to-face tutoring, we offer flexible options that fit your schedule and learning preferences.
                  </li>
                  <li style={{ marginTop: "6px" }}>
                    <span style={{ backgroundColor: "transparent", color: "black", padding: "0 0px", lineHeight: "22px", textTransform: "capitalize", marginBottom: "0px", fontSize: "14px", fontWeight: "500" }}>
                      - Accessible Support:
                    </span>
                    With a range of available slots and responsive communication, we ensure that help is always within reach when you need it.
                  </li>
                </ul>
              </div>
              {/* <div className="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImageTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
