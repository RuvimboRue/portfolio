import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import {Square3Stack3DIcon,
  ArrowLeftIcon,
  HomeIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import Cards from "./Card";
import { Link } from "react-router-dom";


export default function About() {
 
  return (
    <div className="flex bg-gray-400 min-h-screen">
    <Cards/>
      <div className="w-3/4 p-4">
        <Link to="/">
        <ArrowLeftIcon className="h-[18px] w-[18px] ml-10"/>
        </Link>
      <h1 className="text-5xl text-center text-gray-350 font-extrabold uppercase tracking-wider" style={{ fontFamily: 'Impact', color: '#0c4a6e' }}>
  ABOUT ME
</h1>
<br></br><br></br>
<Card className="w-96 flex justify-center mx-auto">
      <CardHeader floated={false} className="h-80">
        <img src="/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
      </div>
      </div>
  );
}