import { convertToBanglaNumber } from '@/formatNumber';
import { IProductType } from '@/type';
import Link from 'next/link';
import React from 'react';
import Marquee from "react-fast-marquee";



const MarquePage = async() => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data = await res.json()

  return (
    <div className="bg-[#FAFCFA]   py-3 shadow-sm">
      <Marquee speed={100}>
        {data.map((item: IProductType) => (
          <Link
            key={item.id}
            href={`/details/${item.category} `}
            className="flex gap-1 mr-5"
          >
            <span>{item.image}</span>
            <h1 className="">{item.nameBn}</h1>
            <p>{convertToBanglaNumber(item.lastWeek)} টাকা/কেজি</p>
            <p
              className={`${item.change.dir === "up" ? "text-red-600" : "text-green-600"}`}
            >
              {" "}
              {item.change.dir === "up" ? "▲" : "▼"}{" "}
              {convertToBanglaNumber(item.change.pct)}
              {" %"}
            </p>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default MarquePage;
