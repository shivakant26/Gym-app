import { GrInstagram, GrYoutube } from "react-icons/gr";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { HiOutlineMailOpen, HiLocationMarker, HiPhone } from "react-icons/hi";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import Home from "./component/home/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import BlogPage from "./pages/BlogPage";
import ConstactUs from "./pages/ConstactUs";
import Trainer from "./pages/Trainer";
import TrainerFirst from "./assets/images/team-1.jpg";
import TrainerSecond from "./assets/images/team-2.jpg";
import TrainerThird from "./assets/images/team-3.jpg";

export const menuOption = [
  { url: "/", urlLabel: "Home" },
  { url: "/about", urlLabel: "About" },
  { url: "/classes", urlLabel: "Classes" },
  { url: "/trainer", urlLabel: "Trainer" },
  { url: "/blogpages", urlLabel: "pages" },
  { url: "/contact", urlLabel: "Contact" },
];

export const topMenuIcon = [
  { icon: <ImFacebook />, linkUrl: "" },
  { icon: <ImTwitter />, linkUrl: "" },
  { icon: <ImLinkedin2 />, linkUrl: "" },
  { icon: <GrInstagram />, linkUrl: "" },
  { icon: <GrYoutube />, linkUrl: "" },
];

export const linkData = [
  { url: "/", optionName: "Home" },
  { url: "/", optionName: "About us" },
  { url: "/", optionName: "class schedules" },
  { url: "/", optionName: "our trainer" },
  { url: "/", optionName: "latest blog" },
  { url: "/", optionName: "Contact us" },
];

export const getInTouch = [
  { icon: <HiLocationMarker />, value: "123 Street, New York, USA" },
  { icon: <HiOutlineMailOpen />, value: "mail@domain.com" },
  { icon: <HiPhone />, value: "+012 345 67890" },
];

export const allRouter = [
  { slug: "/", component: <Home /> },
  { slug: "/about", component: <About /> },
  { slug: "/classes", component: <Classes /> },
  { slug: "/blogpages", component: <BlogPage /> },
  { slug: "/trainer", component: <Trainer /> },
  { slug: "/contact", component: <ConstactUs /> },
];

export const getInTouchCard = [
  {
    icon: <MdLocationPin />,
    heading: "visit us",
    discription: "123 Street, New York, USA",
  },
  { icon: <MdEmail />, heading: "mail us", discription: "mail@domain.com" },
  {
    icon: <AiOutlinePhone />,
    heading: "call us",
    discription: "+012 345 6789",
  },
];

export const Days = [
  { key: "mon", dayName: "monday" },
  { key: "tue", dayName: "tuesday" },
  { key: "wed", dayName: "wednesday" },
  { key: "thur", dayName: "thursday" },
  { key: "fri", dayName: "friday" },
  { key: "sat", dayName: "saturday" },
  { key: "sun", dayName: "sunday" },
];

export const classSechdules = [
  {
    time: "6:00AM - 8:00AM",
    courseName: "power lifting",
    trainerName: "jhon deo",
  },
  {
    time: "8:00AM - 10:00AM",
    courseName: "body building",
    trainerName: "james taylor",
  },
  {
    time: "10:00AM - 12:00AM",
    courseName: "cardio program",
    trainerName: "jack sparrow",
  },
  {
    time: "12:00AM - 2:00AM",
    courseName: "weight loss",
    trainerName: "rober smith",
  },
  {
    time: "2:00AM - 4:00AM",
    courseName: "fitness program",
    trainerName: "adam phillips",
  },
  {
    time: "4:00AM - 6:00AM",
    courseName: "crossfit classes",
    trainerName: "james allen",
  },
  {
    time: "6:00AM - 8:00AM",
    courseName: "muscle building",
    trainerName: "petter jhon",
  },
  {
    time: "8:00AM - 10:00AM",
    courseName: "yoga class",
    trainerName: "jessy rio",
  },
];

export const TrainerData = [
  {
    image: TrainerFirst,
    alt: "team-1",
    trainerName: "jhon deo",
    jobTitle: "trainer",
  },
  {
    image: TrainerSecond,
    alt: "team-2",
    trainerName: "James taylor",
    jobTitle: "trainer",
  },
  {
    image: TrainerThird,
    alt: "team-3",
    trainerName: "adam philips",
    jobTitle: "trainer",
  },
  {
    image: TrainerSecond,
    alt: "team-4",
    trainerName: "jhon deo",
    jobTitle: "trainer",
  },
  {
    image: TrainerThird,
    alt: "team-5",
    trainerName: "jamesh taylor",
    jobTitle: "trainer",
  },
  {
    image: TrainerFirst,
    alt: "team-6",
    trainerName: "adam philips",
    jobTitle: "trainer",
  },
];
