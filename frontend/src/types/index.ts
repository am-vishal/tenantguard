export type PaymentStatus = 'On Time' | 'Before due date' | 'After Due date' | 'Not Paid';

export interface Tenant {
    id: number;
    name: string;
    property: string;
    floor?: string;
    room?: string;
    payments: Payment[];
    reviews: Review[];
}

export interface Payment {
    month: string;
    status: PaymentStatus;
    comments: string;
}

export interface Review {
    date: string;
    comment: string;
    rating: number; // 1-5
}