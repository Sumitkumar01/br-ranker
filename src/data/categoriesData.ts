import { CategoriesDataType } from "@/interFace/interFace";
import JuniorSchoolImg2 from "../../public/assets/img/about/junior_school_online_tutions_banner.jpg"

import MiddleSchoolImg from "../../public/assets/img/about/middle_school_online_tutions_banner.jpg"
import MiddleSchoolImg2 from "../../public/assets/img/about/student-1.jpg"
import SecondarySchoolImg2 from "../../public/assets/img/about/student-3.jpg"
import SecondarySchoolImg from "../../public/assets/img/about/secondary_school_online_tutions_banner.jpg"
import SeniorSecondarySchoolImg2 from "../../public/assets/img/about/student-2.jpg"
import SeniorSecondarySchoolImg from "../../public/assets/img/about/senior_secondary_school_online_tutions_banner.jpg"
// Example data based on the defined types
const categoriesData: CategoriesDataType = [
    {
        category: "Junior-School",
        ibCategoryCode: "PYP",
        title: "Junior School (Age 5-10, Years 1-5)",
        image: JuniorSchoolImg2,
        image2: JuniorSchoolImg2,
        description: "A Junior School, often referred to as an elementary or primary school,serves as the foundation for a child's educational journey. It typically caters to children aged 1st to 5th years,encompassing key stages in their early development.",
        description_Second: "At BR Tutors, we understand the significance of early years education in laying the foundation for lifelong learning. Our Junior School tutoring program is designed to nurture curious minds, fostering a love for learning and building essential skills in English, Mathematics, Science, and other subjects.",
        description_Third: "Our Junior School program features small group classes or one-on-one tutoring, customized lesson plans aligned with curriculum requirements, and regular progress updates for parents. We focus on developing study habits, time management skills, and encouraging curiosity and inquiry-based learning. ",
        description_fourth: "Our experienced tutors use interactive methods to engage young minds, ensuring students not only understand basic concepts but also develop a genuine love for learning. We work closely with parents to ensure every child's needs are met, providing personalized learning plans to help them excel.",
        description_five: "With BR Tutors, you can trust that your child will receive personalized attention and guidance to excel in their early years. Book a free consultation today and give your child the best start!",
        categoryclass: [
            { name: "1st" },
            { name: "2nd" },
            { name: "3rd" },
            { name: "4th" },
            { name: "5th" }
        ]

    },
    {
        category: "Middle-School",
        ibCategoryCode: "MYP",
        title: "Middle School (Age 11-14, Years 6-9)",
        image: MiddleSchoolImg,
        image2: MiddleSchoolImg2,
        description: "A Middle School, often referred to as an elementary or primary school,serves as the foundation for a child's educational journey. It typically caters to children aged 6th to 8th years,encompassing key stages in their early development.",
        description_Second: "The transition from Junior to Middle School can be challenging, but BR Tutors makes it smooth and enjoyable. Our Middle School tutoring focuses on strengthening core academic skills while introducing students to more advanced topics. We help students improve their critical thinking and problem-solving abilities in subjects like Mathematics, Science, Humanities, and English. Our expert tutors provide guidance on subject selection and career pathways, study skills workshops, and regular assessments and progress tracking.",
        description_Third: "At BR Tutors, we understand the importance of this transitional phase and are committed to helping your child build confidence and achieve academic success.",
        description_fourth: "Unlock your child's potential – schedule a tutoring session now!",
        description_five: "",
        categoryclass: [
            { name: "6th" },
            { name: "7th" },
            { name: "8th" }
        ]
    },
    {
        category: "Secondary-School",
        ibCategoryCode: "MYP",
        title: "Secondary School (Age 14-18, Years 10-12)",
        image: SecondarySchoolImg,
        image2: SecondarySchoolImg2,
        description: "A Seconadry School, often referred to as an elementary or primary school,serves as the foundation for a child's educational journey. It typically caters to children aged 9th to 10th years,encompassing key stages in their early development.",
        description_Second:"As students enter Secondary School, they face higher academic expectations and important decisions about their future. BR Tutors offers specialized tutoring that focuses on helping students excel in their chosen subjects. Whether it’s preparing for exams, refining essay-writing skills, or mastering complex topics in subjects like Mathematics, Sciences, and Languages, our expert tutors provide the support and guidance needed to achieve academic excellence.",
        description_Third:"We also offer career counseling and exam strategies, helping students make informed decisions about higher education. Our experienced tutors provide intensive exam preparation, revision strategies, study groups, and university and career counseling.",
        description_fourth:"With BR Tutors, you can trust that your child will receive personalized guidance and support to achieve their academic goals.",
        description_five: "Secure your child's future – book a Secondary School tutoring session today!",
        categoryclass: [
            { name: "9th" },
            { name: "10th" }
        ]
    },
    {
        category: "Senior-Secondary-School",
        ibCategoryCode: "DP",
        title: "Senior Secondary School (Age 11-18, Years 6-12)",
        image: SeniorSecondarySchoolImg,
        image2: SeniorSecondarySchoolImg2,
        description: "A Senior Secondary School, often referred to as an elementary or primary school,serves as the foundation for a child's educational journey. It typically caters to children aged 11th to 12th years,encompassing key stages in their early development.",
        description_Second:"BR Tutors is proud to support students preparing for their GCSE and IGCSE examinations. Our Senior Secondary School program encompasses both Middle and Senior School levels, providing seamless support throughout your child's secondary education journey.",
        description_Third:"Our tutors specialize in exam preparation, offering personalized guidance on time management, revision techniques, and subject-specific strategies. We focus on boosting confidence and ensuring students achieve top grades, preparing them for the next step in their academic journey.",
        description_fourth:"Discover how BR Tutors can support your child’s Senior Secondary education – book a consultation now!",
        description_five: "",
        categoryclass: [
            { name: "11th" },
            { name: "12th" }
        ]
    }
];

export default categoriesData;
