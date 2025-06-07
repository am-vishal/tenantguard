import { JSX, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
    const [countdown, setCountdown] = useState(5);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        const isAdmin = localStorage.getItem('tenantguard_admin') === 'true';
        setIsAllowed(isAdmin);

        if (!isAdmin) {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setShouldRedirect(true);
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    }, []);

    if (isAllowed === null) return null; // loader could be shown

    if (shouldRedirect) return <Navigate to="/" />;

    return isAllowed ? (
        children
    ) : (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md text-center shadow-xl">
                <h2 className="text-lg font-semibold text-red-600 mb-3">Unauthorized Access</h2>
                <p className="text-gray-800">
                    ⚠️ You're not a logged-in admin user.
                </p>
                <p className="mt-2 text-sm text-gray-500 italic">
                    Redirecting to homepage in <span className="font-bold">{countdown}</span> seconds...
                </p>
            </div>
        </div>
    );
};

export default ProtectedRoute;
