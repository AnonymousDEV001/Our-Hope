import React from "react";
import { getCountries } from "@/lib/data";
import RecipientForm from "@/components/Forms/RecipientForm/RecipientForm";

const page = async () => {
  const countries = await getCountries();
  return (
    <div className="flex justify-center items-center gap-20 text-sm">
      <img src="/banner.png" className="h-full" alt="" />
      <div className="w-[30%] py-12">
        <RecipientForm countries={countries}/>
      </div>
    </div>
  );
};

export default page;