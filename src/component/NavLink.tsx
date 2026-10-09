

import Link from "next/link";

interface iDataLink {
  icon: string;
  id: string;
  nameBn: string;
  slug: string;
}
const NavLinkPage = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();

  return (
    <div className=" bg-[#FAFCFA] py-2 border-b border-gray-300  ">
      <div className=" max-w-7xl mx-auto flex  gap-6">
        {data.map((item: iDataLink) => (
          <Link key={item.id} href={`/category/${item.slug}`}>
            <div className=" flex gap-1 ">
              <span> {item.icon}</span>
              <p>{item.nameBn}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinkPage;
