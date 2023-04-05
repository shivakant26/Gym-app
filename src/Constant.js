import { GrInstagram, GrYoutube } from "react-icons/gr";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { HiOutlineMailOpen, HiLocationMarker, HiPhone } from "react-icons/hi";
import Home from "./component/home/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Connected from "./pages/Connect";
import BlogPage from "./pages/BlogPage";
import ConstactUs from "./pages/ConstactUs";
import Trainer from "./pages/Trainer";

export const menuOption = [
    { url: "/", urlLabel: "Home" },
    { url: "/about", urlLabel: "About" },
    { url: "/classes", urlLabel: "Classes" },
    { url: "/trainer", urlLabel: "Trainer" },
    { url: "/blogpages", urlLabel: "pages" },
    { url: "/connected", urlLabel: "Connected" },
    { url: "/contactus", urlLabel: "ContactUs" },
  ];

export const topMenuIcon = [
    { icon: <ImFacebook /> ,linkUrl:""},
    { icon: <ImTwitter /> ,linkUrl:""},
    { icon: <ImLinkedin2 /> ,linkUrl:""},
    { icon: <GrInstagram /> ,linkUrl:""},
    { icon: <GrYoutube /> ,linkUrl:""},
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
  { slug:"/", component:<Home/> },
  { slug:"/about", component:<About/> },
  { slug:"/classes", component:<Classes /> },
  { slug:"/connected", component:<Connected /> },
  { slug:"/blogpages", component:<BlogPage /> },
  { slug:"/trainer", component:<Trainer /> },
  { slug:"/contactus", component:<ConstactUs /> },
]  