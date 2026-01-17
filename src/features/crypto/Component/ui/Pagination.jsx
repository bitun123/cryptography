import React from "react";

export default function Pagination({ page, onPrev, onNext, hasMore }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition"
      >
        Previous
      </button>

      <span className="text-white font-medium">
        Page {page}
      </span>

      <button
        onClick={onNext}
        disabled={!hasMore}
        className="px-4 py-2 rounded bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
