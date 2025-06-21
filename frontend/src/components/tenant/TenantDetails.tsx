import { Tenant } from '../../types';
import { FC } from 'react';
import { PaymentTable } from './PaymentTable';
import ReviewItem from '../review/ReviewItem';
import { IoMdClose } from 'react-icons/io';
import { formatTenantName, IsTempDisabled } from '../../utils/common';

interface TenantDetailsProps {
    tenant: Tenant | null;
    deviceIsMobile: boolean;
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const TenantDetails: FC<TenantDetailsProps> = ({ tenant, deviceIsMobile, setShowOverlay }) => {
    if (!tenant) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 bg-gradient-to-br from-blue-50 to-white min-h-screen rounded-2xl shadow-inner px-6">
                {deviceIsMobile &&
                    <button
                        onClick={() => setShowOverlay(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white/60 backdrop-blur-md p-2 rounded-full shadow-md transition-colors z-10"
                    >
                        <IoMdClose size={24} className="pointer-events-none" />
                    </button>
                }
                <svg
                    className="w-16 h-16 mb-4 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25m0 0a3 3 0 10-6 0M15.75 5.25H18a2.25 2.25 0 012.25 2.25v1.5A2.25 2.25 0 0118 11.25h-1.5M8.25 9V5.25m0 0a3 3 0 116 0M8.25 5.25H6a2.25 2.25 0 00-2.25 2.25v1.5A2.25 2.25 0 006 11.25h1.5M3 15.75a4.5 4.5 0 019 0M21 15.75a4.5 4.5 0 00-9 0"
                    />
                </svg>
                <h2 className="text-xl font-bold mb-2">No Tenant Selected</h2>
                <p className="text-center text-sm text-gray-400">Please select a tenant from the left to see details.</p>
            </div>
        );
    }

    const stay = tenant.stays[0];
    const property = stay.property;
    let roomInfo: { number: string; type: string } | null = null;

    // Try to find the exact room from property structure using roomId from first review
    if (stay.reviews.length > 0) {
        const roomId = stay.reviews[0].roomId;
        for (const floor of property.floors) {
            const room = floor.rooms.find(r => r.id === roomId);
            if (room) {
                roomInfo = { number: room.number, type: room.type };
                break;
            }
        }
    }


    return (
        <div className="relative flex-1 pt-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl min-h-screen overflow-y-auto">
            {/* Close Button */}
            {deviceIsMobile &&
                <button
                    onClick={() => setShowOverlay(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white/60 backdrop-blur-md p-2 rounded-full shadow-md transition-colors z-10"
                >
                    <IoMdClose size={24} className="pointer-events-none" />
                </button>
            }

            {/* Header */}
            <h2 className="text-md sm:text-md md:text-md font-extrabold text-blue-600 mb-1 drop-shadow-md z-0">
                {formatTenantName(tenant.firstName, tenant.lastName, tenant.gender)} [{tenant.gender[0]}]
            </h2>

            {/* Info Section */}

            <div className="inline-flex flex-wrap gap-2 justify-left">
                <span className="bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-inner">
                    {property.name} [{roomInfo && roomInfo.type}]
                </span>
                {(roomInfo && IsTempDisabled) && (
                    <>
                        <span className="bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-inner">
                            {roomInfo.number}
                        </span>
                        <span className="bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-inner">
                            {roomInfo.type}
                        </span>
                    </>
                )}
            </div>

            {/* Payments */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 my-4 border-b border-gray-200 py-2">Rent History</h3>
                <PaymentTable data={stay.payments} />
            </section>

            {/* Reviews */}
            <section className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Owner Feedback</h3>
                <div className="space-y-5">
                    {stay.reviews.length > 0 ? (
                        stay.reviews.map((r, i) => <ReviewItem key={i} review={r} />)
                    ) : (
                        <p className="italic text-gray-500">No reviews available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TenantDetails;
