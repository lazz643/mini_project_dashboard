import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [dataLogin, setDataLogin] = useState({ email: "", pass: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isDisable = !dataLogin.email || !dataLogin.pass;

  const handleLogin = async () => {
    const payload = {
      email: dataLogin.email,
      password: dataLogin.pass,
    };

    try {
      const response = await axios.post("https://reqres.in/api/login", payload, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      setSuccess("Login success");
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.log(err.response);
      setError(err.response?.data?.error || "Login gagal");
    }
  };

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <div className="flex flex-col">
        <label htmlFor="inputEmail">Email</label>
        <input type="text" placeholder="email" name="email" id="inputEmail" onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })} value={dataLogin.email} required className="p-1 border-1 rounded-md border-gray-300" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="inputPass">Password</label>
        <input type="password" placeholder="password" name="pass" id="inputPass" onChange={(e) => setDataLogin({ ...dataLogin, pass: e.target.value })} value={dataLogin.pass} required className="p-1 border-1 rounded-md border-gray-300" />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button type="submit" disabled={isDisable} className={`rounded-sm p-1 text-white cursor-pointer  mt-8 ${isDisable ? "bg-gray-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-400"}`}>
        Login
      </button>
    </form>
  );
}

export default Login;
