import React from "react";

interface StatusBadgeProps {
    status: string;
}

const statusColors: Record<string, string> = {
    "Before due date": "bg-green-100 text-green-800",
    "On Time": "bg-blue-100 text-blue-800",
    "After Due date": "bg-yellow-100 text-yellow-800",
    "Not Paid": "bg-red-100 text-red-800",
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    return (
        <span
            className={`px-2 py-1 rounded-full text-sm font-medium ${statusColors[status] || "bg-gray-200 text-gray-800"}`}
        >
            {status}
        </span>
    );
};
