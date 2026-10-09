import { IProductType } from '@/type';
import Link from 'next/link';
import React from 'react';

const PriceDown = ({ data }: { data: IProductType[] }) => {
  const filterData=data.filter(((item:IProductType)=>item.change.dir==="down"))
  const sortData=filterData.sort((a,b)=> a.change.pct-b.change.pct)


  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6 font-bengoli">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-green-600 text-lg">▼</span>
          <h2 className="text-xl font-bold text-gray-900">আজ দাম কমেছে</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortData.slice(0, 6).map(item => (
            <Link key={item.id} href={`/details/${item.id}`}>
              <div
                key={item.id}
                className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl shadow-inner">
                      {item.image}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.nameBn}
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
                      {item.today}
                      <span className=" mr-2"> টাকা</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 bg-red-50 px-2.5 py-1 rounded-full text-xs font-semibold">
                    <span>▼</span>
                    <span>{item.change.pct}%</span>
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

export default PriceDown;
