"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Pagination = ({ browserPage, city, bloodGroup, pages }) => {
  const pathname = usePathname();
  const currentPage = parseInt(browserPage) || 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const baseParams = `bloodGroup=${encodeURIComponent(
    bloodGroup
  )}&city=${encodeURIComponent(city)}`;
  return (
    <div className="flex gap-4">
      {/* Back Button */}
      {currentPage > 1 ? (
        <Link
          href={`${pathname}?${baseParams}&page=${prevPage}`}
          className="px-4 py-2 text-white rounded-md bg-red-800"
        >
          Back
        </Link>
      ) : (
        <span className="px-4 py-2  rounded-md bg-gray-300 cursor-not-allowed">
          Back
        </span>
      )}
      {/* Back Button */}
      {currentPage >= pages ? (
        <span className="px-4 py-2  rounded-md bg-gray-300 cursor-not-allowed">
          Next
        </span>
      ) : (
        <Link
          href={`${pathname}?${baseParams}&page=${nextPage}`}
          className="px-4 py-2 text-white rounded-md bg-red-800"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
