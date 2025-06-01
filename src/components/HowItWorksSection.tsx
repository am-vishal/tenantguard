const HowItWorksSection = () => {
    return (
        <section className="bg-gray-50 px-6 py-16">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                How It Works
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <div className="text-4xl mb-2">🔍</div>
                    <h4 className="text-lg font-semibold mb-1">Search Properties</h4>
                    <p className="text-gray-600">Use filters to explore PGs and apartments in your city.</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">📝</div>
                    <h4 className="text-lg font-semibold mb-1">Apply Online</h4>
                    <p className="text-gray-600">Submit your rental application and documents with ease.</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">🔐</div>
                    <h4 className="text-lg font-semibold mb-1">Move In Securely</h4>
                    <p className="text-gray-600">Enjoy verified rentals and peaceful living with TenantGuard.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
