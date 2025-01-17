import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CourseArea from "./CourseArea";

const CourseSidebarMain = () => {
  return (
    <>
      <Breadcrumb title="Popular Courses" subTitle="poipular-courses" />
      <CourseArea />
    </>
  );
};

export default CourseSidebarMain;
