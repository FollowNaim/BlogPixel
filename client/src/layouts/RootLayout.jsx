import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";

function RootLayout() {
  return (
    <div className="font-lato">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
