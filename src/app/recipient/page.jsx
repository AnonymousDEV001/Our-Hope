import React from "react";
import { getCountries } from "@/lib/data";
import RecipientForm from "@/components/Forms/RecipientForm/RecipientForm";

const page = async () => {
  const countries = await getCountries();
  return (
    <div className="flex justify-center flex-wrap items-center gap-20 text-sm m-8">
      <img src="/banner.png" className="h-full" alt="" />
      <div className="w-full lg:w-[30%] py-12">
        <RecipientForm countries={countries}/>
      </div>
    </div>
  );
};

export default page;