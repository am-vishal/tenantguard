/**
 * Checks if a value is undefined, null, or an empty string.
 * @param value - The value to be checked.
 * @returns True if the value is considered empty; otherwise, false.
 */
const isEmpty = (value: unknown): boolean => {
    if (value === undefined || value === null) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    return false;
};

/**
 * Checks if a value is NaN using Object.is.
 * @param value - The value to check.
 * @returns True if value is NaN; otherwise, false.
 */
const isNaN = (value: unknown): boolean => Object.is(value, NaN);

/**
 * Checks if a value is undefined, null, NaN, an empty array, or an empty object.
 * @param value - The value to be checked.
 * @returns True if the value is empty or invalid; otherwise, false.
 */
const isEmptyArrayOrObject = (value: unknown): boolean => {
    if (isEmpty(value) || isNaN(value)) return true;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0;
    return false;
};


export {
    isEmpty,
    isNaN,
    isEmptyArrayOrObject,
};
