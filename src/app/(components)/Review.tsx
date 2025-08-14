"use client";

import React, { useState } from "react";
import ButtonClick from "./ButtonClick";

type ReviewType = {
  id: string;
  review: string;
};

type ReviewProps = {
  reviews: ReviewType[];
};

const Review = ({ reviews }: ReviewProps) => {
  const [index, setIndex] = useState(0);

  const hasReviews = reviews.length > 0;

  function onPost() {
    if (!onCopy()) return;
    window.open("https://g.page/r/CWshVq7I_6JLEBM/review", "_blank");
  }

  function onCopy() {
    const reviewText = reviews[index]?.review;
    if (!reviewText) return false;
    navigator.clipboard.writeText(reviewText);
    return true;
  }

  return (
    <div className="flex flex-col items-center p-6 space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-4 w-full">
        <ButtonClick
          onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          disabled={!hasReviews || index === 0}
        >
          Previous
        </ButtonClick>

        {hasReviews && (
          <div className="flex items-center gap-2 bg-blue-800 text-white rounded-lg px-4 py-2 shadow-md">
            <label htmlFor="reviewSelect" className="font-semibold">
              Review
            </label>
            <select
              id="reviewSelect"
              value={index + 1}
              onChange={(e) => setIndex(Number(e.target.value) - 1)}
              className="bg-transparent text-white font-medium px-2 py-1 focus:outline-none"
            >
              {Array.from({ length: reviews.length }, (_, i) => i + 1).map(
                (num) => (
                  <option
                    key={num}
                    value={num}
                    className="text-blue-900 bg-white"
                  >
                    {num}
                  </option>
                )
              )}
            </select>
          </div>
        )}

        <ButtonClick
          onClick={() =>
            setIndex((prev) => Math.min(reviews.length - 1, prev + 1))
          }
          disabled={!hasReviews || index === reviews.length - 1}
        >
          Next
        </ButtonClick>
      </div>

      <div className="w-full">
        <textarea
          className="w-full h-40 p-4 text-base text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm resize-none"
          value={reviews[index]?.review ?? "No Review available"}
          readOnly
        />
      </div>

      <div className="flex gap-4">
        <ButtonClick onClick={onCopy} disabled={!hasReviews}>
          Copy Review
        </ButtonClick>
        <ButtonClick onClick={onPost} disabled={!hasReviews}>
          Post Review
        </ButtonClick>
      </div>
    </div>
  );
};

export default Review;
