import React from "react";
import img from "./assets/img.jpg";

const Flex = () => {
  return (
    <div className="bg-white w-full">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-full w-full object-cover object-center bg"
                  src={img}
                  alt="blog"
                />
              
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img}
                  alt="blog"
                />
                <div class="p-6">
                  <div class="flex items-center flex-wrap"></div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-1 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={img}
                  alt="blog"
                />
                <div class="p-6">
                  <div class="flex items-center flex-wrap "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flex;
