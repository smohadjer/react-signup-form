import Ajv from 'ajv';

export function sanitize(data) {
    const temp = {};
    for (const [key, value] of Object.entries(data)) {
        if (value.length > 0) {
            temp[key] = value;
        }
    }
    return temp;
}

export const ajv = new Ajv({
    coerceTypes: true,
    allErrors: true,
    strict: false,
});
