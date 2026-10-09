import CategoryCard from "@/component/categoryCard";
import { convertToBanglaNumber } from "@/formatNumber";
import { IProductType } from "@/type";

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {

  const { categoryId } = await params;
const res = await fetch(
  `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
);
const data= await res.json()


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
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-4 flex items-center justify-end gap-3">
          <span className="text-sm text-gray-500 font-medium">সাজান</span>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-outline border-gray-300 font-normal normal-case rounded-xl bg-white hover:bg-gray-50 text-gray-700 flex items-center gap-2"
            >
              <span>ডিফল্ট</span>
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
              className="dropdown-content z-[1] menu p-2 shadow-md bg-white rounded-box w-36 border border-gray-100 text-sm"
            >
              <li>
                <a>ডিফল্ট</a>
              </li>
              <li>
                <a>কম দাম</a>
              </li>
              <li>
                <a>বেশি দাম</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CategoryCard data={data}></CategoryCard>
    </div>
  );
}
