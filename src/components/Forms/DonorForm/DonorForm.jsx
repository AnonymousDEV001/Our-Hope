"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { handleDonor } from "@/lib/actions";

const DonorForm = ({ countries }) => {
  const [state, formAction] = useActionState(handleDonor, undefined);
  const [error, setError] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    if (state && state.success) {
      alert(state.message);
      formRef.current.reset();
      setError("");
    } else if (state && !state.success){
      setError(state.error);
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="h-full flex flex-col px-5 py-8 border border-black gap-8 shadow-[10px_10px_#FF8282]"
    >
      <h5 className="text-3xl font-semibold">Donate Blood</h5>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="bg-gray-100 rounded-md py-2 px-2 text-sm"
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="bg-gray-100 rounded-md py-2 px-2 text-sm"
          type="email"
          id="email"
          name="email"
        />

        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col gap-2">
            <label htmlFor="city">City</label>
            <select
              className="bg-gray-100 rounded-md py-2 px-2 text-sm w-full "
              name="city"
              id="city"
              defaultValue="select"
            >
              <option value="select" disabled>
                Select Your City
              </option>
              {countries?.countries?.map((country) =>
                country?.provinces?.map((province) => (
                  <optgroup key={province.name} label={province.name}>
                    {province?.districts?.map((district) => (
                      <React.Fragment key={district.name}>
                        <option value="none" disabled>
                          --- {district.name} ---
                        </option>
                        {district?.cities?.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </React.Fragment>
                    ))}
                  </optgroup>
                ))
              )}
            </select>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              className="bg-gray-100 rounded-md py-2 px-2 text-sm w-full "
              name="bloodGroup"
              id="bloodGroup"
            >
              <option value="none">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="ph">Phone Number</label>
          <input
            className="bg-gray-100 rounded-md py-2 px-2 text-sm w-full"
            type="text"
            id="ph"
            name="ph"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Gender</span>
          <div className="flex gap-5">
            <label htmlFor="male">Male</label>
            <input name="gender" type="radio" value={"male"} id="male" />
            <label htmlFor="female">Female</label>
            <input name="gender" type="radio" value={"female"} id="female" />
          </div>
        </div>
        <div className="flex justify-between  flex-col">
          {error && <p className="text-red-800">Error : {error}</p>}

          <div>
            <input
              type="submit"
              value={"Submit"}
              className="border border-black shadow-[6px_6px_#FF8282] font-semibold rounded-lg text-sm text-black px-8 py-1  my-2"
            />
          </div>
          <span className="text-sm text-blue-500"></span>
        </div>
        <div className="text-sm flex gap-3">
          <span>Need Blood?</span>
          <Link href={"/login"}>
            <span className="border-b border-black">Request</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default DonorForm;
