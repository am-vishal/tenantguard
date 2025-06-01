import React from 'react';
import AuthModal from './AuthModal';

const HeroSection = ({
    isLoggedIn,
    isSignedUp,
    setAuthType,
    setShowAuthModal,
    authType,
    showAuthModal,
}: {
    isLoggedIn: boolean;
    isSignedUp: boolean;
    setAuthType: React.Dispatch<React.SetStateAction<'login' | 'signup'>>;
    setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
    authType: 'login' | 'signup';
    showAuthModal: boolean;
}) => {
    return (
        <header className="bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center text-center px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                Your Trusted PG & Apartment Rental Partner
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
                TenantGuard makes renting easy, safe, and reliable — with tenant verification, ratings, and transparent property listings.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
                {!isSignedUp && !isLoggedIn && (
                    <button
                        className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                        onClick={() => {
                            setAuthType('signup');
                            setShowAuthModal(true);
                        }}
                        aria-label="Sign Up"
                    >
                        Sign Up
                    </button>
                )}
                {!isLoggedIn && (
                    <button
                        className="bg-green-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                        onClick={() => {
                            setAuthType('login');
                            setShowAuthModal(true);
                        }}
                        aria-label="Login"
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Modal Integration */}
            {showAuthModal && (
                <AuthModal
                    type={authType}
                    onClose={() => setShowAuthModal(false)}
                />
            )}
        </header>
    );
};

export default HeroSection;
