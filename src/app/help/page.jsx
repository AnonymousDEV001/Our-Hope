"use client";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [selected, setSelected] = useState(0);

  const faqs = [
    {
      question: "How can I request blood?",
      answer:
        "You can search for donors by blood type and location and contact them directly through the platform.",
    },
    {
      question: "Who should I contact for support?",
      answer: "Use the contact page on the website for any issues or queries.",
    },
    {
      question: "How can I register as a donor?",
      answer: "You can sign up by filling out a simple form with your personal and blood type details.",
    },
  ];

  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Your Questions Matter – Because Every Donation Saves a Life.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs?.map((faq, index) => {
            return (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  onClick={() => {
                    setSelected(index);
                  }}
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {" "}
                    {faq.question}{" "}
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400 rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    selected === index ? "block" : "hidden"
                  } px-4 pb-5 sm:px-6 sm:pb-6`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <Link
            href={"/contact"}
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
};

export default page;
