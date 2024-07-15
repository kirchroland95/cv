import React from "react";
import Card from "./Card"


const Cards =()=>{
    return(
        <div className="w-full py-[10rem] px-4 mx-auto bg-white">
            <p className="md:text-6xl sm:text-5xl text-4xl font-bold pb-10 text-center">PROJECTS</p>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <Card 
                    title="GameTracker" 
                    features={[
                        "Node.js Express EJS",
                        "CSS and Bootstrap",
                        "PostgreSQL"
                      ]} 
                    buttonText="Preview" 
                    hyperlink="https://gametracker-6enp.onrender.com/"
                    sourcecode="https://github.com/kirchroland95/vgt"
                />
                <Card 
                    title="FistFighters" 
                    features={[
                        "React game",
                        "Frontend",
                        "Turn-based"
                      ]} 
                    buttonText="Preview" 
                    hyperlink="https://kirchroland95.github.io/fistfighters/"
                    sourcecode="https://github.com/kirchroland95/fistfighters"
                />     
                <Card 
                    title="ReInvent" 
                    features={[
                        "Inventory Management App",
                        "Laravel",
                        "React + Tailwind"
                      ]} 
                    buttonText="In progress" 
                    hyperlink="https://kirchroland95.github.io/fistfighters/"
                    sourcecode=""
                />            
            </div>
        </div>
    )
}

export default Cards;