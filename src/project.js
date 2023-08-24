import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import {Square3Stack3DIcon,
  ArrowLeftIcon,
  HomeIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import Cards from "./Card";
import { Link } from "react-router-dom";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Projects() {
 
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="flex bg-gray-400 min-h-screen">
    <Cards/>
      <div className="w-3/4 p-4">
        <Link to="/">
        <ArrowLeftIcon className="h-[18px] w-[18px] ml-10"/>
        </Link>
      <h1 className="text-5xl text-center text-gray-350 font-extrabold uppercase tracking-wider" style={{ fontFamily: 'Impact', color: '#0c4a6e' }}>
  MY PORTFOLIO
</h1>
<br></br><br></br>
<>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>Hospital Appointment Booking System</AccordionHeader>
        <AccordionBody>
         A self-service hospital appointment booking system integrated with a chatbot and a scheduling algorithm that allows the chatbot to prioritize urgent patients. the project was done using Reactjs, Tailwind css, python and using mysql for the database. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Karrington Private Hospital
        </AccordionHeader>
        <AccordionBody>
         A duplication of the Karrington Private Hospital Website using Bootstrap and HTML
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Website Portfolio
        </AccordionHeader>
        <AccordionBody>
          A portfolio for all the projects done using Reactjs and Tailwind CSS
        </AccordionBody>
      </Accordion>
    </>
    <br></br> <br></br>
    <div class="flex justify-center mx-auto" >
    <Button color="navy-blue">Read More</Button>
    </div>
      </div>
      </div>
  );
}