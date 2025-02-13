import CardsNavigation from "@/components/CardsNavigation/CardsNavigation";
import Filter from "@/components/Filter/Filter";
import Pagination from "@/components/Pagination/Pagination";
import { getDonors, getCountries } from "@/lib/data";
import Link from "next/link";

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
        <h1 className="text-3xl">Search For Blood Donors</h1>
        <Filter countries={countries} />
        <div>
          <Link
            href={"/donor"}
            className="px-4 py-2 text-white rounded-md bg-red-800"
          >
            Add Donor
          </Link>
        </div>
        <Card city={city} bloodGroup={bloodGroup} browserPage={page} />
      </div>
    </div>
  );
};

export default page;

const Card = async ({ city, bloodGroup, browserPage }) => {
  const { donors, total, pages } = await getDonors({
    page: browserPage,
    limit: 5,
    city,
    bloodGroup,
  });
  return (
    <div className="border p-4 w-full">
      <h2 className="text-2xl text-red-800 font-semibold">Be a Blood Donor</h2>
      <div>
        <ul className="flex flex-col gap-3 my-3">
          {donors?.length === 0 && (
            <p className="font-bold">Oops No Data Found</p>
          )}

          {donors?.map((donor, index) => {
            return (
              <li key={index} className="border-b py-3 flex flex-col gap-2">
                <div>
                  <span className="font-bold">NAME</span> : {donor.name}
                </div>
                <div>
                  <span className="font-bold">BLOOD GROUP</span> :{" "}
                  {donor.bloodGroup}
                </div>
                <div>
                  <span className="font-bold">CITY</span> : {donor.city}
                </div>
                <div>
                  <span className="font-bold">CONTACT</span> :{" "}
                  {donor.phoneNumber}
                </div>
              </li>
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
