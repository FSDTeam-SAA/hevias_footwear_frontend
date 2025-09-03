// components/RatingStars.tsx
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 mb-2">
      {[0, 1, 2, 3, 4].map((i) => {
        const isFull = i + 1 <= Math.floor(rating);
        const isHalf = !isFull && i < rating;

        return (
          <div key={i} className="relative w-5 h-5">
            {/* Empty Star */}
            <Star className="w-5 h-5 text-gray-300" />

            {/* Full Star */}
            {isFull && (
              <Star className="absolute top-0 left-0 w-5 h-5 fill-yellow-500 text-yellow-500" />
            )}

            {/* Half Star */}
            {isHalf && (
              <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              </div>
            )}
          </div>
        );
      })}
      <span className="text-sm text-gray-600 ml-2">{rating.toFixed(1)} </span>
    </div>
  );
};

export default RatingStars;
