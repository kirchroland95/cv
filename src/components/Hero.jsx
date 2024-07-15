import React from "react";
import { ReactTyped } from "react-typed";
import ProfilePicture from "../assets/pfp.jpg"

const Hero =()=>{
    return(
        <div className="text-white pb-[10rem]">
            <div className="max-w-[800px] w-full mt-4 mx-auto text-center flex flex-col">
            <p className="text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold p-2">
                    KIRCH ROLAND
                </p>
                <p className="text-[#00df9a] md:text-6xl sm:text-5xl text-3xl font-bold p-2">
                    SOFTWARE DEVELOPER
                </p>
                <img className="rounded-full sm:w-[500px] w-[300px] mx-auto p-4" src={ProfilePicture} alt="" />
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Coding with passion.
                </h1>
                <div className="">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Experience in</p>
                    <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold "
                        strings={[
                            "embedded systems",
                            "web development",
                            "database management",
                            "debugging and testing",
                            "automotive industry"
                        ]}
                        typeSpeed={70}
                        backSpeed={50}
                        loop
                        />      
                </div>
            </div>
        </div>
    )
}

export default Hero;