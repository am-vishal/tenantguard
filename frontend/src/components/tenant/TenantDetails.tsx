import { Tenant } from '../../types';
import { FC } from 'react';
import { PaymentTable } from './PaymentTable';
import ReviewItem from '../review/ReviewItem';

interface TenantDetailsProps {
    tenant: Tenant | null;
}

const TenantDetails: FC<TenantDetailsProps> = ({ tenant }) => {
    if (!tenant)
        return (
            <div className="flex-1 flex items-center justify-center text-gray-400 italic text-lg select-none">
                Select a tenant to view details
            </div>
        );

    return (
        <div className="flex-1 p-8 bg-white rounded-lg shadow-lg max-h-[600px] overflow-y-auto">
            <h2 className="text-3xl font-extrabold text-blue-700 mb-5">{tenant.name}</h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-700 mb-8">
                <p><span className="font-semibold">Property:</span> {tenant.property}</p>
                {tenant.floor && <p><span className="font-semibold">Floor:</span> {tenant.floor}</p>}
                {tenant.room && <p><span className="font-semibold">Room:</span> {tenant.room}</p>}
            </div>

            {/* Payments */}
            <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Rent History</h3>
                <PaymentTable data={tenant.payments} />
            </section>

            {/* Reviews */}
            <section className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Owner Feedback</h3>
                <div className="space-y-5">
                    {tenant.reviews.length ? (
                        tenant.reviews.map((r, i) => <ReviewItem key={i} review={r} />)
                    ) : (
                        <p className="italic text-gray-500">No reviews available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default TenantDetails;
