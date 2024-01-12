import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
             Reskilling Workforce
              <br className="hidden lg:inline-block" /> 
            </h1>
            <p className="mb-8 leading-relaxed">
            Connecting companies’ training needs to colleges' training opportunities just got easier. 
            With our innovative platform, we bridge the gap between industry requirements and educational offerings, 
              Discover a new era of collaboration between companies and colleges, where education meets industry demands effortlessly.

            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="Bill Sitting using laptop 1 (1).png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
