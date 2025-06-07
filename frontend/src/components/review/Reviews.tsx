import ReviewCard from './ReviewCard';

const reviews = [
    { name: 'Amit Sharma', feedback: 'Smooth renting experience.', rating: 4.5 },
    { name: 'Priya Verma', feedback: 'Tenant was respectful and clean.', rating: 3.75 },
    { name: 'Rohan Joshi', feedback: 'Rent was delayed twice.', rating: 2.25 },
];

const ReviewsPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Tenant Reviews</h1>
            {reviews.map((r, i) => (
                <ReviewCard key={i} review={r} />
            ))}
        </div>
    );
};

export default ReviewsPage;
