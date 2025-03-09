import { IoHome, IoCreateOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { CiHeart, CiSettings } from "react-icons/ci";

export const links = [
  {
    icon: <IoHome />,
    path: "/",
    title: "Home",
  },
  {
    icon: <IoCreateOutline />,
    path: "/create",
    title: "Create",
  },
  {
    icon: <FaRegCompass />,
    path: "/explore",
    title: "Explore",
  },
  {
    icon: <CiHeart />,
    path: "/favourites",
    title: "Favourites",
  },
  {
    icon: <CiSettings />,
    path: "/help",
    title: "Help",
  },
];

export const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
