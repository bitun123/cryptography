import React, { useContext } from "react";
import { authDataContext } from "../../Context/AuthContext";

export default function Profile() {
  const { allUserData } = useContext(authDataContext);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>

      <div className="bg-[#1e293b] p-6 rounded-xl max-w-md">
        <p><b>Name:</b> {allUserData[0].name}</p>
        <p><b>Email:</b> {allUserData[0].email}</p>
      </div>
    </div>
  );
}
