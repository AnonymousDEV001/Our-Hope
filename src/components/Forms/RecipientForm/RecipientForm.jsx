"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { handleRecipient } from "@/lib/actions";

const RecipientForm = ({ countries }) => {
  const [exchangeToggle, setExchangeToggle] = useState(false);
  const [state, formAction] = useActionState(handleRecipient, undefined);


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
      setExchangeToggle(false)
    }, [state]);


  return (
    <form
    ref={formRef}
      action={formAction}
      className="h-full flex flex-col px-5 py-8 border border-black gap-8 shadow-[10px_10px_#FF8282]"
    >
      <h5 className="text-3xl font-semibold">Request Blood</h5>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name *</label>
        <input
          className="bg-gray-100 rounded-md py-2 px-2 text-sm"
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email *</label>
        <input
          className="bg-gray-100 rounded-md py-2 px-2 text-sm"
          type="email"
          id="email"
          name="email"
        />

        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col gap-2">
            <label htmlFor="city">City *</label>
            <select
              className="bg-gray-100 rounded-md py-2 px-2 text-sm w-full "
              name="city"
              id="city"
              defaultValue="select"
            >
              <option value="select" disabled>
                Select Your City
              </option>
              {countries.countries.map((country) =>
                country.provinces.map((province) => (
                  <optgroup key={province.name} label={province.name}>
                    {province.districts.map((district) => (
                      <React.Fragment key={district.name}>
                        <option value="none" disabled>
                          --- {district.name} ---
                        </option>
                        {district.cities.map((city) => (
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
            <label htmlFor="blood-group">Blood Group *</label>
            <select
              className="bg-gray-100 rounded-md py-2 px-2 text-sm w-full "
              id="blood-group"
              name="bloodGroup"
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
        <div className="flex gap-2 flex-col ">
          <label htmlFor="ph">Phone Number *</label>
          <input
            className="bg-gray-100 rounded-md py-2 px-2 text-sm w-full"
            type="text"
            id="ph"
            name="ph"
          />
        </div>
        <div className="flex gap-2 flex-col ">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            className="bg-gray-100 rounded-md py-2 px-2 text-sm w-full min-h-20"
          ></textarea>
        </div>
        <div className="flex gap-2 flex-col ">
          <label htmlFor="documents">Upload Your Documents</label>
          <input id="documents" name="documents" type="file" multiple />
        </div>
        <div className="flex  items-center gap-2">
          <input
            onClick={(e) => {
              setExchangeToggle(e.target.checked);
            }}
            className="h-12 w-12"
            type="checkbox"
            id="exchange-blood"
            name="exchangeBlood"
            value={exchangeToggle}
          />
          <label htmlFor="exchange-blood">
            Exchange Blood? ( only select if you want to exchange blood with
            other recipient families)
          </label>
        </div>
        {exchangeToggle ? (
          <div>
            <p>Select Blood Types You Can Provide</p>
            <div className="flex gap-2 flex-wrap">
              <input
                name="bloodTypes"
                value={"A+"}
                id="provide-A-plus"
                type="checkbox"
              />
              <label htmlFor="provide-A-plus"> A+</label>
              <input
                name="bloodTypes"
                value={"A-"}
                id="provide-A-minus"
                type="checkbox"
              />
              <label htmlFor="provide-A-minus"> A-</label>
              <input
                name="bloodTypes"
                value={"B+"}
                id="provide-B-plus"
                type="checkbox"
              />
              <label htmlFor="provide-B-plus"> B+</label>
              <input
                name="bloodTypes"
                value={"B-"}
                id="provide-B-minus"
                type="checkbox"
              />
              <label htmlFor="provide-B-minus"> B-</label>
              <input
                name="bloodTypes"
                value={"O+"}
                id="provide-O-plus"
                type="checkbox"
              />
              <label htmlFor="provide-O-plus"> O+</label>
              <input
                name="bloodTypes"
                value={"O-"}
                id="provide-O-minus"
                type="checkbox"
              />
              <label htmlFor="provide-O-minus"> O-</label>
              <input
                name="bloodTypes"
                value={"AB+"}
                id="provide-AB-plus"
                type="checkbox"
              />
              <label htmlFor="provide-AB-plus"> AB+</label>
              <input
                name="bloodTypes"
                value={"AB-"}
                id="provide-AB-minus"
                type="checkbox"
              />
              <label htmlFor="provide-AB-minus"> AB-</label>
            </div>
            <p>Select Blood Types You Need</p>
            <div className="flex gap-2 flex-wrap">
              <input value={"A+"} name="bloodNeed" id="need-A-plus" type="radio" />
              <label htmlFor="need-A-plus"> A+</label>
              <input value={"A-"} name="bloodNeed" id="need-A-minus" type="radio" />
              <label htmlFor="need-A-minus"> A-</label>
              <input value={"B+"} name="bloodNeed" id="need-B-plus" type="radio" />
              <label htmlFor="need-B-plus"> B+</label>
              <input value={"B-"} name="bloodNeed" id="need-B-minus" type="radio" />
              <label htmlFor="need-B-minus"> B-</label>
              <input value={"O+"} name="bloodNeed" id="need-O-plus" type="radio" />
              <label htmlFor="need-O-plus"> O+</label>
              <input value={"O-"} name="bloodNeed" id="need-O-minus" type="radio" />
              <label htmlFor="need-O-minus"> O-</label>
              <input value={"AB+"} name="bloodNeed" id="need-AB-plus" type="radio" />
              <label htmlFor="need-AB-plus"> AB+</label>
              <input value={"AB-"} name="bloodNeed" id="need-AB-minus" type="radio" />
              <label htmlFor="need-AB-minus"> AB-</label>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-between flex-col">
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
          <span>Want to Donate?</span>
          <Link href={"/donor"}>
            <span className="border-b border-black">Donate</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RecipientForm;
