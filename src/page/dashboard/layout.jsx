import React from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex w-full min-h-screen">
      {/* partisi sidebar */}
      <div className="flex-[1] p-2">
        <Sidebar />
      </div>

      {/* partisi nabar dan konten web */}
      <div className="flex-[4] px-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
