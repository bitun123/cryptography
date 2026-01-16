import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [USerPass, setUSerPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setuserName("");
    setuserEmail("");
    setUSerPass("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h2 className="text-white text-2xl mb-6">Register</h2>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            placeholder="Name"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />

          <input
            placeholder="Email"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
            value={USerPass}
            onChange={(e) => {
              setUSerPass(e.target.value);
            }}
          />

          <button className="w-full bg-blue-600 py-2 rounded text-white active:bg-blue-700 active:scale-95 cursor-pointer transition-all duration-200">
            Register
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-sm">
          Already have account?{" "}
          <Link to="/signin" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
