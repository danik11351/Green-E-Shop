import BlogBG1 from "../assets/blog/Blogbg-oranges.svg";
import BlogBG2 from "../assets/blog/ Blogbg-eggs.svg";
import BlogBG3 from "../assets/blog/Blogbg-veg.svg";

import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { MdOutlineInsertComment } from "react-icons/md";

function Blog() {
  return (
    <div>
      <div
        id="blogs-container"
        className="flex flex-col lg:flex-row justify-center p-24 gap-12"
      >
        <div id="blog-1">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={BlogBG1} alt="" />
            </a>
            <div className="mt-6">
              <BlogTags />
            </div>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-400"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="blog-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={BlogBG2} alt="" />
            </a>
            <div className="mt-6">
              <BlogTags />
            </div>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-400"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div id="blog-3">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={BlogBG3} alt="" />
            </a>
            <div className="mt-6">
              <BlogTags />
            </div>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Curabitur porttitor orci eget neque accumsan venenatis. Nunc
                fermentum.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green-400"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function BlogTags() {
  return (
    <div>
      <div id="tag-container" className="flex justify-around text-gray-500">
        <div className="flex gap-1">
          <div className="mt-0.5">
            <GoTag />
          </div>
          <div className="text-gray-500 font-thin text-sm">Food</div>
        </div>
        <div className="flex gap-1">
          <div className="mt-0.5">
            <CiUser />
          </div>
          <div className=" text-gray-500 font-thin text-sm">By Admin</div>
        </div>
        <div>
          <div className="flex gap-1">
            <div className="mt-0.5">
              <MdOutlineInsertComment />
            </div>
            <div className="text-gray-500 font-thin text-sm">65 Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Blog, BlogTags };
