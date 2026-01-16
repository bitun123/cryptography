import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h2 className="text-white text-2xl mb-6">Login</h2>

        <input
          placeholder="Email"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        />

        <button className="w-full bg-blue-600 py-2 rounded text-white">
          Login
        </button>

        <p className="text-gray-400 mt-4 text-sm">
          No account?{" "}
          <Link to="/signup" className="text-blue-400">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn