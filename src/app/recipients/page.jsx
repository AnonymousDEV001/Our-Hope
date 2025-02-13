import { getCountries, getDonors, getRecipients } from "@/lib/data";
import React from "react";

import Filter from "@/components/Filter/Filter";
import CardsNavigation from "@/components/CardsNavigation/CardsNavigation";
import Link from "next/link";
import Pagination from "@/components/Pagination/Pagination";

const page = async ({ searchParams }) => {
  const countries = await getCountries();
  searchParams = await searchParams;
  const city = (await searchParams?.city) || "";
  const page = (await searchParams?.page) || "1";
  const bloodGroup = (await searchParams.bloodGroup) || "";
  return (
    <div className="flex justify-center mx-10 flex-col my-10">
      <CardsNavigation />
      <div className="flex flex-col gap-6 my-6">
        <h1 className="text-3xl">Search For Recipients</h1>
        <Filter countries={countries} />
        <div>        <Link
          href={"/recipient"}
          className="px-4 py-2 text-white rounded-md bg-red-800"
        >
          Add Recipient
        </Link></div>
        <div className="flex items-center gap-4">
          <Card city={city} bloodGroup={bloodGroup} browserPage={page}/>
        </div>
      </div>
    </div>
  );
};

export default page;

const Card = async ({ city, bloodGroup,browserPage }) => {
  const { recipients, total, page, pages } = await getRecipients({
    page: browserPage,
    limit: 5,
    city,
    bloodGroup,
  });
  return (
    <div className="border p-4 w-full">
      <h2 className="text-2xl text-red-800 font-semibold">Request for Blood</h2>
      <div>
        <ul className="flex flex-col gap-3 my-3">
        {recipients.length === 0 && (
            <p className="font-bold">Oops No Data Found</p>
          )}
          {recipients?.map((recipient, index) => {
            return (
              <Link key={index} href={`/recipients/${recipient._id}`}>
                <li className="border-b p-4 py-3 flex flex-col gap-2 hover:bg-red-800 hover:text-white cursor-pointer transition-colors duration-300">
                  <div>
                    <span className="font-bold">NAME</span> : {recipient.name}
                  </div>
                  <div>
                    <span className="font-bold">BLOOD GROUP</span> :{" "}
                    {recipient.bloodGroup}
                  </div>
                  <div>
                    <span className="font-bold">CITY</span> : {recipient.city}
                  </div>
                  <div>
                    <span className="font-bold">CONTACT</span> :{" "}
                    {recipient.phoneNumber}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <Pagination
        city={city}
        bloodGroup={bloodGroup}
        browserPage={browserPage}
        pages={pages}
      />
    </div>
  );
};
