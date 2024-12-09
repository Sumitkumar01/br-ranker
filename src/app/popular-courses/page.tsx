import CourseSidebarMain from "@/components/course-sidebar/CourseSidebarMain";
import PopularSubjectSideBarMain from "@/components/popular-courses/PopularSubjectSideBarMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const CourseSideBarPage = () => {
  return (
    <Wrapper>
      <main>
        <PopularSubjectSideBarMain />
      </main>
    </Wrapper>
  );
};

export default CourseSideBarPage;