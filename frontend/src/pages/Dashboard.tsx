import React, { useState } from "react";
import { PaymentTable } from "../components/PaymentTable";
import { FilterBar } from "../components/FilterBar";

interface Payment {
    month: string;
    status: string;
    comments: string;
}

const mockPayments: Payment[] = [
    { month: "January", status: "On Time", comments: "Paid via UPI" },
    { month: "February", status: "After Due date", comments: "Paid 3 days late" },
    { month: "March", status: "Not Paid", comments: "Pending" },
    { month: "April", status: "Before due date", comments: "Paid early" },
];

export const Dashboard: React.FC = () => {
    const [aadharVerified, setAadharVerified] = useState(true); // replace with real check
    const [propertyRegistered, setPropertyRegistered] = useState(true); // replace with real check
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredPayments =
        statusFilter === "All"
            ? mockPayments
            : mockPayments.filter((p) => p.status === statusFilter);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">TenantGuard Dashboard</h1>

            {!aadharVerified ? (
                <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md">
                    Please verify your Aadhar number to proceed.
                </div>
            ) : !propertyRegistered ? (
                <div className="bg-red-100 text-red-800 p-4 rounded-md">
                    Please register at least one property to access tenant search.
                </div>
            ) : (
                <>
                    <FilterBar selectedStatus={statusFilter} onChange={setStatusFilter} />
                    <PaymentTable data={filteredPayments} />
                </>
            )}
        </div>
    );
};

export default Dashboard;
