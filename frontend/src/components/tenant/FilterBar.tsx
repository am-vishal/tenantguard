import React from "react";

interface FilterBarProps {
    selectedStatus: string;
    onChange: (status: string) => void;
}

const statuses = ["All", "Before due date", "On Time", "After Due date", "Not Paid"];

export const FilterBar: React.FC<FilterBarProps> = ({ selectedStatus, onChange }) => {
    return (
        <div className="flex gap-3 flex-wrap mb-4">
            {statuses.map((status) => (
                <button
                    key={status}
                    onClick={() => onChange(status)}
                    className={`px-4 py-2 rounded-md border ${selectedStatus === status ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        } hover:bg-blue-100 transition`}
                >
                    {status}
                </button>
            ))}
        </div>
    );
};
