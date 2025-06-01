import React from 'react';

interface LoaderProps {
    isAnimationLoader?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isAnimationLoader = false }) => {
    return isAnimationLoader ? (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-white"></div>
        </div>
    ) : (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-blue-600 font-semibold">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;
