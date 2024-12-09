import React from "react";
import HeroSectionOne from "./HeroSectionOne";
import CategorySection from "./CategorySection";
import BannerSection from "./BannerSection";
import CourseSectionOne from "../common/Course/CourseSectionOne";
import EventSection from "./EventSection";
import PriceSectionOne from "./PriceSectionOne";
import CtaSection from "./CtaSection";
import CourseSidebarMain from "../course-sidebar/CourseSidebarMain";
import CourseArea from "../course-sidebar/CourseArea";
import HomeMainAbout from "./HomeMainAbout";

const HomeMain = () => {
  return (
    <>
      <HeroSectionOne />
      <HomeMainAbout/>
      <CategorySection />
      <BannerSection />
      <CourseSectionOne />
      {/* <CourseArea /> */}
      {/* <CourseSidebarMain /> */}
      {/* <EventSection /> */}
      {/* <PriceSectionOne /> */}
      <CtaSection />
    </>
  );
};

export default HomeMain;
