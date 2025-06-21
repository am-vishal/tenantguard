import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TenantList from '../components/tenant/TenantList';
import { Tenant } from '../types';
import { generateMockTenants } from '../utils/generateMockTenants';
import Header from '../components/layout/Header';
import useDeviceType from '../hooks/useDeviceType';

const tenants: Tenant[] = generateMockTenants(50);

export const Dashboard: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(tenants[0]?.id ?? null);

    const deviceType = useDeviceType();


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); // or navigate to home
    };

    const onBack = () => {
        navigate(-1); // go back to previous page
    };

    return (
        <div className="flex flex-col bg-gray-50 min-h-screen">
            <Header handleClick={handleClick} onBack={onBack} />
            {/* Content */}
            <main className="flex flex-1 overflow-hidden pt-12">
                {/* Tenant List – Left */}
                <TenantList
                    tenants={tenants}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    deviceType={deviceType}
                />


                {/* Tenant Details - Right */}
                {/* {(deviceType === 'mobile' || deviceType === 'tablet') && showOverlay && (
                    <TenantDetails
                        showOverlay={showOverlay}
                        setShowOverlay={setShowOverlay}
                        tenant={tenants.find((t) => t.id === selectedId) ?? null}
                    />
                )} */}
            </main>
        </div >
    );
};

export default Dashboard;
