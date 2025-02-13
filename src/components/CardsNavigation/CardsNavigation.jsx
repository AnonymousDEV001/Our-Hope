"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const CardsNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-2 flex-wrap">
      <Link
        href={"/donors"}
        className={`px-4 py-2 rounded-md ${
          pathname.includes("donor")
            ? "bg-red-800 text-white"
            : "border-red-800 border"
        } `}
      >
        Donors
      </Link>
      <Link
        href={"/recipients"}
        className={`px-4 py-2 rounded-md ${
          pathname.includes("recipient")
            ? "bg-red-800 text-white"
            : "border-red-800 border"
        } `}
      >
        Recipients
      </Link>
      <Link
        href={"/bloodExchange"}
        className={`px-4 py-2 rounded-md ${
          pathname.includes("bloodExchange")
            ? "bg-red-800 text-white"
            : "border-red-800 border"
        } `}
      >
        Blood Exchange
      </Link>
      <Link
        href={"/more"}
        className={`px-4 py-2 rounded-md ${
          pathname.includes("more")
            ? "bg-red-800 text-white"
            : "border-red-800 border"
        } `}
      >
        More
      </Link>
    </div>
  );
};

export default CardsNavigation;
