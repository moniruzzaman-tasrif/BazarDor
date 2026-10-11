
import CategoryCard from "@/component/categoryCard";
import CategorySort from "@/component/CategorySort";
import { convertToBanglaNumber } from "@/formatNumber";
import { IProductType } from "@/type";
import { IconBaseProps } from "react-icons";


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {


  const { categoryId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();
  return (
    <div className=" bg-[#F0F5F0] pb-10">
      <div className="max-w-7xl mx-auto  py-6 font-bengoli space-y-4">
        {/* Top Banner Card */}
        {data.slice(0, 1).map((item: IProductType) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-3xl shadow-inner">
              {item.categoryIcon}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {item.categoryNameBn}
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">{`${convertToBanglaNumber(data.length)} টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
            </div>
          </div>
        ))}
        {/* Filter / Sort Bar */}

          <CategorySort data={data}></CategorySort>

      </div>

    </div>
  );
}
