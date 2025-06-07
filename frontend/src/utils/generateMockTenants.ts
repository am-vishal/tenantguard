import { Tenant, PaymentStatus, Payment, Review } from '../types/index.ts';

const firstNames = [
    'Amit', 'Ravi', 'Kiran', 'Suman', 'Neha', 'Priya', 'Meena', 'Rohit', 'Sneha', 'Arjun',
    'Manish', 'Anjali', 'Nikhil', 'Pooja', 'Sandeep', 'Divya', 'Kavita', 'Raj', 'Jyoti', 'Sunil',
    'Shivani', 'Rahul', 'Puja', 'Deepak', 'Swati', 'Vikram', 'Rekha', 'Gaurav', 'Sakshi', 'Vinay', 'Payal',
    'Vishal'
];

const lastNames = [
    'Kumar', 'Verma', 'Sharma', 'Singh', 'Gupta', 'Yadav', 'Patel', 'Joshi', 'Bhardwaj', 'Reddy',
    'Iyer', 'Thakur', 'Choudhary', 'Mishra', 'Agarwal', 'Nair', 'Das', 'Banerjee', 'Malhotra', 'Tripathi'
];

const properties = ['Property A', 'Property B', 'Property C', 'Property D'];
const paymentStatuses: PaymentStatus[] = ['On Time', 'Before due date', 'After Due date', 'Not Paid'];
const paymentComments = ['UPI', 'Cash', 'Auto-debit', '3 days late', 'Pending', '13 days late', 'Paid early'];

const reviewComments = [
    'Pays rent promptly and is cooperative.',
    'Maintains the property well.',
    'A bit noisy on weekends.',
    'Very friendly and communicative.',
    'Requires reminders for rent.',
    'Keeps room clean and organized.',
    'Quiet and respectful tenant.',
    'Sometimes delays payment.',
    'Leaves lights on frequently.',
    'No issues so far.',
    'Easy to coordinate with.',
    'Tenant throws parties occasionally.',
    'Never missed a payment.',
    'Has pets but keeps things tidy.',
    'Needs to improve cleanliness.'
];

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const getRandomDate = (): string => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 60));
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const generateUniqueNames = (count: number): string[] => {
    const combinations = new Set<string>();
    while (combinations.size < count) {
        const fullName = `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
        combinations.add(fullName);
        // Once all combinations are exhausted
        if (combinations.size >= firstNames.length * lastNames.length) break;
    }
    return Array.from(combinations).slice(0, count);
};

export const generateMockTenants = (count: number): Tenant[] => {
    const uniqueNames = generateUniqueNames(count);

    return Array.from({ length: count }, (_, index) => {
        const payments = ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(month => ({
            month,
            status: getRandomElement(paymentStatuses),
            comments: getRandomElement(paymentComments),
        }));

        const reviews = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => ({
            date: getRandomDate(),
            comment: getRandomElement(reviewComments),
            rating: parseFloat((Math.random() * 4 + 1).toFixed(1)), // 1.0 to 5.0
        }));

        const includeFloorRoom = Math.random() < 0.5;
        const getOrdinal = (num: number): string => {
            switch (num) {
                case 1: return '1st Floor';
                case 2: return '2nd Floor';
                case 3: return '3rd Floor';
                case 4: return '4th Floor';
                default: return `${num}th Floor`;
            }
        };
        return {
            id: index + 1,
            name: uniqueNames[index],
            property: getRandomElement(properties),
            ...(includeFloorRoom && {
                floor: getOrdinal(Math.ceil(Math.random() * 4)),
                room: `10${Math.floor(Math.random() * 9)}`,
            }),
            payments,
            reviews,
        } as Tenant;
    });
};
