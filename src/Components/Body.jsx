import React from "react";
import Card from "./Card";
import Jobs from "./Jobs";

const Body = () => {
  return (
    <div>
      <div className="border-b-8 border-purple-200">
        <div className=" text-center flex flex-col items-center justify-center h-screen ">
          <h1 className="text-white text-5xl font-bold text-[40px] md:text-[60px] lg:text-[80px]">
            Become a React Dev
          </h1>
          <p className="text-white text-xl mt-1 font-light">
            Find the React job that fits your skill set
          </p>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row gap-6 p-10 justify-center border-b-8 bg-white mt-7">
          <div className="border border-black rounded-lg p-7 mt-1">
            <Card
              title={"For Developers"}
              subtitle={"Browse our React jobs and start your career today"}
            />
          </div>
          <div className="border border-black rounded-lg p-6 bg-purple-200 mt-1">
            <Card
              title={"For Employers"}
              subtitle={"Browse our React jobs and start your career today"}
            />
          </div>
        </div>
      </div>

      {/* Work 2  */}
      
      <h1 className="text-4xl mt-3 font-bold text-white text-center">JOBS FOR YOU</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-8 lg:px-10 p-4">
        {Jobs.map(({id, title, description, salary, location, type}) => (
            <div className="border border-black shadow-xl rounded-3xl p-7 bg-white hover:shadow-xl transition-shadow duration-300"
             key={id}>
                <div className="flex justify-between items-center mb-3 flex-wrap">
                    <span className="text-sm md:text-sm rounded-full bg-red-600 text-white font-bold px-2 pt-1 pb-1">
                        {type} 
                    </span>
                    <span className="text-sm md:text-sm font-semibold">
                        {location}
                    </span>
                </div>
                <h2 className="font-bold text-2xl mt-7">{title}</h2>
                <p className="mt-2">{description}</p>
                <div className="flex justify-between items-center flex-wrap gap-3 mb-3">
                    <span className="m-auto font-semibold mt-4 text-lg">
                        {salary}
                    </span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
