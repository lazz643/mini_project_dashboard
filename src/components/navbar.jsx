import React from "react";
import Search from "./search";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";

const formatPathName = (str) => {
  if (!str) return "";
  if (!isNaN(str)) return `User ${str}`; // bisa custom lagi kalau mau
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function Navbar() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // hapus string kosong dari root

  return (
    <div className="h-13 bg-purple-500 mt-2 rounded-2xl flex items-center px-3">
      <div className="w-full flex justify-between items-center text-white">
        <div className="flex gap-2">
          <Link to="/dashboard" className="hover:underline font-semibold">
            Dashboard
          </Link>

          {pathnames.slice(1).map((value, index) => {
            const to = `/dashboard/${pathnames.slice(1, index + 2).join("/")}`;
            const isLast = index === pathnames.slice(1).length - 1;

            return (
              <div key={index} className="flex items-center gap-1">
                <GrFormNext className="text-sm" />
                {isLast ? (
                  <span className="font-semibold">{formatPathName(value)}</span>
                ) : (
                  <Link to={to} className="hover:underline">
                    {formatPathName(value)}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 items-center">
          <Search />
          <MdNotifications />
          <MdOutlineChat />
          <MdPublic />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
