

export default function Footer() {
  return (
    <div className=" border-t-2 border-gray-200">
      <div className=" px-4 py-6 font-bengoli border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-gray-600 max-w-7xl mx-auto">
          {/* Left side title / description */}
          <div className="font-medium text-gray-800">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </div>

          {/* Right side disclaimer note */}
          <div className="font-medium text-gray-800">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </div>
        </div>
      </div>
    </div>
  );
}
