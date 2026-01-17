import React from "react";

export default function ErrorState({ message = "Something went wrong", onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center bg-red-900/20 border border-red-700 rounded-lg p-8 mt-10">
      <p className="text-red-400 text-lg mb-4">
        ⚠ {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
}
