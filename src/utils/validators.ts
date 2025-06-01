export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const isValidPassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])?(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
};

export const isValidName = (name: string): boolean => {
    return name.trim().length >= 2;
};
