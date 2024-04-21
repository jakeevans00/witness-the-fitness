import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="h-dvh w-full flex">
      <Sidebar />
      <div className="w-full bg-gray-100">
        <Header />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
