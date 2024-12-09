"use client"
import React, { useEffect, useState } from "react";
import PageTItleShape from "./PageTItleShap";
import CourseAreaSection from "./CourseAreaSection";
import CourseDescription from "./CourseDescription";
import CourseTabAccordion from "./CourseTabAccordion";
import CourseReview from "./CourseReview";
import CourseMember from "./CourseMembar";
import ShareCourse from "./ShereCourse";
import CourseSidebarArea from "./CourseSidebarArea";
import CtaSection from "../home/CtaSection";
import courses_data from "@/data/courses-data";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { AppContext } from '@/contextApi/AppProvider';
import { useContext } from 'react';

const CourseDetailsMain = ({ id, categoryId, categoryClass, subject }: any) => {


  const context = useContext(AppContext);

  // console.log("context", context);

  const country = context?.country;
  
  const currencySymbol = country === 'SG' ? '$' : '₹';

  type CountryCode = 'SG' | 'IN'; // Add more codes as needed

  // const convertPrice = (price: number, country: CountryCode) => {
  //   const conversionRates: Record<CountryCode, number> = {
  //     US: 0.012, // Example: 1 INR = 0.012 USD
  //     IN: 1,     // INR stays the same
  //     // Add more countries and conversion rates as needed
  //   };

  //   return price * (conversionRates[country] || 1);
  // };

  const [updatedCourses, setUpdatedCourses] = useState(courses_data);

  useEffect(() => {
    const updatedCourses = courses_data.map((course) => {
      const updatedCourse = {
        ...course,
        // Choose SG packages if the country is SG, otherwise choose IN packages
        defaultPackage: country === 'SG' ? course.SG_default_package : course.defaultPackage,
        packages: country === 'SG' ? course.SG_packages : course.packages,
      };
      return updatedCourse;
    });
  
    setUpdatedCourses(updatedCourses);
  }, [country]);


  const course: any = updatedCourses.find((item) => item.board == id && item.category == categoryId && item.title == subject && item.categoryClass == categoryClass);

  
  

  if (!course) {
    return <div>Course not found</div>;
  }

  // console.log(course);

  const formattedCourseTitle = course?.title.replace(/-/g, " ");

  return (
    <>
      <Breadcrumb title="Subject Details" subTitle="Subject Details" />
      <section className="page__title-area pt-120 pb-90">
        <PageTItleShape />
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__wrapper">
                <div className="page__title-content mb-25">
                  <span className="page__title-pre">{course?.category}</span>
                  <h5 className="page__title-3">{formattedCourseTitle}{" "}<span className="classCodeAsOfBoard" style={{fontWeight:"100"}}>({course.classCodeAsOfBoard})</span></h5>
                </div>
                <CourseAreaSection course={course} />

                <div className="course__tab-2 mb-45" >
                  <ul className="nav nav-tabs" id="courseTab" role="tablist">
                    <li className="nav-item w-50" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        {" "}
                        <i className="fas fa-ribbon"></i>{" "}
                        <span>Discription</span>{" "}
                      </button>
                    </li>

                    <li className="nav-item w-50" role="presentation">
                      <button
                        className="nav-link"
                        id="review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#review"
                        type="button"
                        role="tab"
                        aria-controls="review"
                        aria-selected="false"
                      >
                        {" "}
                        <i className="far fa-star"></i> <span>Reviews</span>{" "}
                      </button>
                    </li>

                  </ul>
                </div>
                <div className="course__tab-content mb-95">
                  <div className="tab-content" id="courseTabContent" >
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <CourseDescription course={course} />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="curriculum"
                      role="tabpanel"
                      aria-labelledby="curriculum-tab"
                    >
                      <CourseTabAccordion />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <CourseReview />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="member"
                      role="tabpanel"
                      aria-labelledby="member-tab"
                    >
                      <CourseMember />
                    </div>
                    <ShareCourse />
                  </div>
                </div>
              </div>
            </div>
            <CourseSidebarArea course={course} />
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};

export default CourseDetailsMain;
