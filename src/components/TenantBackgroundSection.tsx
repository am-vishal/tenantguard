const TenantBackgroundSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                    Know Your Tenants Before You Rent
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                    TenantGuard provides property owners with verified background insights
                    about prospective tenants. We ensure you know more than just a name
                    before renting.
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Rental History Check</h3>
                        <p className="text-gray-600">
                            We verify if the tenant has a consistent history of paying rent on time
                            and maintaining stable rental durations.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Owner Feedback & Behavior</h3>
                        <p className="text-gray-600">
                            Gain insights from previous landlords on tenant behavior,
                            cooperation, and overall relationship.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Room Condition Reviews</h3>
                        <p className="text-gray-600">
                            Learn how tenants left the rented space — clean and intact or with damages
                            and issues noted by the previous property owner.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Verified Identity & Profile</h3>
                        <p className="text-gray-600">
                            Every tenant profile is verified with ID and reference checks to
                            ensure authenticity and trust.
                        </p>
                    </div>
                </div>

                <p className="mt-10 text-sm text-gray-500 max-w-3xl mx-auto">
                    <strong>Disclaimer:</strong> TenantGuard helps facilitate safe and transparent renting.
                    While we strive to provide accurate background info, we recommend property owners
                    conduct their own due diligence in addition to our service.
                </p>
            </div>
        </section>
    );
};

export default TenantBackgroundSection;