import CourseDetailsMain from "@/components/course-details/CourseDetailsMain";
import courses_data from "@/data/courses-data";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

// This function will be called at build time
export async function generateStaticParams() {
  const ids = courses_data.map(course => course.id);
  return ids.map(id => ({
    id: id.toString(), // Convert id to string
  }));
}
const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <main>
        <CourseDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default page;
