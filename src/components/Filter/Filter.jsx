"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Filter = ({ countries }) => {
  const params = useSearchParams();
  const [bloodGroup, setBloodGroup] = useState(
    params.get("bloodGroup") || "select"
  );
  const [city, setCity] = useState(params.get("city") || "select");
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-1/2 flex flex-col gap-2">
          <label htmlFor="blood-group">Blood Group</label>
          <select
            className="bg-gray-100 rounded-md py-4 px-2 text-sm w-full"
            id="blood-group"
            name="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
            <option value="select">Select Blood Group</option>
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
        <div className="w-1/2 flex flex-col gap-2">
          <label htmlFor="city">City</label>
          <select
            className="bg-gray-100 rounded-md py-4 px-2 text-sm w-full"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="select" disabled>
              Select Your City
            </option>
            {countries?.countries?.map((country) =>
              country?.provinces?.map((province) => (
                <optgroup
                  key={`${country.name}-${province.name}`}
                  label={province.name}
                >
                  {province?.districts?.map((district) => (
                    <React.Fragment key={`${province.name}-${district.name}`}>
                      <option
                        key={`${province.name}-${district.name}-label`}
                        value="none"
                        disabled
                      >
                        --- {district.name} ---
                      </option>
                      {district?.cities?.map((cityName) => (
                        <option
                          key={`${province.name}-${district.name}-${cityName}`}
                          value={cityName}
                        >
                          {cityName}
                        </option>
                      ))}
                    </React.Fragment>
                  ))}
                </optgroup>
              ))
            )}
          </select>
        </div>
      </div>
      <div>
        <Link
          href={
            bloodGroup !== "select" && city !== "select"
              ? `?bloodGroup=${encodeURIComponent(
                  bloodGroup
                )}&city=${encodeURIComponent(city)}`
              : ""
          }
          className="px-4 py-2 text-white rounded-md bg-red-800"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Filter;
