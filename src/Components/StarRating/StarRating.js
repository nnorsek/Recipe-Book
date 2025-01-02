import React, { useEffect, useState } from "react";
import "./StarRating.module.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ idMeal }) {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const savedRating = localStorage.getItem(`starRating_${idMeal}`);
    if (savedRating) {
      setRating(parseInt(savedRating, 10));
    }
  }, [idMeal]);

  const handleRating = (currentRate) => {
    setRating(currentRate);
    localStorage.setItem(`starRating_${idMeal}`, currentRate);
  };

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name={`rate_${idMeal}`}
                value={currentRate}
                onClick={() => handleRating(currentRate)}
              />

              <FaStar color={currentRate <= rating ? "yellow" : "grey"} />
            </label>
          </>
        );
      })}
    </>
  );
}
