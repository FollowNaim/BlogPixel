import TopNews from "@/components/news/TopNews";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const rs = await axios.get("http://localhost:5000/news");
    setNews(rs.data);
  };
  return (
    <div className="">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-3 gap-6">
          {news.map(({ title, image, shortDescription, newsId }) => (
            <TopNews
              title={title}
              image={image}
              shortDescription={shortDescription}
              id={newsId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
