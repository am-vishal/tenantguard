import { useEffect } from "react";

export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const isValidPassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&^#()\-_=+{}[\]|\\:;"'<>,./~`]{6,}$/;
    return regex.test(password);
};

export const isValidName = (name: string): boolean => {
    return name.trim().length >= 2;
};

export const isValidPhone = (number: string): boolean => {
    return number.length === 10;
};

export const isValidAadhaar = (aadhaar: string): boolean => {
    return aadhaar.toString().length === 12;
};

export const isValidEmailOrPhone = (emailOrPhone: string): boolean => {
    const phoneRegex = /^[1-9][0-9]{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return phoneRegex.test(emailOrPhone) || emailRegex.test(emailOrPhone);
};

export const handleLimitedDigitsInput = (value: string, maxLength: number, setter: (val: string) => void) => {
    const onlyDigits = value.replace(/\D/g, ''); // Remove non-digit characters
    // If the user pasted a long value, take last 'n' digits
    if (onlyDigits.length > maxLength) {
        setter(onlyDigits.slice(-maxLength));
    } else {
        setter(onlyDigits); // Allow input if within limit
    }
};

export const useScrollBlock = () => {
    useEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);
};