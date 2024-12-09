import { Metadata } from 'next';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import categoriesData from '@/data/categoriesData';
import courses_data from '@/data/courses-data';
import Wrapper from '@/layout/DefaultWrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import SidebarBanner from "../../../../../public/assets/img/about/about.jpg"

import CategorySidebar from "../../../../components/course-sidebar/CategorySidebar"
import CategoryIconOne from '@/svg/CategoryIconOne';


export async function generateStaticParams() {
    const subjects = courses_data;
    return subjects.map((subject) => ({
        id: subject.board?.toString() || '',
        categoryId: subject.category?.toString() || '',
    }));
}

export async function generateMetadata({ params }: { params: { categoryId: string, id: string } }): Promise<Metadata> {
    const category = categoriesData.find(cat => cat.category === params.categoryId);

    const formattedCategory = category?.category.replace(/-/g, " ") || 'Category';

    const title = `${formattedCategory} Tuitions - BR Tutors`;
    const description = `Scale your child's learning with BR Tutors' ${formattedCategory} Tuitions. Our expert tutors provide personalized guidance for academic success. Visit us!`;

    return {
        title: title,
        description: description,
    };
}


const page = ({ params }: { params: { categoryId: string, id: string, } }) => {


    const filterData = courses_data.filter(course => course.category === params.categoryId && course.board === params.id && course.title !== "none");

    const category = categoriesData.filter(category => category.category === params.categoryId);
    if (!category) {
        return <p>No category found.</p>;
    }

    const handleBoardClass = (boardClass: any) => {
        switch (boardClass) {
            case "Junior-School": return "Class 1 to 5"; break;
            case "Middle-School": return "Class 6 to 8"; break;
            case "Secondary-School": return "Class 9 to 10"; break;
            case "Senior-Secondary-School": return "Class 11 to 12"; break;
        }
    }
    const handleBoardYear = (boardClass: any) => {
        switch (boardClass) {
            case "Junior-School": return "5 to 11"; break;
            case "Middle-School": return "11 to 14"; break;
            case "Secondary-School": return "14 to 16"; break;
            case "Senior-Secondary-School": return "16 to 18"; break;
        }
    }

    const formattedParamsCategory = params.categoryId.replace(/-/g, " ");
    return (

        <Wrapper>
            <Breadcrumb title={formattedParamsCategory} subTitle={formattedParamsCategory} />
            <section className="blog__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="blog__wrapper">
                                <div className="blog__text mb-40">
                                    {category.map((element, index) => {
                                        return (
                                            <div key={index}>
                                                <h2>{element.title}</h2>
                                                <p >{element.description}</p>
                                            </div>

                                        )
                                    })}
                                </div>
                                <div className="blog__img w-img mb-45">
                                    <Image
                                        src={category[0].image}
                                        style={{ width: "100%", height: "31rem", objectFit: "cover" }}
                                        alt="image not found"
                                    />
                                </div>
                                <div className="blog__link mb-35">
                                    <h2>
                                        {params.id}{" "}BOARD - {handleBoardClass(params.categoryId)}
                                    </h2>
                                </div>
                                <div className="blog__text mb-40">

                                    {category.map((element, index) => {
                                        return (
                                            <div key={index}>
                                                <p >{element.description_Second}</p>
                                                <p >{element.description_Third}</p>
                                                <p >{element.description_fourth}</p>
                                                <p >{element.description_five}</p>
                                            </div>
                                        )
                                    })}

                                </div>

                                <div className="blog__line"></div>
                                {/* <BlogSocial /> */}
                                {/* <BlogAuthor /> */}
                                {/* <BlogRecent /> */}
                                {/* <LatestComment /> */}
                                {/* <div className="blog__comment">
                                    <h3>Write a Review</h3>
                                    <BlogCommentForm />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="blog__sidebar pl-70">
                                <div className="blog__link mb-35">
                                    <h3>
                                        Explore Categories
                                    </h3>
                                </div>
                                <div className="sidebar__widget mb-55">

                                    <div className="sidebar__banner w-img">

                                        {categoriesData.map((item, index) => {
                                            // Format the category name
                                            const formattedCategory = item.category.replace(/-/g, " ");

                                            return (
                                                <p key={index}>
                                                    <Link href={`${item.category}`}>
                                                        <CategorySidebar data={formattedCategory} image={item.image2} routeCategory={params.categoryId} catgoryWithoutFormatted={item.category} />
                                                    </Link>
                                                </p>
                                            );
                                        })}

                                    </div>
                                </div>



                                <div className="blog__link mb-35">
                                    <h3>
                                        Choose Your Classes
                                    </h3>
                                </div>
                                <div className="">
                                    {category[0].categoryclass.map((item: any, index: any) => {


                                        const handleBoardClass = (boardClass: any, board: any) => {
                                            if (board === 'IB') {
                                                switch (boardClass) {
                                                    case "1st": return "PYP1 "; break;
                                                    case "2nd": return "PYP2"; break;
                                                    case "3rd": return "PYP3"; break;
                                                    case "4th": return "PYP4"; break;
                                                    case "5th": return "PYP5"; break;
                                                    case "6th": return "MYP1"; break;
                                                    case "7th": return "MYP2"; break;
                                                    case "8th": return "MYP3"; break;
                                                    case "9th": return "MYP4"; break;
                                                    case "10th": return "MYP5"; break;
                                                    case "11th": return "DP1"; break;
                                                    case "12th": return "DP2"; break;
                                                }
                                            } else{
                                                switch (boardClass) {
                                                    case "1st": return "1st"; break;
                                                    case "2nd": return "2nd"; break;
                                                    case "3rd": return "3rd"; break;
                                                    case "4th": return "4th"; break;
                                                    case "5th": return "5th"; break;
                                                    case "6th": return "6th"; break;
                                                    case "7th": return "7th"; break;
                                                    case "8th": return "8th"; break;
                                                    case "9th": return "9th"; break;
                                                    case "10th": return "10th"; break;
                                                    case "11th": return "11th"; break;
                                                    case "12th": return "12th"; break;
                                                }
                                            }
                                        }
                                        return (

                                            <Link key={index} href={`/${params.id}/${params.categoryId}/${item.name}`} className="category__item mb-10 transition-3 d-flex align-items-center " style={{ cursor: "pointer" }} >
                                                <div className="category__icon mr-30">
                                                    {<CategoryIconOne />}
                                                </div>
                                                <div className="category__content">
                                                    <p style={{ fontSize: "18px" }}>{handleBoardClass(item.name, params.id)}</p>
                                                </div>
                                            </Link>
                                        )
                                    }
                                    )}

                                </div>
                                <div className="sidebar__widget mt-55">
                                    <div className="sidebar__banner w-img" style={{ borderRadius: "5px", overflow: "hidden" }}>
                                        <Image
                                            src={SidebarBanner}
                                            style={{ width: "100%", height: "auto" }}
                                            alt="image not found"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






            {/* <section className="course__area pb-120">

                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                            <div className="course__tab-conent">

                                <div className="tab-content" id="courseTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="grid"
                                        role="tabpanel"
                                        aria-labelledby="grid-tab"
                                    >
                                        <div className="row">
                                            {category[0].categoryclass.map((item: any, index: any) => {
                                                return (

                                                    <Link
                                                        href={`/${params.id}/${params.categoryId}/${item.name}`}
                                                        key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                                        <div className="course__item white-bg mb-30 fix " >
                                                            <div className="course__thumb w-img p-relative bg-primary fix" style={{ height: "220px", }}>

                                                                <div className="course__tag" style={{ display: "flex", justifyContent: "space-between", gap: "5px" }}>

                                                                    <Link
                                                                        href={`/${params.id}/${params.categoryId}/${item.name}`}
                                                                        className={
                                                                            item.categoryClass ? `${item.categoryClass}` : ""
                                                                        }
                                                                    >
                                                                        {item.name}{" "} Class
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                )
                                            }

                                            )}
                                         
                                        </div>
                                    </div>
                                   
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </Wrapper>

    )
}

export default page