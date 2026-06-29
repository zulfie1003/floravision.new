import React from "react";
import { FaStar } from "react-icons/fa";
import CardSVG from "../CardSVG/CardSVG";

const ReviewCard = ({ review }) => {
  return (
    <article
      className="
        relative
        w-[430px]
        h-[400px]
        max-w-[360px]
        aspect-[1.15]
        mx-auto
      "
    >
      {/* SVG Background */}
      <CardSVG
        className="
          absolute
          inset-0
         
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          inset-0
          z-10
          px-10
          pt-12
          pb-8
          flex
          flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={review.image}
            alt={review.name}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-white text-[20px] font-semibold leading-none">
              {review.name}
            </h3>

            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={13}
                  className={
                    star <= review.stars
                      ? "text-yellow-400"
                      : "text-white/20"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review */}
        <p className="mt-8 text-[15px] leading-7 text-white/70">
          {review.text}
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;