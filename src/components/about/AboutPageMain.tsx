"use client";
import React from "react";
import BannerSection from "../home/BannerSection";
import dynamic from "next/dynamic";
import WhyChoose from "../home-two/WhyChoose";
import TestimonialSlider from "../Elements/Slider/TestimonialSlider";
import AboutSection from "./AboutSection";
import CounterSection from "./CounterSection";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
import Faqs from "./Faqs";
import OurMission from "./OurMission";
const BrandWithNoSSR = dynamic(() => import("../Elements/Slider/BrandSlider"), {
  ssr: false,
});
const AboutPageMain = () => {
  return (
    <>
      <BreadcrumbTwo titleTwo="About" subTitleTwo="About" />
      <AboutSection />
      <OurMission />
      <BrandWithNoSSR />
      <TestimonialSlider />
      <WhyChoose />
      <CounterSection />
      {/* <BannerSection /> */}
      <Faqs />
    </>
  );
};

export default AboutPageMain;
