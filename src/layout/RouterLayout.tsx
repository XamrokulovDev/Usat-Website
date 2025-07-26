import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RouterLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RouterLayout;