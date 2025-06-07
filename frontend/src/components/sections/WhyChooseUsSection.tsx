const WhyChooseUsSection = () => {
    return (
        <section className="bg-white px-6 py-16">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
                Why Choose TenantGuard?
            </h2>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
                <div className="bg-blue-100 p-6 rounded-2xl shadow">
                    <h4 className="font-semibold text-lg mb-2">Verified Listings Only</h4>
                    <p className="text-gray-700">We thoroughly vet every listing before it goes live.</p>
                </div>
                <div className="bg-green-100 p-6 rounded-2xl shadow">
                    <h4 className="font-semibold text-lg mb-2">24/7 Support</h4>
                    <p className="text-gray-700">Our support team is always available to help you.</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded-2xl shadow">
                    <h4 className="font-semibold text-lg mb-2">Affordable Options</h4>
                    <p className="text-gray-700">We offer rentals to fit every budget and need.</p>
                </div>
                <div className="bg-pink-100 p-6 rounded-2xl shadow">
                    <h4 className="font-semibold text-lg mb-2">Transparent Reviews</h4>
                    <p className="text-gray-700">Honest feedback from past tenants and landlords.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
