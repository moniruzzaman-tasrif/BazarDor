import Link from "next/link";
import { FaChevronDown, FaThLarge } from "react-icons/fa";

interface iDataLink {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}

const NavLinkPage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const data = await res.json();

  return (
    <div className="bg-[#FAFCFA] py-2 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 📱 Mobile & Tablet View: DaisyUI Dropdown */}
        <div className="md:hidden flex justify-between items-center">
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center justify-between w-full bg-white hover:bg-gray-50 border border-gray-200 py-2 px-4 rounded-xl text-sm font-medium text-gray-700 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <FaThLarge className="text-emerald-600" />
                <span>ক্যাটাগরি সমূহ</span>
              </div>
              <FaChevronDown className="w-3 h-3 text-gray-500" />
            </div>

            {/* Dropdown Options List */}
            <ul
              tabIndex={0}
              className="dropdown-content z-[2] menu p-2 shadow-lg bg-white rounded-2xl w-full mt-1.5 border border-gray-100 max-h-64 overflow-y-auto space-y-1"
            >
              {data.map((item: iDataLink) => (
                <li key={item.id}>
                  <Link
                    href={`/category/${item.slug}`}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl font-medium"
                  >
                    <span>{item.icon}</span>
                    <p>{item.nameBn}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 💻 Desktop View: Horizontal Bar */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap">
          {data.map((item: iDataLink) => (
            <Link
              key={item.id}
              href={`/category/${item.slug}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-gray-100 transition-colors shrink-0 text-sm font-medium text-gray-700"
            >
              <span>{item.icon}</span>
              <p>{item.nameBn}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLinkPage;
