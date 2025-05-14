import React, { useState } from "react";
import Login from "../../components/login";
import Regis from "../../components/regis";

function Front() {
  const [menu, setMenu] = useState("login");

  const toggleMenu = () => {
    setMenu((prev) => (prev === "login" ? "regis" : "login"));
  };

  return (
    <div className="w-full h-screen bg-gray-200 flex flex-row items-center justify-center">
      <div className="w-full h-full bg-white flex flex-col gap-5 p-5 justify-center sm:w-[500px] sm:h-[calc(100vh-200px)] sm: rounded-xl">
        {menu === "login" ? <Login /> : <Regis menu={toggleMenu} />}
        {menu === "login" ? (
          <p className="text-center">
            Don't have an account?{" "}
            <span className="text-blue-500 underline cursor-pointer" onClick={toggleMenu}>
              Register
            </span>
          </p>
        ) : (
          <p className="text-center">
            Already have an account?{" "}
            <span className="text-blue-500 underline cursor-pointer" onClick={toggleMenu}>
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Front;
