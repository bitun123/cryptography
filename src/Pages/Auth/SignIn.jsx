import React, { use, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authDataContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const { allUserData } = useContext(authDataContext);

  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = allUserData?.find(
      (user) =>
        user.email.trim().toLowerCase() == email.trim().toLowerCase() &&
        user.password == password
    );
    console.log(users);
    if (users) {
      alert("Login Successful");
      Navigate("/mainDashboard");
    } else {
      alert("Invalid email or password");
      Navigate("/signup");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h2 className="text-white text-2xl mb-6">Login</h2>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            placeholder="Email"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button className="w-full bg-blue-600 py-2 rounded text-white">
            Login
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-sm">
          No account?{" "}
          <Link to="/signup" className="text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
