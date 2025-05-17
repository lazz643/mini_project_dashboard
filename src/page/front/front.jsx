import React, { useState } from "react";
import Login from "../../components/login";
import Regis from "../../components/regis";

function Front() {
  const [menu, setMenu] = useState("login");

  const toggleMenu = () => {
    setMenu((prev) => (prev === "login" ? "regis" : "login"));
  };

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen bg-gray-200">
        <img src="/hero.png" alt="hero" className="w-full h-full object-cover hidden lg:flex" />
      </div>
      <div className="w-full h-screen absolute z-10 top-0 left-0 flex">
        <div className="hidden lg:flex-1 lg:flex"></div>
        <div className="w-full h-screen flex-1 flex flex-row items-center justify-center lg:justify-end lg:px-20">
          <div className="w-full shadow-xl h-full bg-gray-100 flex flex-col gap-5 p-5 justify-center sm:w-[400px] sm:h-[calc(100vh-200px)] sm: rounded-xl">
            <div className="w-full flex justify-between mb-10">
              <button onClick={() => setMenu("login")} className={`w-[45%] py-1 border-2  rounded-2xl  cursor-pointer ${menu === "login" ? "border-gray-300 text-gray-300" : "border-purple-500 text-purple-500"}`}>
                Login
              </button>
              <button onClick={() => setMenu("regis")} className={`w-[45%] py-1 border-2  rounded-2xl  cursor-pointer ${menu === "regis" ? "border-gray-300 text-gray-300" : "border-purple-500 text-purple-500"}`}>
                Register
              </button>
            </div>
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
      </div>
    </div>
  );
}

export default Front;
