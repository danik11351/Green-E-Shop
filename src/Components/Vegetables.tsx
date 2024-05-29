import React, { useState } from "react";
import { AboveNavBarLargeScreen, AboveNavBarMobile } from "./AboveNavBar";
import { LargeScreenNavBar } from "./NavBar";
import { GoHome } from "react-icons/go";
import { RiArrowDropRightLine } from "react-icons/ri";
import SalesBanner from "../assets/VegtablesPage assets/VegtablesSaleBanner.svg";
import Select from "react-select";
import { Label } from "flowbite-react";

// {MinPrice selector}
const MinPrice = [
  { value: "0", label: "0" },
  { value: "5", label: "5" },
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "60", label: "60" },
  { value: "120", label: "120" },
];
// {MaxPrice selector}
const MaxPrice = [
  { value: "0", label: "0" },
  { value: "5", label: "5" },
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "60", label: "60" },
  { value: "120", label: "120" },
];
// {Rating Selector}
const Rating = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const SortBy = [
  { value: "LowestPrice", label: "Lowest Price" },
  { value: "HighestPrice", label: "Highest Price" },
];

const ShowMax = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
];

function Vegetables() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (selectedOption, { name }) => {
    setSelectedFilters((prev) => {
      const updatedFilters = prev.filter((filter) => filter.name !== name);
      if (selectedOption) {
        updatedFilters.push({ name, value: selectedOption });
      }
      return updatedFilters;
    });
  };

  const handleRemoveFilter = (name) => {
    setSelectedFilters((prev) => prev.filter((filter) => filter.name !== name));
  };

  return (
    <div>
      <div id="navbar">
        <AboveNavBarLargeScreen />
        <AboveNavBarMobile />
        <LargeScreenNavBar />
      </div>
      <div
        id="where-am-i"
        className="flex gap-0.5 ms-1 mt-3 lg:mt-0 lg:ms-24 lg:me-0 lg:px-1.5 "
      >
        <div id="home-icon" className="">
          <a href="/">
            <GoHome className="text-gray-500 w-6 h-6" />
          </a>
        </div>{" "}
        <div>
          <RiArrowDropRightLine className="w-6 h-6 text-gray-500" />
        </div>
        <div>
          <p className="text-gray-500">Categories</p>
        </div>
        <div>
          <RiArrowDropRightLine className="w-6 h-6 text-gray-500" />
        </div>
        <div>
          <p className="text-green-500">Vegetables</p>
        </div>
      </div>
      <div id="salesbanner" className="mt-12">
        <img
          src={SalesBanner}
          alt="Sales Banner"
          className="cursor-pointer ms-auto me-auto"
        />
      </div>
      <div className="flex justify-between">
        <div id="select-filters" className="flex mt-12 mx-14 gap-16">
          <div id="minPrice-selector">
            <p className="text-gray-300">Min. Price</p>
            <Select
              name="MinPrice"
              options={MinPrice}
              onChange={handleFilterChange}
            />
          </div>
          <div id="maxPrice-selector">
            <p className="text-gray-300">Max. Price</p>
            <Select
              name="MaxPrice"
              options={MaxPrice}
              onChange={handleFilterChange}
            />
          </div>
          <div id="Rating-Selector">
            <p className="text-gray-300">Rating</p>
            <Select
              name="Rating"
              options={Rating}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <div id="Sort-by&Show container" className="flex mt-12 mx-14 gap-16">
          <div>
            <p className="text-gray-300">Sort By</p>
            <Select
              name="SortBy"
              options={SortBy}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <p className="text-gray-300">Show</p>
            <Select
              name="ShowMax"
              options={ShowMax}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="selected-filters mt-8 mx-14">
        {selectedFilters.map((filter) => (
          <div key={filter.name} className="flex items-center gap-2 mb-2">
            <p className="text-gray-500">
              {filter.name}: {filter.value.label}
            </p>
            <button
              className="text-red-500"
              onClick={() => handleRemoveFilter(filter.name)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Vegetables };
