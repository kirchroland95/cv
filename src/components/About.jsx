import React from "react";
const year = new Date().getFullYear();

const About =()=>{
    return(
        <div className="w-full  px-4 mx-auto bg-white">
            <p className="md:text-5xl sm:text-4xl text-3xl font-bold pb-10 text-center">ABOUT ME</p>
            <p className="md:text-3xl sm:text-2xl text-xl font-bold pb-4 text-center">Embedded Software Developer with 5 Years of Experience in the Automotive Industry</p>
            <p className="md:text-3xl sm:text-2xl text-xl font-bold pb-4 text-center">Bachelor's and Master's Degrees in Computer Science</p>
            <p className="md:text-3xl sm:text-2xl text-xl font-bold pb-4 text-center">Dedicated to Continuous Learning Through Personal Projects and Exploration of New Technologies</p>
            <p className="md:text-3xl sm:text-2xl text-xl font-bold pb-20 text-center text-[#007BFF] "><a href="https://www.linkedin.com/in/roland-kirch-1093361b1/" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></p>
            <p className="text-xl text-center font-bold pb-20 text-gray-400 ">Copyright © {year} Kirch Roland</p>
        </div>
    )
}

export default About;