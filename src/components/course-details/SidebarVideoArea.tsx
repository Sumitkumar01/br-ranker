"use client";
import { AppContext } from "@/contextApi/AppProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { useDispatch } from "react-redux";
import PaymentImg from "../../../public/assets/img/course/payment/payment-1.png";
import PackageDuration from "../../data/PackageDuration";
// useRouter
import { coursesType } from '@/interFace/interFace';
import { useRouter } from 'next/navigation';

interface Package {
  name: string;
  duration: string;
  lecture: string;
  tutorExperince: string,
  price: number;
  oldPrice: number;
}

interface Course {
  id: number;
  videoUrl: string;
  quantity: number;
}

interface DurationPackage {
  id: number;
  title: string;
  percentage: number;
  subtitle: string;
}

const SidebarVideoArea: React.FC<{ course: Course }> = ({ course }: any) => {

  // console.log("course",course.packages);
  

  const router = useRouter()


  const context = useContext(AppContext);

  const country = context?.country;

  const currencySymbol = country === 'SG' ? '$' : '₹';

  const [updatedCourses, setUpdatedCourses] = useState(course);

  useEffect(() => {
    if (course) {
      // If the selected country is SG, use the SG pricing, otherwise use IN pricing
      const updatedCourse = {
        ...course,
        // Choose SG packages if the country is SG, otherwise choose IN packages
        defaultPackage: country === 'SG' ? course.SG_default_package : course.defaultPackage,
        packages: country === 'SG' ? course.SG_packages : course.packages,
      };
  
      setSelectedPackage(updatedCourse.defaultPackage);
      setFinalPrice(updatedCourse.defaultPackage?.price || 0);
    }
  }, [country, course]);

  // console.log(currencySymbol);

  console.log("updatedCourseAtsideBarVideo",updatedCourses);
  
  
  

  const [selectedPackage, setSelectedPackage] = useState<Package>(course.packages[1]);
  const [selectedDurationPackage, setSelectedDurationPackage] = useState<DurationPackage | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(" ");
  const [finalPrice, setFinalPrice] = useState<number>(selectedPackage?.price || 0);
  const [lectureCount, setLectureCount] = useState(selectedPackage?.lecture || '');
  const openVideoModal = (id: any) => {
    setIsOpen(!isOpen);
    setVideoId(id);
  };

  useEffect(() => {
    localStorage.setItem('selectedPackage', JSON.stringify(selectedPackage));
  }, [selectedPackage]);

  const dispatch = useDispatch();

  if (!context) {
    return null;
  }
  const { bookSubject, setBookSubject } = context;

  const handleAddToCart = (CourseDetails: coursesType[]) => {
    if (setBookSubject) {
      console.log('Adding to cart:', CourseDetails);
      console.log('Selected package:', selectedPackage)
      setBookSubject(CourseDetails);
      router.push('/checkout');
    }
  };

  // console.log("booksubject: ",bookSubject)
  // console.log("course",course);

  const handleOptionChange = (item: Package) => {
    // Reset the final price to the selected package price
    setSelectedPackage(item);
    const newPrice = item.price;
    setFinalPrice(newPrice);

    // Store the selected package along with the initial price in localStorage
    const updatedPackage = {
      ...item,
      finalPrice: newPrice,
    };
    localStorage.setItem("selectedPackage", JSON.stringify(updatedPackage));
  };

  const handleLectureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLectureCount = e.target.value;
    setLectureCount(newLectureCount);
    setSelectedPackage({
      ...selectedPackage,
      lecture: newLectureCount
    });
  };

  console.log("SelectedPackage",selectedPackage);
  // useEffect(() => {
  //   console.log("useEffect triggered");
  //   const savedPackage = localStorage.getItem("selectedPackage");
  //   console.log("Saved package from localStorage:", savedPackage);
  //   const goldPackage = course.packages.find((pkg: Package) => pkg.name === 'Gold');
  //   console.log("Gold package found:", goldPackage);
  //   if (savedPackage) {
  //     setSelectedPackage(JSON.parse(savedPackage));
  //     console.log("Using saved package:", savedPackage);
  //   } 
  //   else if (goldPackage) {
  //     localStorage.setItem("selectedPackage", JSON.stringify(goldPackage));
  //     setSelectedPackage(goldPackage);
  //     console.log("Setting Gold package as default:", goldPackage);
  //   } else {
  //     console.log("No package saved and no Gold package found.");
  //   }
  // }, [course.packages]);

  // console.log("course.packages:", course.packages);

  const handleDurationPackageChange = (durationPackage: DurationPackage) => {
    setSelectedDurationPackage(durationPackage);

    // Apply discount to the selected package price
    const discount = (durationPackage.percentage / 100) * selectedPackage?.price;
    const discountedPrice = selectedPackage?.price - discount;
    setFinalPrice(discountedPrice);

    // Update the selectedPackage in localStorage with the new discounted price
    const updatedPackage = {
      ...selectedPackage,
      finalPrice: discountedPrice,
    };
    localStorage.setItem("selectedPackage", JSON.stringify(updatedPackage));
  };

  // console.log("final Price", finalPrice);


  return (
    <>
      <div className="course__sidebar-widget-2 white-bg mb-20">
        <div className="course__video">
          <div className="course__video-thumb w-img mb-25">
            {/* <Image
              src={CourseVideoImg}
              style={{ width: "100%", height: "auto" }}
              alt="image not found"
            /> */}

            <iframe
              src="https://www.youtube.com/embed/rCXvZLQahsA"
              title="YouTube video player"
              style={{ width: "100%", height: "100%" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="course__video-play">
              <button
                className="play-btn"
                onClick={() => {
                  openVideoModal(course.videoUrl);
                }}
              >
                {" "}
                <i className="fas fa-play"></i>{" "}
              </button>
            </div>
          </div>
          <div className="packages" style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontWeight: 600, fontSize: "20px", marginBottom: "10px" }}>Select Package(Price/Hr): </h3>
            <div className="package" style={{ display: "flex", gap: "12px" }}>
              {course.packages.map((item: any, index: number) => {
                return (
                  <div key={index} className="option" style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                    <input name="package" type="radio" onChange={() => handleOptionChange(item)} checked={selectedPackage.name === item.name ? true : false} />
                    <label htmlFor="" style={{ fontWeight: "900" }}>{item.name}</label>
                  </div>

                )
              })}
            </div>
          </div>
          <div className="course__video-meta mb-25 d-flex align-items-center justify-content-between">
            <div className="course__video-price">
              <h5>
                {`${currencySymbol}${finalPrice ? finalPrice : selectedPackage?.price}`}.<span>00</span>{" "}
              </h5>
              {selectedDurationPackage && (
                <h5 className="old-price">{`${currencySymbol}${selectedPackage.price}.00`}</h5>
              )}
            </div>
            {selectedDurationPackage && (
              <div className="course__video-discount">
                <span>{selectedDurationPackage.percentage}% OFF</span>
              </div>
            )}
          </div>
          <div className="course__video-content mb-35">
            <ul>
              <li className="d-flex align-items-center">
                <div className="course__video-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      className="st0"
                      d="M2,6l6-4.7L14,6v7.3c0,0.7-0.6,1.3-1.3,1.3H3.3c-0.7,0-1.3-0.6-1.3-1.3V6z"
                    />
                    <polyline
                      className="st0"
                      points="6,14.7 6,8 10,8 10,14.7"
                    />
                  </svg>
                </div>
                <div className="course__video-info">
                  <h5>
                    {/* <span>Tutor Experince:</span> {course.author} */}
                    <span>Tutor Experince:</span><span className="tutorexpenrn" style={{ fontWeight: "400", textDecoration: "underline" }}>{selectedPackage.tutorExperince} Years of Classroom Teaching Experience</span>
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="course__video-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    enableBackground="new 0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path className="st0" d="M4,19.5C4,18.1,5.1,17,6.5,17H20" />
                    <path
                      className="st0"
                      d="M6.5,2H20v20H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2z"
                    />
                  </svg>
                </div>
                <div className="course__video-info">
                  <h5>
                    <span>Lectures :</span>
                    <input
                      type="text"
                      value={lectureCount}
                      onChange={handleLectureChange}
                      style={{
                        border: "1px solid #ddd",
                        padding: "2px 8px",
                        borderRadius: "8px",
                        width: "150px",
                        // marginLeft: "8px",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                        fontSize: "16px",
                        transition: "border-color 0.3s ease",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#007BFF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                    />
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="course__video-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 16 16"
                    enableBackground="new 0 0 16 16" // Corrected style attribute
                    xmlSpace="preserve"
                  >
                    <circle className="st0" cx="8" cy="8" r="6.7" />
                    <polyline className="st0" points="8,4 8,8 10.7,9.3" />
                  </svg>
                </div>
                <div className="course__video-info">
                  <h5>
                    <span>Duration :</span>{selectedPackage?.duration}
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="durationpackages" style={{ marginBottom: "1rem" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "20px", marginBottom: "8px" }}>Select Discount: </h3>
                  <div className="package" style={{ display: "flex", flexDirection: "column", }}>
                    {PackageDuration.map((item: any, index: number) => (
                      <div key={index} className="option" style={{ display: "flex", gap: "2px", alignItems: "baseline" }}>
                        <input
                          name="duration"
                          type="radio"
                          onChange={() => handleDurationPackageChange(item)}
                          checked={selectedDurationPackage?.id === item.id}
                        />
                        <div>
                          <label htmlFor="" style={{ fontWeight: "900" }}>{item.title}</label>
                          <p>({item.subtitle})</p>
                        </div>



                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="course__video-icon">
                  <svg>
                    <circle className="st0" cx="8" cy="8" r="6.7" />
                    <line className="st0" x1="1.3" y1="8" x2="14.7" y2="8" />
                    <path
                      className="st0"
                      d="M8,1.3c1.7,1.8,2.6,4.2,2.7,6.7c-0.1,2.5-1,4.8-2.7,6.7C6.3,12.8,5.4,10.5,5.3,8C5.4,5.5,6.3,3.2,8,1.3z"
                    />
                  </svg>
                </div>
                <div className="course__video-info">
                  <h5>
                    <span>Language :</span>English
                  </h5>
                </div>
              </li>
            </ul>
          </div>

          <div className="course__payment mb-35">
            <h3>Payment:</h3>
            <Link href="#">
              <Image
                src={PaymentImg}
                style={{ width: "auto", height: "auto" }}
                alt="image not found"
              />
            </Link>
          </div>
          <div className="course__enroll-btn">
            <button
              onClick={() => handleAddToCart([course])}
              className="e-btn e-btn-7 w-100"
            >
              {`${currencySymbol}${finalPrice}`}{" "} <i className="fa-regular fa-cart-shopping"></i>{" "}Book Slot For Trial
            </button>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default SidebarVideoArea;
