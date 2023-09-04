import React from "react";

export default function Home() {


    return (
        <div className="bg-amber-50 flex flex-col md:flex-row justify-around items-center py-10 mt-10">
            <div className="flex flex-col items-start">
                {/* <img src={require("../../assets/Ellipse 46.jpg")} alt="Ellipse" className=""/> */}
                <p className="font-bold">Discover the beauty of the Tropics</p>
                <h1 className="font-bold text-6xl my-2">Tropical</h1>
                <h1 className="font-bold text-6xl">Destinations</h1>
                <h1 className="font-semibold text-5xl my-2"> for Students </h1>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='bg-[#F27A44] text-white py-1.5 px-6 rounded-3xl my-2'>
                    SIGN UP
                </button>
            </div>
            <div className=" flex justify-center items-center h-[400px] w-[400px]">
                <img className="h-[95%] w-[85%] rounded-[50%]"
                    src={require("../../assets/Main-Image.jpg")} alt="MainImage" />
            </div>
        </div>
    )
}