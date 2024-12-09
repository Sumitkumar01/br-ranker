import React from "react";
import authorImg from "../../../public/assets/img/blog/author/blog-author-1.jpg";
import Image from "next/image";

const BlogAuthor = () => {
  return (
    <div className="blog__author-3 d-sm-flex grey-bg mb-90">
      <div className="blog__author-thumb-3 mr-20">
        <Image
          src={authorImg}
          // style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
      </div>
      <div className="blog__author-content">
        <h4>Shelly Mahajan</h4>
        <span>7 Years of Experience with the IB Board</span>
        <p>
          "With over seven years of teaching the International Baccalaureate (IB) program, I’ve witnessed firsthand the transformative impact of this curriculum on students. The IB approach encourages critical thinking and holistic development, which has significantly enhanced my teaching practices and student outcomes. It's been a rewarding journey to see students grow into thoughtful, informed individuals."
        </p>
      </div>
    </div>
  );
};

export default BlogAuthor;
