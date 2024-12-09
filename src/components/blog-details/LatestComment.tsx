import Image from "next/image";
import Link from "next/link";
import React from "react";
import authorImgOne from "../../../public/assets/img/blog/comments/comment-1.jpg";
import authorImg from "../../../public/assets/img/blog/comments/comment-2.jpg";
import authorImgTwo from "../../../public/assets/img/blog/comments/comment-3.jpg";

const LatestComment = () => {
  return (
    <div className="latest-comments mb-95">
      <h3>3 Comments</h3>
      <ul>
        <li>
          <div className="comments-box grey-bg">
            <div className="comments-info d-flex">
              <div className="comments-avatar mr-20">
                <Image
                  src={authorImgOne}
                  // style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="avatar-name">
                <h5>Isha Sharma</h5>
                <span className="post-meta"> July 14, 2023</span>
              </div>
            </div>
            <div className="comments-text ml-65">
              <p>
                "The IB program at BR-Tutors has been a game-changer for me. The
                comprehensive curriculum and supportive tutors have helped me excel
                in my studies. The emphasis on critical thinking and research has
                greatly enhanced my learning experience, and I'm confident in my
                preparation for the future."
              </p>
              <div className="comments-replay">
                <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Reply</Link>
              </div>
            </div>
          </div>
        </li>
        <li className="children">
          <div className="comments-box grey-bg">
            <div className="comments-info d-flex">
              <div className="comments-avatar mr-20">
                <Image
                  src={authorImg}
                  // style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="avatar-name">
                <h5>Riya Patel</h5>
                <span className="post-meta">April 16, 2023 </span>
              </div>
            </div>
            <div className="comments-text ml-65">
              <p>
                "BR-Tutors' IB classes have truly sharpened my analytical skills. The
                engaging lessons and practical assignments have made learning
                enjoyable and effective."
              </p>
              <div className="comments-replay">
                <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Reply</Link>
              </div>
            </div>
          </div>
          <ul>
            <li className="children-2">
              <div className="comments-box grey-bg">
                <div className="comments-info d-flex">
                  <div className="comments-avatar mr-20">
                    <Image
                      src={authorImgTwo}
                      // style={{ width: "100%", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                  <div className="avatar-name">
                    <h5>Olivia Brown</h5>
                    <span className="post-meta">April 18, 2023 </span>
                  </div>
                </div>
                <div className="comments-text ml-65">
                  <p>
                    "The support from BR-Tutors has been amazing. The IB program's
                    structure has prepared me well for exams and future studies."
                  </p>
                  <div className="comments-replay">
                    <Link href="#" style={{ pointerEvents: 'none', cursor: 'default' }}>Reply</Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LatestComment;
