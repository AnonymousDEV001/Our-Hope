import React from "react";
import { getCountries } from "@/lib/data";
import DonorForm from "@/components/Forms/DonorForm/DonorForm";
const page = async () => {
    const countries = await getCountries();
  return (
    <div className="flex justify-center items-center gap-20 text-sm m-8">
      <img src="/banner.png" className="h-full" alt="" />
      <div className="w-full  md:w-[30%] py-12">
        <DonorForm countries={countries}/>
      </div>
    </div>
  );
};

export default page;
