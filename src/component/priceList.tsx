import { convertToBanglaNumber } from "@/formatNumber";
import { IProductType } from "@/type";
import React from "react";

const PriceList = ({ data }: { data: IProductType }) => {
  const maxMap = data.markets.map(item => item.max);
  const minMap = data.markets.map(item => item.min);
  const allPrice = [...maxMap, ...minMap];
  const average =
    allPrice.reduce((acc, items) => acc + items, 0) / allPrice.length;

  const maxPrice = Math.max(...maxMap);
  const minPrice = Math.min(...minMap);

  return (
    <div className="mb-20">
      <div className="max-w-7xl mx-auto px-4 py-6 font-bengoli bg-white shadow-sm rounded-2xl">
        <div className="">
          <div className="space-y-10 mx-10">
            <div className="overflow-hidden">
              <div className="space-y-5">
                <h2 className="text-base font-bold text-gray-900">
                  দামের সারসংক্ষেপ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between">
                    <span className="text-xs text-gray-600 font-medium">
                      সর্বনিম্ন দাম
                    </span>
                    <div className="my-2">
                      <span className="text-2xl font-bold text-emerald-600 tracking-tight">
                        {convertToBanglaNumber(minPrice)}
                      </span>
                      <span className="text-sm font-semibold text-emerald-600 ml-1">
                        টাকা
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      সবচেয়ে কম দামের বাজার
                    </span>
                  </div>

                  {/* Max Price Card */}
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between">
                    <span className="text-xs text-gray-700 font-medium">
                      সর্বাধিক দাম
                    </span>
                    <div className="my-2">
                      <span className="text-2xl font-bold text-rose-600 tracking-tight">
                        {convertToBanglaNumber(maxPrice)}
                      </span>
                      <span className="text-sm font-semibold text-rose-600 ml-1">
                        টাকা
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      সবচেয়ে বেশি দামের বাজার
                    </span>
                  </div>

                  {/* Average Price Card */}
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 flex flex-col justify-between">
                    <span className="text-xs text-gray-700 font-medium">
                      গড় দাম
                    </span>
                    <div className="my-2">
                      <span className="text-2xl font-bold text-emerald-600 tracking-tight">
                        {convertToBanglaNumber(average.toFixed(2))}
                      </span>
                      <span className="text-sm font-semibold text-emerald-600 ml-1">
                        টাকা
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      প্রতি কেজি-এর হিসাবে
                    </span>
                  </div>
                </div>
              </div>

              <h2 className="text-base font-bold text-gray-900 my-7">
                বাজারভিত্তিক আজকের দাম
              </h2>


              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="table w-full text-sm">

                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-normal">
                        <th className="bg-transparent py-4 px-6 text-left">
                          বাজার
                        </th>
                        <th className="bg-transparent py-4 px-6 text-left">
                          বিভাগ
                        </th>
                        <th className="bg-transparent py-4 px-6 text-left">
                          সর্বনিম্ন
                        </th>
                        <th className="bg-transparent py-4 px-6 text-left">
                          সর্বাধিক
                        </th>
                        <th className="bg-transparent py-4 px-6 text-left">
                          গড়
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 text-gray-800">
                      {data.markets.map((item, index) => (
                        <tr
                          key={index}
                          className="even:bg-[#F0F5F0] transition-colors"
                        >
                          <td className="py-4 px-6 font-medium text-gray-900">
                            {item.market}
                          </td>
                          <td className="py-4 px-6 text-gray-800">
                            {item.division}
                          </td>
                          <td className="py-4 px-6 text-black">
                            {convertToBanglaNumber(item.min)} টাকা
                          </td>
                          <td className="py-4 px-6 text-black">
                            {convertToBanglaNumber(item.max)} টাকা
                          </td>
                          <td className="py-4 px-6 text-black font-semibold">
                            {convertToBanglaNumber(
                              ((item.max + item.min) / 2).toFixed(1),
                            )}{" "}
                            টাকা
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
