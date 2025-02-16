import fs from "fs/promises";
import { Donor, Recipient } from "./models";
import { connectToDb } from "./utils";
import path from "path"

export const getRecipients = async ({
  page = 1,
  limit = 10,
  city,
  bloodGroup,
  exchange,
} = {}) => {
  try {
    await connectToDb();

    // Build the query object based on the provided filters
    const query = {};
    if (city) {
      query.city = city;
    }
    if (bloodGroup) {
      query.bloodGroup = bloodGroup;
    }
    if (exchange) {
      query.exchange = exchange;
    }

    // Calculate the number of documents to skip for pagination
    const skip = (page - 1) * limit;

    // Fetch the donors with pagination and filtering
    const recipientsPromise = Recipient.find(query).skip(skip).limit(limit);
    const countPromise = Recipient.countDocuments(query);

    // Execute both queries in parallel
    const [recipientsData, total] = await Promise.all([
      recipientsPromise,
      countPromise,
    ]);

    // Convert the documents to plain JavaScript objects
    const recipients = JSON.parse(JSON.stringify(recipientsData));

    return {
      recipients,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  } catch (error) {
    console.error("Error fetching donors:", error);
    return {
      recipients: [],
      total: 0,
      page,
      pages: 0,
    };
  }
};
export const getRecipient = async (_id) => {
  try {
    await connectToDb();
    let recipient = await Recipient.findOne({ _id });
    recipient = JSON.parse(JSON.stringify(recipient));
    return recipient;
  } catch (error) {
    console.error("Error fetching donors:", error);
    return {};
  }
};

export const getCountries = async () => {
  try {
    let filePath = path.join(process.cwd(),"src/lib/data/countries.json")
    const data = await fs.readFile(filePath, "utf-8"); // Read file asynchronously
    return JSON.parse(data); // Convert JSON string to JavaScript object
  } catch (error) {
    console.error("Error reading countries.json:", error);
    return []; // Return an empty array or handle error as needed
  }
};

export const getDonors = async ({
  page = 1,
  limit = 10,
  city,
  bloodGroup,
} = {}) => {
  try {
    await connectToDb();

    // Build the query object based on the provided filters
    const query = {};
    if (city) {
      query.city = city;
    }
    if (bloodGroup) {
      query.bloodGroup = bloodGroup;
    }
    // Calculate the number of documents to skip for pagination
    const skip = (page - 1) * limit;

    // Fetch the donors with pagination and filtering
    const donorsPromise = Donor.find(query).skip(skip).limit(limit);
    const countPromise = Donor.countDocuments(query);

    // Execute both queries in parallel
    const [donorsData, total] = await Promise.all([
      donorsPromise,
      countPromise,
    ]);

    // Convert the documents to plain JavaScript objects
    const donors = JSON.parse(JSON.stringify(donorsData));

    return {
      donors,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  } catch (error) {
    console.error("Error fetching donors:", error);
    return {
      donors: [],
      total: 0,
      page,
      pages: 0,
    };
  }
};


export const getNews = async () => {
  try {
    // Get current date
    const today = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(today.getMonth() - 3);

    // Format dates as YYYY-MM-DD
    const formatDate = (date) => date.toISOString().split("T")[0];

    const fromDate = formatDate(threeMonthsAgo);
    const toDate = formatDate(today);

    // // Get user location
    // let locationRes = await fetch(`https://ipinfo.io/json?token=${process.env.IP_INFO_TOKEN}`);
    // let location = await locationRes.json();

    // if (!location.city) throw new Error("Could not retrieve city.");

    // // Get city ID
    // let cityIdRes = await fetch(`https://api.predicthq.com/v1/places/?q=${location.city}`, {
    //   headers: { Authorization: `Bearer ${process.env.PREDICT_HQ_API}` }
    // });
    // let cityIdData = await cityIdRes.json();
    // const cityId = cityIdData?.results?.[0]?.id;
    
    // console.log("City ID:", cityId);

    // Get news for the last 3 months
    let newsRes = await fetch(`https://api.predicthq.com/v1/events/?category=terror,health-warnings,disasters,severe-weather&active.gte=${fromDate}&active.lte=${toDate}&active.tz=Asia/Karachi&rank.gte=40&rank.lte=100&country=PK&limit=3`, {
      headers: { Authorization: `Bearer ${process.env.PREDICT_HQ_API}` }
    });

    let news = await newsRes.json();
    news = await JSON.parse(JSON.stringify(news));
    return news;
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return [];
  }
};

