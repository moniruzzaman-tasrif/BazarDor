import { convertToBanglaNumber } from '@/formatNumber';
import { IProductType } from '@/type';
import Link from 'next/link';
import React from 'react';

const CategoryCard = ({ data }: { data : IProductType[]}) => {
  
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <div className="">
          <p className=' mb-4 text-gray-500'>{`মোট ${convertToBanglaNumber(data.length)} টি পণ্য দেখানো হচ্ছে`}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(item => (
            <Link key={item.id} href={`/details/${item.id}`}>
              <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl shadow-inner">
                      {item.image}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.categoryNameBn}
                      </h3>
                      <p className="text-xs text-gray-400">প্রতি কেজি</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between mt-6 pt-4 border-t border-gray-50">
                  <div>
                    <span className="text-xs text-gray-700 block mb-1">
                      আজকের দাম
                    </span>
                    <span className="text-[1rem] font-bold text-gray-900 ">
                      {convertToBanglaNumber(item.lastMonth)}
                      <span className=" mr-2"> টাকা</span>
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-1 ${item.change.dir === "up" ? " text-green-600" : "text-red-600"} bg-red-50 px-2.5 py-1 rounded-full text-xs font-semibold`}
                  >
                    <span> {item.change.dir === "up" ? "▲" : "▼"}</span>
                    <span>{convertToBanglaNumber(item.change.pct)}%</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
