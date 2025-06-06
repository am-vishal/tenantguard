import React, { useEffect } from 'react';

interface LoaderProps {
    isAnimationLoader?: boolean;
    isLineLoader?: boolean
}


const Loader: React.FC<LoaderProps> = ({ isAnimationLoader = false, isLineLoader = false }) => {

    useEffect(() => {
        if (!isLineLoader) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'auto';
            };
        }
    }, [isLineLoader]);

    if (isLineLoader) {
        return (
            <div className="inline-block">
                <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-80">
            {isAnimationLoader ? (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                    <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-white"></div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
                    <p className="text-blue-600 font-semibold text-sm md:text-base">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default Loader;