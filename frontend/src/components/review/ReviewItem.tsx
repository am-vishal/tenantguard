import { FC } from 'react';
import { Review } from '../../types';

const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);

const ReviewItem: FC<{ review: Review }> = ({ review }) => (
    <div className="border rounded-md p-4 bg-white shadow-sm">
        <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">{review.date}</span>
            <span className="text-yellow-500 font-medium">{stars(review.rating)}</span>
        </div>
        <p className="text-gray-800">{review.comment}</p>
    </div>
);

export default ReviewItem;