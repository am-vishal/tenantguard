import { useState, useEffect } from 'react';
import Loader from '../components/Loader';  // Adjust path as needed

const VerifyTenant = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API loading or redirect delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // 2.5 seconds loader for demo

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold text-center max-w-4xl leading-tight">
                Coming Soon! <br />
                Stay tuned for TenantGuard’s Tenant Verification feature.
            </h1>
        </div>
    );
};

export default VerifyTenant;
