import { categoryType } from "@/interFace/interFace";
import CategoryIconOne from "@/svg/CategoryIconOne";
import CategoryIconEight from "@/svg/category-icon-eight";
import CategoryIconFive from "@/svg/category-icon-five";
import CategoryIconFour from "@/svg/category-icon-four";
import CategoryIconNine from "@/svg/category-icon-nine";
import CategoryIconSeven from "@/svg/category-icon-seven";
import CategoryIconSix from "@/svg/category-icon-six";
import CategotyIconThere from "@/svg/category-icon-there";
import CategoryIconTwo from "@/svg/category-icon-two";

const category_data: categoryType[] = [
  {
    id: 1,
    icon: CategoryIconOne,
    title: "Mathematics",
    desc: "Data is Key",
  },
  {
    id: 2,
    icon: CategoryIconTwo,
    title: "Physics",
    desc: "Understand the Universe",
  },
  {
    id: 3,
    icon: CategotyIconThere,
    title: "Chemistry",
    desc: "Explore Matter",
  },
  {
    id: 4,
    icon: CategoryIconFour,
    title: "Biology",
    desc: "Study Life",
  },
  {
    id: 5,
    icon: CategoryIconFive,
    title: "Economics",
    desc: "Analyze Markets",
  },
  {
    id: 6,
    icon: CategoryIconSix,
    title: "Business & Management",
    desc: "Lead & Innovate",
  },
  {
    id: 7,
    icon: CategoryIconSeven,
    title: "Computer Science",
    desc: "Code the Future",
  },
  {
    id: 8,
    icon: CategoryIconEight,
    title: "Psychology",
    desc: "Understand Minds",
  },
  {
    id: 9,
    icon: CategoryIconNine,
    title: "History",
    desc: "Study the Past",
  },
  {
    id: 10,
    icon: CategoryIconNine,
    title: "Geography",
    desc: "Explore the Earth",
  },
]
export default category_data;
