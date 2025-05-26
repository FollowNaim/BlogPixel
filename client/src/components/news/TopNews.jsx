import { Link } from "react-router-dom";
import { Button } from "../ui/button";
function TopNews({ title, image, shortDescription, id }) {
  return (
    <div className="">
      <div>
        <img
          className="rounded-md w-full h-56 object-cover"
          src={image}
          alt=""
        />
      </div>
      <div
        className="mt-4
      "
      >
        <h2 className="text-2xl font-medium">{title}</h2>

        <p className="line-clamp-4 mt-3">{shortDescription}</p>
      </div>
      <div className="mt-6">
        <Link to={`/news/${id}`}>
          <Button className={"cursor-pointer"}>Read More</Button>
        </Link>
      </div>
    </div>
  );
}

export default TopNews;
