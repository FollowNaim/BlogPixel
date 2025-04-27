import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="border-b">
      <div className="container px-4 py-2 mx-auto flex justify-between items-center">
        <div>
          <h2 className="font-bold text-2xl font-cursive">Blog Pixel.</h2>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <Link to={"/signin"}>
            <Button className={"cursor-pointer"}>Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
