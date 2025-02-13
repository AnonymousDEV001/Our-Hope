"use client";

import { useState } from "react";

const NewsList = ({ newsData }) => {
  return (
    <div className="flex flex-col gap-6">
      {newsData.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className=" p-6 rounded-lg shadow-lg border border-red-900">
      <p className="font-bold">TITLE: <span className="font-normal">{news.title}</span></p>
      <p className="font-bold">CATEGORY: <span className="font-normal">{news.category}</span></p>
      <p className="font-bold">RANK: <span className="font-normal">{news.rank}</span></p>

      <p className="mt-3" dangerouslySetInnerHTML={{
          __html: expanded ? news.description : `${news.description.slice(0, 200)}...`
        }} />

      <div className="mt-4 flex gap-4">
        <button
          onClick={toggleExpand}
          className=" font-medium underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default NewsList;
