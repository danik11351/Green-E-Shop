import React, { useState } from "react";
import { AboveNavBarLargeScreen, AboveNavBarMobile } from "./AboveNavBar";
import { LargeScreenNavBar } from "./NavBar";
import { GoHome } from "react-icons/go";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import SalesBanner from "../assets/VegtablesPage assets/VegtablesSaleBanner.svg";
import Select, { SingleValue, ActionMeta } from "react-select";

// Define types for the filter options and selected filters
interface FilterOption {
  value: string;
  label: string;
}

interface SelectedFilter {
  name: string;
  value: FilterOption;
}

// Filter options
const MinPrice: FilterOption[] = [
  { value: "0", label: "0" },
  { value: "5", label: "5" },
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "60", label: "60" },
  { value: "120", label: "120" },
];

const MaxPrice: FilterOption[] = [
  { value: "0", label: "0" },
  { value: "5", label: "5" },
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "60", label: "60" },
  { value: "120", label: "120" },
];

const Rating: FilterOption[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const SortBy: FilterOption[] = [
  { value: "LowestPrice", label: "Lowest Price" },
  { value: "HighestPrice", label: "Highest Price" },
];

const ShowMax: FilterOption[] = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
];

function Vegetables() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilter[]>([]);

  const handleFilterChange = (
    selectedOption: SingleValue<FilterOption>,
    actionMeta: ActionMeta<FilterOption>
  ) => {
    const { name } = actionMeta;
    setSelectedFilters((prev) => {
      const updatedFilters = prev.filter((filter) => filter.name !== name);
      if (selectedOption) {
        updatedFilters.push({ name, value: selectedOption });
      }
      return updatedFilters;
    });
  };

  const handleRemoveFilter = (name: string) => {
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
      {selectedFilters.length > 0 && (
        <div className="mt-8 mx-14">
          <h2 className="text-xl mb-2">Active Filters</h2>
          <div className="selected-filters flex flex-row gap-2">
            {selectedFilters.map((filter) => (
              <div
                key={filter.name}
                className="flex items-center gap-2 mb-2 p-2 border border-gray-300 rounded"
              >
                <p className="text-gray-500">
                  {filter.name}: {filter.value.label}
                </p>
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveFilter(filter.name)}
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { Vegetables };
