const CTASection = ({ onSignUp }: { onSignUp: () => void }) => {
    return (
        <section className="bg-blue-600 text-white text-center px-6 py-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Renting Smarter?</h2>
            <p className="mb-8 max-w-xl mx-auto">
                Join TenantGuard today and discover a simpler, safer, and more transparent way to rent.
            </p>
            <button
                onClick={onSignUp}
                className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-6 rounded-full transition cursor-pointer">
                Sign Up Now
            </button>
        </section>
    );
};

export default CTASection;
