import {
    Tenant,
    Stay,
    Review,
    Payment,
    PaymentStatus,
    StayStatus,
    Gender,
    Property,
    Floor
} from '../types/index.ts';

const firstNames = [
    'Amit', 'Ravi', 'Rohit', 'Arjun', 'Manish', 'Nikhil', 'Sandeep', 'Raj', 'Sunil', 'Rahul', 'Deepak', 'Vikram', 'Gaurav', 'Vinay', 'Vishal', 'Kiran', 'Neha', 'Priya', 'Meena', 'Sneha', 'Anjali', 'Pooja', 'Divya', 'Kavita', 'Jyoti', 'Puja', 'Swati', 'Rekha', 'Sakshi', 'Payal', 'Shivani'];

const femaleNames = new Set(['Kiran', 'Neha', 'Priya', 'Meena', 'Sneha', 'Anjali', 'Pooja', 'Divya', 'Kavita', 'Jyoti', 'Puja', 'Swati', 'Rekha', 'Sakshi', 'Payal', 'Shivani']);

const lastNames = [
    'Kumar', 'Verma', 'Sharma', 'Singh', 'Gupta', 'Yadav', 'Patel', 'Joshi', 'Bhardwaj', 'Reddy',
    'Iyer', 'Thakur', 'Choudhary', 'Mishra', 'Agarwal', 'Nair', 'Das', 'Banerjee', 'Malhotra', 'Tripathi'
];

const roomTypes = ['1BHK', '2BHK', '3BHK', 'Studio-Room', 'RK'];

const paymentStatuses: PaymentStatus[] = ['On Time', 'Before due date', 'After Due date', 'Not Paid'];

const reviewComments = [
    'Pays rent promptly and is cooperative.',
    'Maintains the property well.',
    'A bit noisy on weekends.',
    'Very friendly and communicative.',
    'Requires reminders for rent.',
    'Keeps room clean and organized.',
    'Quiet and respectful tenant.',
    'Sometimes delays payment.',
    'No issues so far.',
    'Tenant throws parties occasionally.',
    'Never missed a payment.',
    'Needs to improve cleanliness.'
];

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const getRandomDate = (): string => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 100));
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const generateMockProperty = (id: number): Property => {
    const floors: Floor[] = [];
    for (let f = 1; f <= 4; f++) {
        const floor: Floor = {
            number: f.toString(),
            rooms: Array.from({ length: 3 }, (_, ri) => {
                const roomId = id * 100 + f * 10 + ri;
                return {
                    id: roomId,
                    number: `${f}0${ri + 1}`,
                    type: getRandomElement(roomTypes),
                    rentAmount: 8000 + ri * 1000,
                    isOccupied: Math.random() < 0.7
                };
            })
        };
        floors.push(floor);
    }

    return {
        id,
        name: `Property ${String.fromCharCode(65 + id)}`,
        address: `Main Road, Block ${id + 1}, City`,
        floors
    };
};

export const generateMockTenants = (count: number): Tenant[] => {
    const tenants: Tenant[] = [];

    for (let i = 0; i < count; i++) {
        const firstName = getRandomElement(firstNames);
        const gender: Gender = femaleNames.has(firstName) ? 'Female' : 'Male';
        let lastName = getRandomElement(lastNames);
        if (gender === 'Female' && lastName === 'Kumar') lastName = 'Kumari';

        const stayStatus: StayStatus = Math.random() > 0.2 ? 'Ongoing' : 'Completed';
        const tenantStatus = stayStatus === 'Ongoing' ? 'Active' : 'Inactive';

        // Property & Room Assignment
        const property = generateMockProperty(i % 4);
        const floor = getRandomElement(property.floors);
        const room = getRandomElement(floor.rooms);

        // Payment History
        const payments: Payment[] = ['Oct-2024', 'Nov-2024', 'Dec-2024', 'Jan-2025', 'Feb-2025', 'Mar-2025', 'Apr-2025', 'May-2025', 'Jun-2025', 'Jul-2025'].map(month => {
            const status = getRandomElement(paymentStatuses);
            const paid = status !== 'Not Paid';
            return {
                month,
                status,
                amountPaid: paid ? room.rentAmount : 0,
                dueAmount: room.rentAmount,
                comments: paid ? 'Paid via UPI' : 'Payment pending'
            };
        });

        // Reviews
        const reviews: Review[] = Array.from({ length: Math.floor(Math.random() * 2) + 1 }, () => ({
            date: getRandomDate(),
            comment: getRandomElement(reviewComments),
            rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
            propertyId: property.id,
            roomId: room.id
        }));

        const stay: Stay = {
            property,
            checkIn: getRandomDate(),
            status: stayStatus,
            payments,
            reviews,
            ...(stayStatus !== 'Ongoing' && { checkOut: getRandomDate() })
        };

        const tenant: Tenant = {
            id: i + 1,
            firstName,
            lastName,
            gender,
            phone: `98765${Math.floor(100000 + Math.random() * 899999)}`,
            aadhaar: `${Math.floor(100000000000 + Math.random() * 899999999999)}`,
            email: `${firstName.toLowerCase()}@example.com`,
            address: `House No. ${i + 10}, Street ${i + 5}, City`,
            status: tenantStatus,
            stays: [stay],
            emergencyContact: `98${Math.floor(100000000 + Math.random() * 899999999)}`
        };

        tenants.push(tenant);
    }

    return tenants;
};
