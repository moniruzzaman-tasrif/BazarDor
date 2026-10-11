"use client"
import { IProductType } from '@/type';
import React, { useState } from 'react';
import CategoryCard from './categoryCard';


const CategorySort = ({data}:{data:IProductType[]}) => {
const [sortType, setSortType] = useState<
  "default" | "low-to-high" | "high-to-low"
>("default");
const [sortLabel, setSortLabel] = useState("ডিফল্ট");


const sortedData = [...data].sort((a, b) => {
  if (sortType === "low-to-high") return a.today - b.today;
  if (sortType === "high-to-low") return b.today - a.today;
  return 0;
});
  console.log(sortedData);



const handleSort = (
  type: "default" | "low-to-high" | "high-to-low",
  label: string,
) => {
  setSortType(type);
  setSortLabel(label);
};

  return (
    <div>
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-4 flex items-center justify-end gap-3">
        <span className="text-sm text-gray-500 font-medium">সাজান</span>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-outline border-gray-300 font-normal normal-case rounded-xl bg-white hover:bg-gray-50 text-gray-700 flex items-center gap-2"
          >
            <span>{sortLabel}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-1 menu p-2 shadow-md bg-white rounded-box w-36 border border-gray-100 text-sm"
          >
            <li>
              <button onClick={() => handleSort("default", "ডিফল্ট")}>
                ডিফল্ট
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("low-to-high", "কম দাম")}>
                কম দাম
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("high-to-low", "বেশি দাম")}>
                বেশি দাম
              </button>
            </li>
          </ul>
        </div>
      </div>
      <CategoryCard data={sortedData}></CategoryCard>
    </div>
  );
};

export default CategorySort;
