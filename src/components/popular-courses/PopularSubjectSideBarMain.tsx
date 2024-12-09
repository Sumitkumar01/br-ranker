import React from 'react'
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import PopularCourseArea from "./PopularCourseArea"

const PopularSubjectSideBarMain = () => {
    return (
        <>
            <Breadcrumb title="Popular Courses" subTitle="poipular-courses" />
            <PopularCourseArea />
        </>
    )
}

export default PopularSubjectSideBarMain