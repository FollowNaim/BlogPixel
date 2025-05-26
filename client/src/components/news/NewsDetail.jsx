import EditPost from "@/pages/EditPost";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function NewsDetail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNews();
  }, [id]);
  const fetchNews = async () => {
    const res = await axios.get(`http://localhost:5000/news/${id}`);
    setNews(res.data);
    setLoading(false);
  };
  const editPost = () => {};
  return (
    <div>
      {loading && (
        <div className="grid place-content-center">
          <p>Loading...</p>
        </div>
      )}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div>
          <h2>{news.title}</h2>
        </div>
        <div>
          <figure>
            <img
              className="w-full h-96 object-top rounded-md object-cover"
              src={news.image}
              alt=""
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              {news.shortDescription}
            </figcaption>
          </figure>
        </div>
        <div>
          <p className="mt-6 text-base">{news.description}</p>
        </div>
        <div>
          <EditPost id={id} />
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
