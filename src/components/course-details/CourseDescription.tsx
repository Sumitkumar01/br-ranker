import Link from "next/link";
import React from "react";
import AuthorImgOne from "../../../public/assets/img/course/teacher/teacher-3.jpg";
import AuthorImgTwo from "../../../public/assets/img/course/teacher/teacher-2.jpg";
import AuthorImgThree from "../../../public/assets/img/course/teacher/teacher-1.jpg";
import Image, { StaticImageData } from "next/image";

interface Teacher {
  img: StaticImageData;
  name: string;
  position: string;
}
const CourseDescription = ({ course }: any) => {
  return (
    <>
      <div className="course__description">
        <h3>Course Overview</h3>
        <p>
          {course.descriptionFirst}
        </p>
        <p>
          {course.descriptionSecond}
        </p>
        <p>
          {course.descriptionThird}
        </p>

        <div className="course__tag-2 mb-35 mt-35">
          <i className="fa-solid fa-tag"></i>
          {course.courseTags.map((item: string, index: number) => {
            return (
              <Link key={index} href="#">
                {item}
              </Link>
            );
          })}

        </div>
        <div className="course__description-list mb-45">
          <h4>Who is this course for?</h4>
          <ul>
            {course.courseFor.map((item: string, index: number) => {
              return (
                <li key={index}>
                  {" "}
                  <i className="icon_check"></i>{item}
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="course__instructor mb-45">
          <h3>Other Instructors</h3>
          <div className="course__instructor-wrapper d-md-flex align-items-center">
            {course.otherTeachers.map((item: Teacher, index: number) => {
              return (
                <div key={index} className="course__instructor-item d-flex align-items-center mr-70">
                  <div className="course__instructor-content">
                    <h3>{item.name}</h3>
                    <p>{item.position}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CourseDescription;
