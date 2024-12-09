import React from "react";
import BlogSidebar from "../Blog/BlogSidebar";
import BlogCommentForm from "@/form/blog-comment-form";
import LatestComment from "./LatestComment";
import BlogSocial from "./BlogSocial";
import BlogAuthor from "./BlogAuthor";
import BlogQuoteImg from "../../../public/assets/img/blog/quote-1.png";
import Image, { StaticImageData } from "next/image";

interface Blog {
  id: number;
  image: StaticImageData;
}

const BlogAreaContent: React.FC<{ blog: Blog }> = ({ blog }: any) => {
  return (
    <section className="blog__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="blog__wrapper">
              <div className="blog__text mb-40">
                <p>
                  {blog.subheading}
                </p>
                <p>
                  {blog.discription1}
                </p>

                <h4>
                  {blog.heading}:
                </h4>
                <p>
                  {blog.discription2}
                </p>
                <h4>
                  {blog.abouthead}:
                </h4>
                <p>
                  {blog.discription3}
                </p>
              </div>
              <div className="blog__img w-img mb-45">
                <Image
                  src={blog?.image}
                  style={{ width: "100%", height: "31rem", objectFit: "cover" }}
                  alt="image not found"
                />
              </div>
              <div className="blog__text mb-40">

                <h4>
                  {blog.sectionHead}
                </h4>
                <p>
                  {blog.discription3}
                </p>
              </div>
              <div className="blog__text mb-40">
                {blog.program.map((element: any, index: any) => {

                  return (
                    <div className="mb-40" key={index}>
                      <p> <strong>{element.name}</strong>:{" "}{element.para}
                      </p>
                      {element.subdescriptions.map((items: any, index: any) => {
                        return (
                          <div key={index}>
                            <h5>{items.subdescriptiontitle}</h5>
                            <ul typeof="">
                              {items.keypoints.map((keypoints: any, index: any) => {
                                return (
                                  <li key={index}><strong>{keypoints.keypointtitle}</strong>{" "}{keypoints.keypointdescription}</li>
                                )
                              })}
                            </ul>
                            <div className="mt-20">
                              <h5>Why Choose Us?</h5>
                              <ul typeof="">
                                {items.whychooseus.map((whychooseus:any,index:any)=>{
                                  return(
                                    <li key={index}>- {whychooseus}</li>
                                  )
                                })}
                               
                              </ul>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
                {/* <div>
                  <p> <strong>IB Diploma Programme (DP) Tutoring</strong>:{" "}The IB Diploma Programme (DP) is an internationally recognized two-year course designed for students aged 16 to 19, preparing them for university and beyond. The DP curriculum is challenging but rewarding, focusing on developing well-rounded individuals with critical thinking, problem-solving, and research skills.
                  </p>
                  <h5>Our DP Tutoring Offers:</h5>
                  <ul typeof="">
                    <li><strong>Subject-Specific Help:</strong>{" "}We offer tutoring in all DP subjects, including Language & Literature, Mathematics, Sciences, Social Studies, and The Arts. Our tutors provide tailored support to help students master each subject and perform their best.</li>
                    <li><strong>Subject-Specific Help:</strong>{" "}We offer tutoring in all DP subjects, including Language & Literature, Mathematics, Sciences, Social Studies, and The Arts. Our tutors provide tailored support to help students master each subject and perform their best.</li>
                  </ul>
                  <div className="mt-20">
                    <h5>Why Choose Us?</h5>
                    <ul typeof="">
                      <li>- Our expert tutors understand the DP's complexities and are skilled at helping students achieve their academic goals.</li>
                      <li>- Our expert tutors understand the DP's complexities and are skilled at helping students achieve their academic goals.</li>
                    </ul>
                  </div>
                </div> */}

                {/* {
                  blog.program.map((item: any, index: any) => (
                    <div key={index}>
                      <p>
                        <strong>{item.name}</strong>:{item.para}
                      </p>

                    </div>
                  ))
                } */}

                {/* <h4>
                  {blog.sectionHead}
                </h4>
                <p>
                  {blog.discription3}
                </p> */}
              </div>
              {/* <div className="blog__quote grey-bg mb-45 p-relative fix">
                <Image
                  className="quote"
                  src={BlogQuoteImg}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
                <blockquote>
                  <p>
                    After I started learning with BR Tutors, I realized that my understanding of the IB curriculum had improved significantly.
                  </p>
                  <h4>Aarav Mehta</h4>
                </blockquote>
              </div> */}
              <div className="blog__text mb-30">
                {/* <p>
                  Beyond academics, we place a strong emphasis on character development.
                  Our students are nurtured to become caring and responsible global citizens who are mindful
                  of their role in making a positive impact on society. We instill values such as empathy,
                  integrity, and respect, which are integral to the IB philosophy.
                </p> */}
              </div>
              <div className="blog__link mb-35">
                {/* <p>
                  BR Tutors offers specialized support for IB students with expert guidance and tailored resources. Explore our IB courses and achieve your academic goals at:
                  <a href="https://BR-Tutors.com/subjects">https://test.webjini.in/subjects</a>
                </p> */}
              </div>

              <div className="blog__text mb-40">
                {/* <h3>What it means to be an IB student At BR-Tutors</h3>
                <p>
                  The experience of being an IB student is different from being a student at other schools
                  in several ways. Learn more about:.
                </p>
                <ul style={{ marginTop: "-15px", listStyleType: 'disc' }}>
                  <li>How IB students play a central role in their education</li>
                  <li>Responsibilities of IB World Schools, students, and the IB organization</li>
                  <li>What makes IB assessments unique</li>
                </ul> */}
              </div>
              <div className="blog__line"></div>
              <BlogSocial />
              {/* <BlogAuthor /> */}
              {/* <BlogRecent /> */}
              {/* <LatestComment /> */}
              <div className="blog__comment">
                <h3>Write a Review</h3>
                <BlogCommentForm />
              </div>
            </div>
          </div>
          <BlogSidebar blog={blog} />
        </div>
      </div>
    </section>
  );
};

export default BlogAreaContent;
