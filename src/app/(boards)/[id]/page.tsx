import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import blog_data from "@/data/blog-data";
import courses_data from "@/data/courses-data";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";



// export async function generateStaticParams() {
//   const subjects = courses_data;
//   return subjects.map((subject) => ({
//     id: subject.board?.toString() || '',
//   }));
// }


export async function generateStaticParams() {
  const boards = blog_data;
  return boards.map((board) => ({
    id: board.name?.toString() || '',
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const boardName = params.id;

  const boardData = blog_data.find((board) => board.name?.toString() === boardName);

  return {
    title: `${boardName} | Personalized Online Tutoring - BR Tutors`,
    description: `Get personalized online tutoring for ${boardName}. Join BR Tutors for expert guidance and improve your academic performance.`,
  };
}



const page = ({ params }: { params: { id: string } }) => {
  const board = params.id;
  return (
    <Wrapper>
      <main>
        <BlogDetailsMain board={board} />
      </main>
    </Wrapper>
  );
};

export default page;
