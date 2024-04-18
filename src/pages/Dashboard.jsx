import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="bg-gray-100 h-full p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
