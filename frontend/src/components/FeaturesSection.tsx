const FeaturesSection = () => {
    return (
        <section id="features" className="bg-white px-6 py-16">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Feature Cards */}
                <div className="bg-blue-50 rounded-3xl p-6 shadow hover:shadow-lg transition text-center">
                    <div className="text-5xl mb-4">🏢</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Property Listings</h3>
                    <p className="text-gray-600">
                        Browse verified PGs and apartments with accurate descriptions and photos.
                    </p>
                </div>
                <div className="bg-green-50 rounded-3xl p-6 shadow hover:shadow-lg transition text-center">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Tenant Verification</h3>
                    <p className="text-gray-600">
                        Ensure trustworthy tenants with thorough background checks and KYC validation.
                    </p>
                </div>
                <div className="bg-purple-50 rounded-3xl p-6 shadow hover:shadow-lg transition text-center">
                    <div className="text-5xl mb-4">⭐</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Tenant Ratings</h3>
                    <p className="text-gray-600">
                        Rate and review tenants and landlords to build a transparent renting community.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
