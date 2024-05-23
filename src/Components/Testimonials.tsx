"use client";

import { Carousel } from "flowbite-react";

function Testimonials() {
  return (
    <div
      style={
        {
          // height: "35vh",
          // backgroundColor: "#20B526",
          // opacity: "5%",
        }
      }
    >
      <div id="reviews-container">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel
            slideInterval={5000000}
            pauseOnHover
            indicators={false}
            leftControl={""}
          >
            <div className="flex justify-center gap-12">
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
            </div>
            <div>
              <div>test1</div>
              <div>test1</div>
              <div>test1</div>
            </div>
            <div>
              <div>tes3t</div>
              <div>test3</div>
              <div>test3</div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export { Testimonials };
