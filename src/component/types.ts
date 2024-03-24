export interface Field {
    id: string,
    label: string,
    required?: boolean,
    inputType: string;
    pattern?: string;
    placeholder: string;
    error?: string;
}
