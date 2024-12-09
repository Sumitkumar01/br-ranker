"use client";
import course_category from "@/data/course-category-filter-data";
import course_class_data from "@/data/course-class-data";
import courses_data from "@/data/courses-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import YellowBg from "../../../../public/assets/img/shape/yellow-bg.png";
import CourseArea from "@/components/course-sidebar/CourseArea";
import CourseGridIconOne from "@/svg/course-grid-icon-one";
import CourseGridIconTwo from "@/svg/course-grid-icon-two";
import { AppContext } from '@/contextApi/AppProvider';
import { useContext } from 'react';
import { string } from "yup";

const CourseSectionOne = ({ courseTitle }: any) => {

  const [selectedBoard, setSelectedBoard] = useState("IB");
  const [selectedClass, setSelectedClass] = useState("PYP1");

   
   useEffect(() => {
    if (selectedBoard === "IGCSE") {
      setSelectedClass("1st");
    } else if (selectedBoard === "IB") {
      setSelectedClass("PYP1"); 
    } else if (selectedBoard === "CBSE") {
      setSelectedClass("1st"); 
    }
  }, [selectedBoard]); 

  const [activeCategory, setActiveCategory] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const context = useContext(AppContext);

  console.log("context", context);

  const country = context?.country;

  console.log(country);
  

  type CountryCode = 'SG' | 'IN'; // Add more codes as needed

  // const convertPrice = (price: number, country: CountryCode) => {
  //   const conversionRates: Record<CountryCode, number> = {
  //     US: 0.012, // Example: 1 INR = 0.012 USD
  //     IN: 1,     // INR stays the same
  //     // Add more countries and conversion rates as needed
  //   };

  //   return price * (conversionRates[country] || 1);
  // };

  const [updatedCourses, setUpdatedCourses] = useState(courses_data);

  useEffect(() => {
    const updatedCourses = courses_data.map((course) => {
      const updatedCourse = {
        ...course,
        // Choose SG packages if the country is SG, otherwise choose IN packages
        defaultPackage: country === 'SG' ? course.SG_default_package : course.defaultPackage,
        packages: country === 'SG' ? course.SG_packages : course.packages,
      };
      return updatedCourse;
    });
  
    setUpdatedCourses(updatedCourses);
  }, [country]);



  const handleSearchChange = (event: any) => {

    setSearchTerm(event.target.value);
  };


  const handleBoardChange = (event: any) => {
    setSelectedBoard(event.target.value);
  };

  const handleClassChange = (event: any) => {
    setSelectedClass(event.target.value);
  };



  // const filteredCourses = selectedBoard === "All"
  //   ? courses_data
  //   : courses_data.filter(course => course.category === selectedBoard);
  const filteredClassCodeAsPerClass = course_class_data.filter((element, index) => {
    return element.board == selectedBoard;
  })

  console.log(filteredClassCodeAsPerClass);


  const filteredCourses = updatedCourses.filter(course => {
    const matchesBoard = course.board === selectedBoard;
    const matchClass = course.classCodeAsOfBoard === selectedClass;
    const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBoard && matchClass && matchesSearchTerm;
  });


  const filterData = activeCategory === ""
    ? courses_data
    : courses_data.filter(course => course.board === activeCategory);

  console.log(activeCategory);


  const storedPackage = localStorage.getItem("selectedPackage");
  let selectedPackage: any = null;
  if (storedPackage !== null) {
    selectedPackage = JSON.parse(storedPackage);
    // console.log(selectedPackage);
    // Use selectedPackage as needed
  } else {
    // Handle the case where the item doesn't exist in localStorage
    console.log("No package found in localStorage.");
  }

  const currencySymbol = country === 'SG' ? '$' : '₹';

  return (
    <section className="course__area pt-115 pb-120 grey-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section__title-wrapper mb-30">
              <h2 className="section__title">
                Find the Right <br /> Online{" "}
                <span className="yellow-bg yellow-bg-big">
                  Course
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto", objectFit: "cover" }}
                    alt="image not found"
                  />
                </span>{" "}
                for you
              </h2>
              <p>
                You {`don't`} have to struggle alone, {`you've`} got our
                assistance and help.
              </p>
            </div>
          </div>
          {/* <div className="col-xxl-7 col-xl-6 col-lg-6">
            <div className="portfolio-button mb-60">
              <div className="masonary-menu filter-button-group">
                <button
                  onClick={() => setActiveCategory("")}
                  className={activeCategory === "" ? "active" : "category-btn"}
                  type="button"
                >
                  See All
                  <span className="port-red">[{courses_data.length}]</span>
                </button>
                {course_category.length &&
                  course_category.map((item) => (
                    <button
                      onClick={() => setActiveCategory(item.category)}
                      className={
                        activeCategory === item.category
                          ? "active"
                          : "category-btn"
                      }
                      key={item.id}
                      type="button"
                    >
                      {item?.category}{" "}
                      <span className="port-red">[{filterData.length}]</span>
                    </button>
                  ))}
              </div>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12">
            <div className="course__tab-inner grey-bg-2 mb-30 d-sm-flex justify-content-between align-items-center">
              <div className="course__tab-wrapper d-flex align-items-center">
                <div className="course__tab-btn">
                  <ul className="nav nav-tabs" id="courseTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="grid-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#grid"
                        type="button"
                        role="tab"
                        aria-controls="grid"
                        aria-selected="true"
                      >
                        <CourseGridIconOne />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link list"
                        id="list-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#list"
                        type="button"
                        role="tab"
                        aria-controls="list"
                        aria-selected="false"
                      >
                        <CourseGridIconTwo />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="course__view">
                  <h4>Showing 1 - {filteredCourses.length} of {filteredCourses.length}</h4>
                  {/* {course_category.length} */}
                </div>
              </div>
              <div className="course__sort d-flex flex-column flex-sm-row align-items-sm-center gap-2 justify-content-sm-end">
                <div className="course__sort-inner w-100">
                  <select onChange={handleBoardChange} value={selectedBoard} className="">
                    {/* <option value="All">
                      All
                    </option> */}
                    {course_category.map((category, index) => (
                      <option key={index} value={category.category}>
                        {category.category}
                      </option>

                    ))}

                  </select>
                </div>
                <div className="course__sort-inner w-100">
                  <select onChange={handleClassChange} value={selectedClass} className="">
                    {/* <option value="All">
                      All
                    </option> */}
                    {filteredClassCodeAsPerClass.map((item, index) => (
                      <option key={index} value={item.classCodeAsOfBoard}>
                        {item.classCodeAsOfBoard}
                      </option>

                    ))}

                  </select>
                </div>
                <div className="w-100">
                  <form action="# " className=""


                  >
                    <input
                      type="text"
                      placeholder="Search for subject..."
                      className=""
                      value={searchTerm}
                      onChange={handleSearchChange}
                      style={{
                        appearance: "none",
                        border: "none",
                        outline: "none",
                        height: "35px",
                        lineHeight: "27px",
                        padding: "0 20px",
                        color: "#53545b",
                        fontWeight: "500",
                        borderRadius: "4px"
                      }}
                    />

                  </form>
                </div>
              </div>
            </div>
            <div className="course__tab-conent">
              <div className="tab-content" id="courseTabContent">
                <div
                  className="tab-pane fade show active"
                  id="grid"
                  role="tabpanel"
                  aria-labelledby="grid-tab"
                >
                  <div className="row">

                    {filteredCourses.length != 0 ?
                      <>
                        {filteredCourses.map((item) => {
                          const formattedCourseTitle = item.title.replace(/-/g, " ");

                          return (
                            <div
                              key={item.id}
                              className="col-xxl-4 col-xl-4 col-lg-4 col-md-4"
                            >
                              <div className="course__item white-bg mb-30 fix " >
                                <div className="course__thumb w-img p-relative bg-primary fix" style={{ height: "220px", }}>
                                  <Link className="b-2" href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}>
                                    <Image
                                      src={item.image}
                                      style={{ width: "100%", height: "100%" }}
                                      alt="image not found"
                                    />
                                  </Link>
                                  <div className="course__tag" style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>

                                    <Link
                                      href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}
                                      className={
                                        item.categoryClass ? `${item.categoryClass}` : ""
                                      }
                                    >
                                      {item.board}
                                    </Link>
                                    <Link
                                      href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}
                                      className={
                                        item.category ? `${item.category}` : ""
                                      }
                                    >
                                      {item.classCodeAsOfBoard}
                                    </Link>
                                  </div>
                                </div>
                                <div className="course__content">
                                  <div className="course__meta d-flex align-items-center justify-content-between">
                                    <div className="course__lesson">
                                      <span>
                                        <i className="far fa-book-alt"></i>
                                        {item.defaultPackage.lecture} Lesson
                                      </span>
                                    </div>
                                    <div className="course__rating">
                                      <span>
                                        <i className="fas fa-star"></i>
                                        {item.ratingAve} ({item.ratingCount})
                                      </span>
                                    </div>
                                  </div>
                                  <h3 className="course__title">
                                    <Link href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}>
                                      {formattedCourseTitle}
                                    </Link>
                                  </h3>
                                  {/* <div className="course__teacher d-flex align-items-center">
                                    <div className="course__teacher-thumb mr-15">
                                      <Image
                                        src={item.tutorImg}
                                        style={{ width: "auto", height: "auto" }}
                                        alt="image not found"
                                      />
                                    </div>
                                    <h6>
                                      <Link href="/instructor-details">
                                        {item.author}
                                      </Link>
                                    </h6>
                                  </div> */}
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                  <div className="course__status">
                                    <span
                                      className={
                                        item.priceClass ? `${item.priceClass}` : ""
                                      }
                                    >
                                      {item.defaultPackage.price === 0
                                        ? "FREE"
                                        : `${currencySymbol}${item.defaultPackage.price.toFixed(2)}`}
                                    </span>
                                    {/* <span className="old-price">
                                      {item.defaultPackage.oldPrice === 0
                                        ? " "
                                        : `₹${item.defaultPackage.oldPrice}.00`}
                                    </span> */}
                                  </div>
                                  <div className="course__btn">
                                    <Link
                                      href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}
                                      className="link-btn"
                                    >
                                      Know Details
                                      <i className="far fa-arrow-right"></i>
                                      <i className="far fa-arrow-right"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </>

                      :
                      <div className="d-flex justify-content-center">No course found for this {selectedBoard} Board</div>

                    }
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="list"
                  role="tabpanel"
                  aria-labelledby="list-tab"
                >
                  <div className="row">
                    {filteredCourses.length != 0 ?
                      <>
                        {filteredCourses.map((item) => (
                          <div key={item.id} className="col-xxl-12">
                            <div className="course__item white-bg mb-30 fix">
                              <div className="row gx-0">
                                <div className="col-xxl-4 col-xl-4 col-lg-4">
                                  <div className="course__thumb course__thumb-list w-img p-relative fix">
                                    <Link href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}>
                                      <Image
                                        src={item.image}
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                      />
                                    </Link>
                                    <div className="course__tag" style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>



                                      <Link
                                        href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}
                                        className={
                                          item.categoryClass ? `${item.categoryClass}` : ""
                                        }
                                      >
                                        {item.board}
                                      </Link>
                                      <Link
                                        href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}
                                        className={
                                          item.category ? `${item.category}` : ""
                                        }
                                      >
                                        {item.category}
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-8 col-xl-8 col-lg-8">
                                  <div className="course__right">
                                    <div className="course__content course__content-4">
                                      <div className="course__meta d-flex align-items-center">
                                        <div className="course__lesson mr-20">
                                          <span>
                                            <i className="far fa-book-alt"></i>
                                            {item.defaultPackage.lecture}
                                            Lesson
                                          </span>
                                        </div>
                                        <div className="course__rating">
                                          <span>
                                            <i className="fas fa-star"></i>
                                            {item.ratingAve} ({item.ratingCount})
                                          </span>
                                        </div>
                                      </div>
                                      <h3 className="course__title">
                                        <Link href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}>
                                          {item.title}
                                        </Link>
                                      </h3>
                                      <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                          <Image
                                            src={item.tutorImg}
                                            style={{
                                              width: "auto",
                                              height: "auto",
                                            }}
                                            alt="image not found"
                                          />
                                        </div>
                                        <h6>
                                          <Link href="/instructor-details">
                                            {item.author}
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="course__more course__more-2 course__more-3 d-flex justify-content-between align-items-center">
                                      <div className="course__status">
                                        <span
                                          className={
                                            item.priceClass
                                              ? `${item.priceClass}`
                                              : ""
                                          }
                                        >
                                          {item.defaultPackage.price === 0
                                            ? "FREE"
                                            : `₹${item.defaultPackage.price}.00`}
                                        </span>
                                        <span className="old-price">
                                          {item.defaultPackage.oldPrice === 0
                                            ? " "
                                            : `₹${item.defaultPackage.oldPrice}.00`}
                                        </span>
                                      </div>
                                      <div className="course__btn">
                                        <Link
                                          href={`${item.board}/${item.category}/${item.categoryClass}/${item.title}`}
                                          className="link-btn"
                                        >
                                          Know Details
                                          <i className="far fa-arrow-right"></i>
                                          <i className="far fa-arrow-right"></i>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                      :
                      <div className="d-flex justify-content-center">No course found for this {selectedBoard} Board</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSectionOne;
