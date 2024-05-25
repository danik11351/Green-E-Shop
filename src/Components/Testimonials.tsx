"use client";
import ReviewPFP from "../assets/ReviewsPFP.svg";
import ReviewVector from "../assets/ReviewsVector.svg";
import { Carousel } from "flowbite-react";
import { Rating } from "flowbite-react";
import CompanyLogo from "../assets/company logos/logo-3.svg";
function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-green-50">
      <div className="text-center">
        <div>
          <p className="text-green-500 text-xl ">Testimonial</p>
        </div>
        <div>
          <h1 className="font-bold text-4xl">What Our Customers Says</h1>
        </div>
      </div>
      <div id="reviews-container">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 p-12">
          <Carousel
            slideInterval={2400}
            pauseOnHover
            indicators={false}
            leftControl={""}
          >
            <div id="review-container-1" className="flex justify-around">
              <div
                id="testimonial-card-1"
                className="flex-col bg-white  px-3 p-1 rounded shadow-xl"
              >
                {/* {testimonial vector} */}
                <div className="my-1">
                  <img src={ReviewVector} alt="" />
                </div>
                {/* {testimonial vector} */}
                {/* {testimonial text} */}
                <div className="my-4">
                  <p>
                    Pellentesque eu nibh eget mauris congue mattis mattis
                    <br /> nec tellus. Phasellus imperdiet elit eu magna
                    <br /> dictum, bibendum cursus velit sodales. Donec sed
                    <br /> neque eget
                  </p>
                </div>
                {/* {testimonial text} */}
                {/* {testimonial PFP+name+stars} */}
                <div className="flex gap-2">
                  {/* {customer PFP} */}
                  <div>
                    <img src={ReviewPFP} alt="" />
                  </div>
                  {/* {customer PFP} */}
                  {/* {Customer Name} */}
                  <div className="flex gap-24">
                    <div className="mt-1 ms-1">
                      <p>Robert Fox</p>
                      <p className="text-gray-400">Customer</p>
                    </div>
                    {/* {Customer Rating} */}
                    <div className="mt-3">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                      </Rating>
                    </div>
                    {/* {Customer Rating} */}
                  </div>
                  {/* {Customer Name} */}
                </div>
                {/* {testimonial PFP+name+stars} */}
              </div>
              <div>
                <div
                  id="testimonial-card-1"
                  className="flex-col   bg-white  px-3 p-1 rounded shadow-xl"
                >
                  {/* {testimonial vector} */}
                  <div className="my-1">
                    <img src={ReviewVector} alt="" />
                  </div>
                  {/* {testimonial vector} */}
                  {/* {testimonial text} */}
                  <div className="my-4">
                    <p>
                      Pellentesque eu nibh eget mauris congue mattis mattis
                      <br /> nec tellus. Phasellus imperdiet elit eu magna
                      <br /> dictum, bibendum cursus velit sodales. Donec sed
                      <br /> neque eget
                    </p>
                  </div>
                  {/* {testimonial text} */}
                  {/* {testimonial PFP+name+stars} */}
                  <div className="flex gap-2">
                    {/* {customer PFP} */}
                    <div>
                      <img src={ReviewPFP} alt="" />
                    </div>
                    {/* {customer PFP} */}
                    {/* {Customer Name} */}
                    <div className="flex gap-24">
                      <div className="mt-1 ms-1">
                        <p>Robert Fox</p>
                        <p className="text-gray-400">Customer</p>
                      </div>
                      {/* {Customer Rating} */}
                      <div className="mt-3">
                        <Rating>
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star filled={false} />
                        </Rating>
                      </div>
                      {/* {Customer Rating} */}
                    </div>
                    {/* {Customer Name} */}
                  </div>
                  {/* {testimonial PFP+name+stars} */}
                </div>
              </div>
              <div>
                {" "}
                <div
                  id="testimonial-card-1"
                  className="flex-col  bg-white   px-3 p-1 rounded shadow-xl"
                >
                  {/* {testimonial vector} */}
                  <div className="my-1">
                    <img src={ReviewVector} alt="" />
                  </div>
                  {/* {testimonial vector} */}
                  {/* {testimonial text} */}
                  <div className="my-4">
                    <p>
                      Pellentesque eu nibh eget mauris congue mattis mattis
                      <br /> nec tellus. Phasellus imperdiet elit eu magna
                      <br /> dictum, bibendum cursus velit sodales. Donec sed
                      <br /> neque eget
                    </p>
                  </div>
                  {/* {testimonial text} */}
                  {/* {testimonial PFP+name+stars} */}
                  <div className="flex gap-2">
                    {/* {customer PFP} */}
                    <div>
                      <img src={ReviewPFP} alt="" />
                    </div>
                    {/* {customer PFP} */}
                    {/* {Customer Name} */}
                    <div className="flex gap-24">
                      <div className="mt-1 ms-1">
                        <p>Robert Fox</p>
                        <p className="text-gray-400">Customer</p>
                      </div>
                      {/* {Customer Rating} */}
                      <div className="mt-3">
                        <Rating>
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star filled={false} />
                        </Rating>
                      </div>
                      {/* {Customer Rating} */}
                    </div>
                    {/* {Customer Name} */}
                  </div>
                  {/* {testimonial PFP+name+stars} */}
                </div>
              </div>
            </div>
            <div id="review-container-1" className="flex justify-around">
              <div
                id="testimonial-card-1"
                className="flex-col bg-white  px-3 p-1 rounded shadow-xl"
              >
                {/* {testimonial vector} */}
                <div className="my-1">
                  <img src={ReviewVector} alt="" />
                </div>
                {/* {testimonial vector} */}
                {/* {testimonial text} */}
                <div className="my-4">
                  <p>
                    Pellentesque eu nibh eget mauris congue mattis mattis
                    <br /> nec tellus. Phasellus imperdiet elit eu magna
                    <br /> dictum, bibendum cursus velit sodales. Donec sed
                    <br /> neque eget
                  </p>
                </div>
                {/* {testimonial text} */}
                {/* {testimonial PFP+name+stars} */}
                <div className="flex gap-2">
                  {/* {customer PFP} */}
                  <div>
                    <img src={ReviewPFP} alt="" />
                  </div>
                  {/* {customer PFP} */}
                  {/* {Customer Name} */}
                  <div className="flex gap-24">
                    <div className="mt-1 ms-1">
                      <p>Robert Fox</p>
                      <p className="text-gray-400">Customer</p>
                    </div>
                    {/* {Customer Rating} */}
                    <div className="mt-3">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                      </Rating>
                    </div>
                    {/* {Customer Rating} */}
                  </div>
                  {/* {Customer Name} */}
                </div>
                {/* {testimonial PFP+name+stars} */}
              </div>
              <div>
                <div
                  id="testimonial-card-1"
                  className="flex-col   bg-white  px-3 p-1 rounded shadow-xl"
                >
                  {/* {testimonial vector} */}
                  <div className="my-1">
                    <img src={ReviewVector} alt="" />
                  </div>
                  {/* {testimonial vector} */}
                  {/* {testimonial text} */}
                  <div className="my-4">
                    <p>
                      Pellentesque eu nibh eget mauris congue mattis mattis
                      <br /> nec tellus. Phasellus imperdiet elit eu magna
                      <br /> dictum, bibendum cursus velit sodales. Donec sed
                      <br /> neque eget
                    </p>
                  </div>
                  {/* {testimonial text} */}
                  {/* {testimonial PFP+name+stars} */}
                  <div className="flex gap-2">
                    {/* {customer PFP} */}
                    <div>
                      <img src={ReviewPFP} alt="" />
                    </div>
                    {/* {customer PFP} */}
                    {/* {Customer Name} */}
                    <div className="flex gap-24">
                      <div className="mt-1 ms-1">
                        <p>Robert Fox</p>
                        <p className="text-gray-400">Customer</p>
                      </div>
                      {/* {Customer Rating} */}
                      <div className="mt-3">
                        <Rating>
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star filled={false} />
                        </Rating>
                      </div>
                      {/* {Customer Rating} */}
                    </div>
                    {/* {Customer Name} */}
                  </div>
                  {/* {testimonial PFP+name+stars} */}
                </div>
              </div>
              <div>
                {" "}
                <div
                  id="testimonial-card-1"
                  className="flex-col  bg-white   px-3 p-1 rounded shadow-xl"
                >
                  {/* {testimonial vector} */}
                  <div className="my-1">
                    <img src={ReviewVector} alt="" />
                  </div>
                  {/* {testimonial vector} */}
                  {/* {testimonial text} */}
                  <div className="my-4">
                    <p>
                      Pellentesque eu nibh eget mauris congue mattis mattis
                      <br /> nec tellus. Phasellus imperdiet elit eu magna
                      <br /> dictum, bibendum cursus velit sodales. Donec sed
                      <br /> neque eget
                    </p>
                  </div>
                  {/* {testimonial text} */}
                  {/* {testimonial PFP+name+stars} */}
                  <div className="flex gap-2">
                    {/* {customer PFP} */}
                    <div>
                      <img src={ReviewPFP} alt="" />
                    </div>
                    {/* {customer PFP} */}
                    {/* {Customer Name} */}
                    <div className="flex gap-24">
                      <div className="mt-1 ms-1">
                        <p>Robert Fox</p>
                        <p className="text-gray-400">Customer</p>
                      </div>
                      {/* {Customer Rating} */}
                      <div className="mt-3">
                        <Rating>
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star filled={false} />
                        </Rating>
                      </div>
                      {/* {Customer Rating} */}
                    </div>
                    {/* {Customer Name} */}
                  </div>
                  {/* {testimonial PFP+name+stars} */}
                </div>
              </div>
            </div>
            <div id="review-container-1" className="flex justify-around">
              <div
                id="testimonial-card-1"
                className="flex-col bg-white  px-3 p-1 rounded shadow-xl"
              >
                {/* {testimonial vector} */}
                <div className="my-1">
                  <img src={ReviewVector} alt="" />
                </div>
                {/* {testimonial vector} */}
                {/* {testimonial text} */}
                <div className="my-4">
                  <p>
                    Pellentesque eu nibh eget mauris congue mattis mattis
                    <br /> nec tellus. Phasellus imperdiet elit eu magna
                    <br /> dictum, bibendum cursus velit sodales. Donec sed
                    <br /> neque eget
                  </p>
                </div>
                {/* {testimonial text} */}
                {/* {testimonial PFP+name+stars} */}
                <div className="flex gap-2">
                  {/* {customer PFP} */}
                  <div>
                    <img src={ReviewPFP} alt="" />
                  </div>
                  {/* {customer PFP} */}
                  {/* {Customer Name} */}
                  <div className="flex gap-24">
                    <div className="mt-1 ms-1">
                      <p>Robert Fox</p>
                      <p className="text-gray-400">Customer</p>
                    </div>
                    {/* {Customer Rating} */}
                    <div className="mt-3">
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                      </Rating>
                    </div>
                    {/* {Customer Rating} */}
                  </div>
                  {/* {Customer Name} */}
                </div>
                {/* {testimonial PFP+name+stars} */}
              </div>
              <div>
                <div
                  id="testimonial-card-1"
                  className="flex-col   bg-white  px-3 p-1 rounded shadow-xl"
                >
                  {/* {testimonial vector} */}
                  <div className="my-1">
                    <img src={ReviewVector} alt="" />
                  </div>
                  {/* {testimonial vector} */}
                  {/* {testimonial text} */}
                  <div className="my-4">
                    <p>
                      Pellentesque eu nibh eget mauris congue mattis mattis
                      <br /> nec tellus. Phasellus imperdiet elit eu magna
                      <br /> dictum, bibendum cursus velit sodales. Donec sed
                      <br /> neque eget
                    </p>
                  </div>
                  {/* {testimonial text} */}
                  {/* {testimonial PFP+name+stars} */}
                  <div className="flex gap-2">
                    {/* {customer PFP} */}
                    <div>
                      <img src={ReviewPFP} alt="" />
                    </div>
                    {/* {customer PFP} */}
                    {/* {Customer Name} */}
                    <div className="flex gap-24">
                      <div className="mt-1 ms-1">
                        <p>Robert Fox</p>
                        <p className="text-gray-400">Customer</p>
                      </div>
                      {/* {Customer Rating} */}
                      <div className="mt-3">
                        <Rating>
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star filled={false} />
                        </Rating>
                      </div>
                      {/* {Customer Rating} */}
                    </div>
                    {/* {Customer Name} */}
                  </div>
                  {/* {testimonial PFP+name+stars} */}
                </div>
              </div>
              <div>
                {" "}
                <div
                  id="testimonial-card-1"
                  className="flex-col  bg-white   px-3 p-1 rounded shadow-xl"
                >
                  {/* {testimonial vector} */}
                  <div className="my-1">
                    <img src={ReviewVector} alt="" />
                  </div>
                  {/* {testimonial vector} */}
                  {/* {testimonial text} */}
                  <div className="my-4">
                    <p>
                      Pellentesque eu nibh eget mauris congue mattis mattis
                      <br /> nec tellus. Phasellus imperdiet elit eu magna
                      <br /> dictum, bibendum cursus velit sodales. Donec sed
                      <br /> neque eget
                    </p>
                  </div>
                  {/* {testimonial text} */}
                  {/* {testimonial PFP+name+stars} */}
                  <div className="flex gap-2">
                    {/* {customer PFP} */}
                    <div>
                      <img src={ReviewPFP} alt="" />
                    </div>
                    {/* {customer PFP} */}
                    {/* {Customer Name} */}
                    <div className="flex gap-24">
                      <div className="mt-1 ms-1">
                        <p>Robert Fox</p>
                        <p className="text-gray-400">Customer</p>
                      </div>
                      {/* {Customer Rating} */}
                      <div className="mt-3">
                        <Rating>
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star filled={false} />
                        </Rating>
                      </div>
                      {/* {Customer Rating} */}
                    </div>
                    {/* {Customer Name} */}
                  </div>
                  {/* {testimonial PFP+name+stars} */}
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
function WorkingWithUs() {
  return (
    <div id="working-with-us-container" className="flex justify-around p-12">
      <div id="company-1">
        <img className="hover:scale-125 transition" src={CompanyLogo} alt="" />
      </div>
      <div className="border-r"></div>
      <div id="company-1">
        <img className="hover:scale-125 transition" src={CompanyLogo} alt="" />
      </div>
      <div className="border-r"></div>
      <div id="company-1">
        <img className="hover:scale-125 transition" src={CompanyLogo} alt="" />
      </div>
      <div className="border-r"></div>
      <div id="company-1">
        <img className="hover:scale-125 transition" src={CompanyLogo} alt="" />
      </div>
      <div className="border-r"></div>
      <div id="company-1">
        <img className="hover:scale-125 transition" src={CompanyLogo} alt="" />
      </div>
      <div className="border-r"></div>
      <div id="company-1">
        <img className="hover:scale-125 transition" src={CompanyLogo} alt="" />
      </div>
    </div>
  );
}
export { Testimonials, WorkingWithUs };
