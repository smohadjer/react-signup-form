export interface Field {
    id: string,
    label: string,
    required?: boolean,
    type: string;
    pattern?: string;
    placeholder: string;
    error?: string;
    hasStrengthIndicator?: boolean;
    hasDisplayToggle?: boolean;
    errorsObject?: Error;
}

export interface Error {
    id: string;
    error: string;
}

export interface FormProps {
    method: string;
    action: string;
    fields: Field[];
    label: string;
    disableValidation?: boolean;
}

export interface ServerError {
    instancePath: string;
    message: string;
    params: {
        missingProperty: string;
    }
}
