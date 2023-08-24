import React from "react";
import {
  Card,
  Typography,
  Button,
  Avatar
} from "@material-tailwind/react";
import {Square3Stack3DIcon,
  HomeIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

 
export default function Layout() {
 
  return (
      <div className="w-3/4 p-4">
       <nav className="flex justify-center px-20 bg-gray-500">
  <ul className="mb-4 mt-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row object-center lg:items-center lg:gap-6 my-2">
    <Typography
      as="li"
      variant="large"
      color="blue-gray"
      className="p-1 font-large"
      font="bold"
    >
      <HomeIcon className="h-[18px] w-[18px] ml-10" />
      <a href="#" className="flex items-center ml-10">
        Home
      </a>
    </Typography>
    <Typography
      as="li"
      variant="large"
      color="blue-gray"
      className="p-1 font-large"
    >
      <UserIcon className="h-[18px] w-[18px] ml-10" />
      <a href="/about" className="flex items-center ml-10">
        About
      </a>
    </Typography>
    <Typography
      as="li"
      variant="large"
      color="blue-gray"
      className="p-1 font-large"
    >
      <Square3Stack3DIcon className="h-[18px] w-[18px] ml-10" />
      <a href="/projects" className="flex items-center ml-10">
        Projects
      </a>
    </Typography>
    
  </ul>
</nav>
        <div class="flex flex-col items-center justify-center h-screen">
          <div className="h-60 w-70 rounded-full mx-auto">
            <img 
              src={require('./deve.jpg')}
              alt="..."
            />
          </div>
 <div className="text-center text-gray-350 mb-4 font-bold text-2xl uppercase tracking-wider">
  FULL STACK
</div>
<h1 className="text-5xl text-center text-gray-350 font-extrabold uppercase tracking-wider" style={{ fontFamily: 'Impact', color: '#0c4a6e' }}>
  DEVELOPER
</h1>
  <br></br><br></br>
  <Link to="/projects">
  <Button color="gray">Projects</Button>
  </Link>
</div>
      </div>
  );
}