import Stars from './Stars';

interface Review {
    name: string;
    feedback: string;
    rating: number;
}

interface ReviewCardProps {
    review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <Stars rating={review.rating} />
            </div>
            <p className="text-gray-600 italic">“{review.feedback}”</p>
        </div>
    );
};

export default ReviewCard;
