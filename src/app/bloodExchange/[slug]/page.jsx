import ImagePreviewer from "@/components/ImagePreviewer/ImagePreviewer";
import { getRecipient } from "@/lib/data";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  const recipient = await getRecipient(slug);
  return (
    <div className="m-8 flex  md:flex-nowrap flex-wrap gap-8">
      <div className="w-full md:w-[60%]">
        <h2 className="text-3xl">
          <span className="font-semibold">{recipient?.bloodGroup}</span> Blood
          Request From <i>{recipient?.city}</i>
        </h2>
        <div className="my-6">
          <p>Name : {recipient?.name}</p>
          <p>Blood Group : {recipient?.bloodGroup}</p>
          <p>City : {recipient?.city}</p>
          <p>Contact No : {recipient?.phoneNumber}</p>
          <p>Email : {recipient?.email}</p>
          <p>Request Date : {recipient?.createdAt}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Message</h3>
          <p>{recipient.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Blood Exchange</h3>
          <div>
            <span className="font-bold">
              Needs :{" "}
              <span className="group-hover:!text-white">{recipient.needs}</span>
            </span>
          </div>
          <div>
            <div className="font-bold flex gap-2">
              Provides :
              {recipient?.provides?.map((bloodType, index) => {
                return (
                  <div key={index} className="group-hover:!text-white">
                    {" "}
                    {bloodType}{" "}
                    {recipient?.provides?.length !== index + 1 && (
                      <span>,</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40%] flex flex-col gap-2">
        <h3 className="text-2xl">Documents</h3>
        <ImagePreviewer images={recipient.documents} />
      </div>
    </div>
  );
};

export default page;
