import { useState, useEffect } from 'react';
import Loader from '../components/Loader';  // Adjust path as needed
import { fetchPing, PingResponse } from '../utils/api';

const VerifyTenant: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetchPing()
            .then((data: PingResponse) => setMessage(data.message))
            .catch(() => setError('Failed to fetch message'));
        setLoading(false);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">TenantGuard Frontend</h1>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <p className="text-red-500 inline-block">{message || 'Loading...'}</p>
                    <p className="text-sm italic text-gray-500">
                        If you see above message, the backend is <span className="font-semibold">connected</span>.
                        If not, the backend may still be starting — please wait while the database connects.😉
                    </p>
                </>
            )}
        </div>
    );
};

export default VerifyTenant;
