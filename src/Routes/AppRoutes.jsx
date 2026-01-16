import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, Home } from "../AllComponents";


function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/signin" element={<SignIn />} />
<Route path="/signup" element={<SignUp />} />


{/* fallback route */}
<Route path="*" element={<Navigate to="/signup" replace />} />
</Routes>
);
}


export default AppRoutes;