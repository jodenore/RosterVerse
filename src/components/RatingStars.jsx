import { Star } from "lucide-react";
import "./RatingStars.css";

const RatingStars = ({ rating, size = 14 }) => {
  const roundedStars = Math.round(rating);

  return (
    <span
      className="rating-stars"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < roundedStars;

        return (
          <Star
            key={index}
            size={size}
            className={`rating-star ${isFilled ? "is-filled" : ""}`}
            fill={isFilled ? "currentColor" : "none"}
          />
        );
      })}
    </span>
  );
};
export default RatingStars;
