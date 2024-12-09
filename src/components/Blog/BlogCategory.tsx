"use client"

import Link from "next/link";
import React from "react";
import courses_data from "@/data/courses-data";
import categoriesData from "@/data/categoriesData";

const BlogCategory = ({ blog }: any) => {

  const filterData = courses_data.filter(course => course.isPopular === true);

  console.log(blog)

  const handleClick = () => {
    alert(blog.name)
  }

  return (
    <div className="sidebar__widget mb-55">


      <div className="sidebar__widget-head">
        <h3 onClick={() => handleClick()} className="sidebar__widget-title">Categories</h3>
      </div>

      <div className="sidebar__widget-content">
        <div className="sidebar__category">
          <ul>
            {categoriesData.map((item, index) => {
              // Format the category name
              const formattedCategory = item.category.replace(/-/g, " ");
              const formattedIbCategoryCode = item.ibCategoryCode.replace(/-/g, " ");

              return (
                <li key={index}>
                  <Link href={`${blog.name}/${item.category}`}>{formattedCategory}{"  "}<span style={{fontWeight:"700"}}>({formattedIbCategoryCode})</span></Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>


      <div className="sidebar__widget-head mt-35">
        <h3 className="sidebar__widget-title">Popular Subjects</h3>
      </div>
      <div className="sidebar__widget-content">
        <div className="sidebar__category">
          <ul>
            {
              filterData.map((item, index) => {
                const formattedCourseTitle = item.title.replace(/-/g, " ");
                return (
                  <li key={index}>
                    <Link href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}>{formattedCourseTitle}</Link>
                  </li>
                )
              })
            }

            {/* <li>
              <Link href="/blog">Mathematics</Link>
            </li>
            <li>
              <Link href="/blog">Science</Link>
            </li>
            <li>
              <Link href="/blog">Social Science</Link>
            </li>
            <li>
              <Link href="/blog">Economics</Link>
            </li>
            <li>
              <Link href="/blog">Accountacny</Link>
            </li>
            <li>
              <Link href="/blog">Polity</Link>
            </li> */}
          </ul>
        </div>
      </div>


    </div>
  );
};

export default BlogCategory;
