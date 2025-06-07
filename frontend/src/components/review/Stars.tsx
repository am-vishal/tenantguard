import { FC } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarsProps {
    rating: number; // e.g., 4.5
    size?: number;
    color?: string;
}

const Stars: FC<StarsProps> = ({ rating, size = 20, color = '#FFD700' }) => {
    const full = Math.floor(rating);
    const decimal = rating - full;
    const hasHalf = decimal >= 0.25 && decimal < 0.75;
    const fullStars = decimal >= 0.75 ? full + 1 : full;
    const halfStars = hasHalf ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="flex items-center space-x-1">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} size={size} color={color} />
            ))}
            {hasHalf && <FaStarHalfAlt key="half" size={size} color={color} />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} size={size} color={color} />
            ))}
        </div>
    );
};

export default Stars;
