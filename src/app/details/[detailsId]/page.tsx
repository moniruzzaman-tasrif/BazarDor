import PriceList from '@/component/priceList';
import { convertToBanglaNumber } from '@/formatNumber';
import { IProductType } from '@/type';
import Link from 'next/link';
import React from 'react';

const DetailsPage = async ({ params }: { params: Promise<{ detailsId:string}> }) => {
  const { detailsId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${detailsId}`,
  );
  const data:IProductType = await res.json()

  console.log(data);

  return (
    <div className="bg-[#F0F5F0] pb-10">
      <div className="max-w-7xl mx-auto px-4 py-6 font-bengoli space-y-10 ">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-800">
            হোম
          </Link>
          <span>›</span>
          <Link
            href={`/category/${data.category}`}
            className="hover:text-gray-800"
          >
            {data.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="text-gray-800 font-medium">{data.nameBn}</span>
        </nav>

        {/* Main Product Card */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Icon, Title, and Description */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl shadow-inner flex-shrink-0">
              {data.image}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{data.nameBn}</h1>
              <p className="text-xs text-gray-400 mt-0.5">
                প্রতি কেজি · {data.categoryNameBn}
              </p>
              <p className="text-[1rem] text-black mt-2 font-medium">
                {`      গতকালের তুলনায় আজ দাম বেড়েছে .
                ${convertToBanglaNumber(data.today - data.yesterday)} টাকা`}
              </p>
            </div>
          </div>

          {/* Right: Price Box */}
          <div className="bg-gray-50/70 border border-gray-100 rounded-2xl px-6 py-4 text-center min-w-35 flex flex-col items-center justify-center">
            <span className="text-xs text-gray-400 block mb-1">আজকের দাম</span>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              {convertToBanglaNumber(data.today)}
            </span>
            <span className="text-[11px] text-gray-400 mt-0.5">
              টাকা / কেজি
            </span>
            <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full text-xs font-semibold mt-2">
              <span>▲</span>
              <span>{convertToBanglaNumber(data.change.pct)}</span>
            </div>
          </div>
        </div>
      </div>
      <PriceList data={data}></PriceList>
    </div>
  );
};

export default DetailsPage;
