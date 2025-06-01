/**
 * Checks if a value is undefined, null, or an empty string.
 * @param value - The value to be checked.
 * @returns True if the value is considered empty; otherwise, false.
 */
const isEmpty = (value: any): boolean => {
    if (value === undefined || value === null) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    return false;
};

/**
 * Checks if a value is NaN using Object.is.
 * @param value - The value to check.
 * @returns True if value is NaN; otherwise, false.
 */
const isNaN = (value: any): boolean => Object.is(value, NaN);

/**
 * Checks if a value is undefined, null, NaN, an empty array, or an empty object.
 * @param value - The value to be checked.
 * @returns True if the value is empty or invalid; otherwise, false.
 */
const isEmptyArrayOrObject = (value: any): boolean => {
    if (isEmpty(value) || isNaN(value)) return true;
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0;
    return false;
};

/**
 * Trims and lowercases a string if it is of type string.
 * @param str - The input string.
 * @returns The trimmed and lowercased string or the original value if not a string.
 */
const trimAndLowercase = (str: any): string | any =>
    typeof str === 'string' ? str.trim().toLowerCase() : str;

/**
 * Sorts an array of objects based on a specified key and sort order.
 * @param data - The array to be sorted.
 * @param selectedSort - The sort order: 'A to Z', 'Z to A', 'Latest to Oldest', 'Oldest to Latest'.
 * @param sortKey - The key to sort by.
 * @returns The sorted array.
 */
const sortData = (
    data: any[] = [],
    selectedSort: 'A to Z' | 'Z to A' | 'Latest to Oldest' | 'Oldest to Latest' = 'A to Z',
    sortKey: string
): any[] => {
    if (isEmptyArrayOrObject(data) || isEmpty(sortKey)) return [];

    const sortedData = JSON.parse(JSON.stringify(data)); // Deep clone

    switch (selectedSort) {
        case 'A to Z':
            sortedData.sort((a: any, b: any) =>
                (a[sortKey] || '').localeCompare(b[sortKey] || '')
            );
            break;
        case 'Z to A':
            sortedData.sort((a: any, b: any) =>
                (b[sortKey] || '').localeCompare(a[sortKey] || '')
            );
            break;
        case 'Latest to Oldest':
            sortedData.sort((a: any, b: any) =>
                new Date(b[sortKey]).getTime() - new Date(a[sortKey]).getTime()
            );
            break;
        case 'Oldest to Latest':
            sortedData.sort((a: any, b: any) =>
                new Date(a[sortKey]).getTime() - new Date(b[sortKey]).getTime()
            );
            break;
        default:
            break;
    }

    return sortedData;
};

/**
 * Filters an array to get either duplicates or non-duplicates based on specified keys.
 * @param arr - The input array.
 * @param searchKeys - The key(s) to use for identifying duplicates.
 * @param getNonDuplicates - If true, returns non-duplicates; if false, returns duplicates.
 * @returns The filtered array.
 */
const getNonDuplicates = (
    arr: any[],
    searchKeys: string | string[],
    getNonDuplicates: boolean = true
): any[] => {
    if (isEmptyArrayOrObject(arr)) return [];

    const seen = new Map<string, boolean>();

    const getKey = (item: any): string => {
        if (typeof searchKeys === 'string') return item[searchKeys];
        if (Array.isArray(searchKeys)) {
            return searchKeys.map((key) => item[key]).join('-');
        }
        return '';
    };

    const result = arr.filter((item) => {
        const key = getKey(item);
        const exists = seen.has(key);
        seen.set(key, true);
        return getNonDuplicates ? !exists : exists;
    });

    const type = getNonDuplicates ? 'Non-Duplicates' : 'Duplicates';
    console.log(`Original Array Count: ${arr.length} | ${type} Count: ${result.length}`);

    return result;
};

export {
    isEmpty,
    isNaN,
    isEmptyArrayOrObject,
    trimAndLowercase,
    sortData,
    getNonDuplicates,
};
