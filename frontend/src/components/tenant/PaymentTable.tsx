import React from "react";
import { StatusBadge } from "./StatusBadge";
import { Payment } from '../../types/index.ts';

interface PaymentTableProps {
    data: Payment[];
}

export const PaymentTable: React.FC<PaymentTableProps> = ({ data }) => {
    return (
        <div className="overflow-x-auto bg-white shadow rounded-md">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="px-4 py-2">Month</th>
                        <th className="px-4 py-2">Payment Status</th>
                        <th className="px-4 py-2">Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((payment, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-4 py-2">{payment.month}</td>
                            <td className="px-4 py-2">
                                <StatusBadge status={payment.status} />
                            </td>
                            <td className="px-4 py-2">{payment.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
