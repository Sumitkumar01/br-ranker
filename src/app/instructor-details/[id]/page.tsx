import InstructorDetailsMain from "@/components/instructor-details/InstructorDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

import instructor_data from "@/data/instructor-data";

export async function generateStaticParams() {
  const ids = instructor_data.map(instructor => instructor.id);
  return ids.map(id => ({
    id: id.toString(), // Convert id to string
  }));
}
const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <Wrapper>
      <main>
        <InstructorDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default page;
