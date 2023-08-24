import React from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Layout from "./layout";
import {
  Card,
} from "@material-tailwind/react";

 
export default function Cards() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    // <div className="flex bg-gray-400 min-h-screen">
      <Card className="bg-blue-700 w-1/4 p-14 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2">
          <div className="h-30 w-20 rounded-full mx-auto">
            <img 
              src={require('./pic.jpg')}
              alt="..."
            />
          </div>
          <br></br>
          <br></br>
          <div style={{ fontFamily: 'Impact', color: '#0c4a6e' }}>
          <h4><b>ABOUT ME</b></h4>
          Hi, I'm Ruvimbo, a software and web developer. I specialize in developing responsive websites and applications using a variety of programming languages and frameworks, including HTML, CSS, JavaScript and Reactjs.
          <br></br>
          <br></br>
          <h4><b>CONTACT</b></h4>
          <div class="flex justify-start ...">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +263775930500
          </div>
          <div class="flex justify-start ...">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            ruvimbobumhudza@gmail.com
            </div>
          </div>
        </div>
      </Card>
    // </div>
  );
}