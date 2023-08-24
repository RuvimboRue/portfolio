import React from "react";
import {Square3Stack3DIcon,
  HomeIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Layout from "./layout";
import Cards from "./Card";

 
export default function App() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="flex bg-gray-400 min-h-screen">
      <Cards/>
     <Layout/>
    </div>
  );
}