// Utility Types
export type Gender = 'Male' | 'Female' | 'Other';
export type TenantStatus = 'Active' | 'Inactive';
export type PaymentStatus = 'On Time' | 'Before due date' | 'After Due date' | 'Not Paid';
export type StayStatus = 'Ongoing' | 'Completed' | 'Terminated';

export interface Property {
    id: number;
    name: string;
    address: string;
    floors: Floor[];
}

export interface Floor {
    number: string;
    rooms: Room[];
}

export interface Room {
    id: number;
    number: string;
    type: string; // e.g., '1BHK', '2BHK', 'RKT'
    rentAmount: number;
    isOccupied: boolean;
}

// Core Tenant Data
export interface Tenant {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    aadhaar: string; // 12 digits
    dateOfBirth?: string; // 'DD-MM-YYYY'
    gender: Gender;
    address?: string;
    status: TenantStatus;
    emergencyContact?: string;
    stays: Stay[];
}

// Tracks where the tenant is staying or has stayed
export interface Stay {
    property: Property;
    checkIn: string; // 'DD-MM-YYYY'
    checkOut?: string;
    status: StayStatus;
    payments: Payment[];
    reviews: Review[];
}

// Monthly payment status for a stay
export interface Payment {
    month: string; // 'MM-YYYY'
    status: PaymentStatus;
    amountPaid: number;
    dueAmount: number;
    comments?: string;
}

// Reviews for a particular stay
export interface Review {
    date: string; // 'DD-MM-YYYY'
    comment: string;
    rating: number; // 1-5
    propertyId: number;
    roomId: number;
}
