
import { getNews } from "@/lib/data";
import Map from "@/components/Map/Map";
import NewsList from "@/components/NewsList/NewsList";
import CardsNavigation from "@/components/CardsNavigation/CardsNavigation";

const Page = async () => {
  const newsData = await getNews(); // Fetch data on the server
  
  return (
    <div className="flex justify-center mx-10 flex-col my-10">
      <CardsNavigation/>
      <h2 className="text-2xl font-bold my-6">News</h2>
      <NewsList newsData={newsData?.results || []} />

      <div className="mt-10">
        <Map apiKey={process.env.IP_INFO_TOKEN} />
      </div>
    </div>
  );
};

export default Page;
