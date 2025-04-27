import { Button } from "../ui/button";

function Header() {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="font-black font-cursive">Blog Pixel.</h2>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
