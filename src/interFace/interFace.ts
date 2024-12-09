import { StaticImageData } from "next/image";
// context api data type
export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  headerSerachOpen?: boolean;
  toggleHeaderSerach?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  // filterType, setFilterType
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  bookSubject: coursesType[] | undefined;
  setBookSubject: React.Dispatch<React.SetStateAction<coursesType[] | undefined>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

//Brand Slider Interface

export interface brandSliderType {
  id: number;
  img: StaticImageData;
  place: string;
}

// Package Duration

export interface DurationPackage {
  id: number;
  title: string;
  percentage: number;
  subtitle: string;
}

// Define the type for a single class item
export interface ClassItem {
  name: string;
}

// Define the type for a single category
export interface Category {
  image: StaticImageData;
  image2: StaticImageData;
  description: string;
  category: string;
  ibCategoryCode: string;
  title: string;
  description_Second: string;
  description_Third: string;
  description_fourth: string;
  description_five: string;
  categoryclass: ClassItem[]; // Adjust the property name to match your data
}

// Define the type for the array of categories
export type CategoriesDataType = Category[];

//category-type-data



export interface categoryType {
  id: number;
  icon: () => JSX.Element;
  title: string;
  desc: string;
}

//courses-type
interface Teacher {
  img: StaticImageData;
  name: string;
  position: string;
}

interface Package {
  name: string;
  duration: string;
  lecture: string;
  tutorExperince: string
  price: number;
  oldPrice: number;
}

export interface coursesType {
  id: number;
  image: StaticImageData;
  board: string;
  boardLink: string;
  category: string;
  hours: number;
  ratingAve: number;
  ratingCount: number;
  ratings: number;
  title: string;
  isPopular: Boolean;
  tutorImg: StaticImageData;
  author: string;
  quantity: number;
  categoryClass?: string;
  classCodeAsOfBoard: string;
  priceClass?: string;
  desc?: string;
  info?: string;
  imgUrl?: string;
  videoUrl: string;
  descriptionFirst: String;
  descriptionSecond: String;
  descriptionThird: String;
  courseTags: string[];
  courseFor: string[];
  otherTeachers: Teacher[];
  SG_default_package:Package;
  SG_packages:Package[];
  defaultPackage: Package;
  packages: Package[];

}
//category-filter-Type
export interface categoryFilterType {
  id: number;
  category: string;
}
export interface classFilterType {
  id: number;
  board: string;
  class: string;
  classCodeAsOfBoard: string;
}
//events-type
export interface eventType {
  id: number;
  title: string;
  date: string;
  time: string;
  place: string;
}
//counter-type
export interface counterType {
  id: number;
  countIcon: () => JSX.Element;
  countNum: number;
  countTitle: string;
  countPlus?: string;
  wrapperClass?: string;
  counterItemClass?: string;
  counterIconClass?: string;
}
//blog-type


type Subject = {
  id: number;
  subject: string;
  description: string;
  image: string;
  link: string;
};
export interface KeyPoint {
  id: number;
  keypointtitle: string;
  keypointdescription: string;
}

export interface SubDescription {
  id: number;
  subdescriptiontitle: string;
  keypoints: KeyPoint[];
  whychooseus: string[];
}


export interface programType {
  name: string;
  para: string;
  subdescriptions: SubDescription[];
}

export interface blogType {
  name: string;
  image: StaticImageData;
  blogTag: string;
  subheading: string;
  discription1: string;
  discription2: string;
  discription3: string;
  heading: string;
  abouthead: string;
  sectionHead: string;
  program: programType[];
  blogWrapperClass?: string;
  title: string;
  authorImg: StaticImageData;
  author: string;
  date: string;
  // subject: boolean;
  // subjects: Subject[];
}
//hero-slider-type
export interface heroSliderType {
  id: number;
  image: StaticImageData;
  title: string;
  info: string;
  titleInfo?: string;
  titleCategory?: string;
  YellowBg?: StaticImageData;
  wrapperClass?: string;
  desc?: string;
  sliderBtn?: string;
}

//instructor
interface SocialType {
  id: number;
  link: string;
  icon: string;
}
//instructor type
export interface instructorType {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  socialIcon: SocialType[];
}
//testimonial-Type
export interface TestimonialType {
  id: number;
  desc?: string;
  info?: string;
  authorName?: string;
}
//image-slider
export interface imageSliderType {
  id: number;
  image: StaticImageData;
}
// id type
export interface idType {
  id?: number;
}
export interface routeType {
  board?: string;
}
//review-data-type
export interface reviewType {
  id?: number;
  image?: StaticImageData;
  title?: string;
  ratings?: number;
  duration?: string;
  description?: string;
}
// product type
export interface productsType {
  id?: number;
  image?: StaticImageData;
  title: string;
  category?: string;
  level?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  quantity: number;
}
