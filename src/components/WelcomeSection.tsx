import { useNavigate } from 'react-router-dom';

const WelcomeSection = () => {
    const navigate = useNavigate();

    return (
        <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100 shadow-inner">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-blue-800 mb-4">
                    Welcome to TenantGuard
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    Click below to verify your tenant details and get a safer rental experience.
                </p>
                <button
                    onClick={() => navigate('/verify')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition"
                >
                    Verify Your Tenant Details
                </button>
            </div>
        </section>
    );
};

export default WelcomeSection;
